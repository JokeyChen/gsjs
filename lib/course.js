const cheerio = require('cheerio');
const request = require('request');
const moment = require('moment');

var nameRegex = /\s-\s.*/;
var instrRegex = /Instructor:\s+/;
var updateRegex = /Last\sUpdate:\s+/;
var htmlRegex = /index\.html/;

var Course = function (url, secret) {
  this.url = url;
  this.secret = secret;
}

Course.prototype.scrapeInfo = function () {
  var course = this;
  return new Promise(function(resolve, reject) {
    request(course.url, function (error, response, body) {
      if (!error) {
        var $ = cheerio.load(body);
        course.name = $('font').eq(0).text().replace(nameRegex, '');
        course.instructor = $('font').eq(1).text().replace(instrRegex, '');
        course.last_update = moment($('font').eq(4).text().replace(updateRegex, ''), 'M/D/YYYY h:mm:ss A').toString();
        resolve(course);
      } else {
        reject(error);
      }
    });
  });
};

Course.prototype.scrapeScore = function () {
  var course = this;
  var url = course.url.replace(htmlRegex, 'coursestand.html');
  return new Promise(function(resolve, reject) {
    request(url, function (error, response, body) {
      if (!error) {
        var $ = cheerio.load(body);
        var tables = $('table');
        var table;
        tables.each(function () {
          if ($(this).attr('cellpadding') == 3) {
            table = $(this);
          }
        })
        // scrape categories info from the first three rows
        var row = table.children().first();
        var numCategories = row.children().length - 3;

        var categories = [];

        var item = row.children().first().next().next(); // first category
        var prop = row.next().children().first().next().next(); // first prop of first category
        var maxValue = row.next().next().children().first().next().next(); // first value of first prop
        for (var i = 0; i < numCategories; i++) {
          var newCategory = {};
          newCategory.name = item.text();
          newCategory.props = [];
          for (var j = 0; j < item.attr('colspan'); j++) {
            if (maxValue.text().trim().length > 0) {
              newCategory.props.push({
                name: prop.text(),
                maxValue: maxValue.text()
              });
            } else {
              newCategory.props.push({
                name: prop.text()
              });
            }
            prop = prop.next();
            maxValue = maxValue.next();
          }
          categories.push(newCategory);
          item = item.next();
        }
        course.categories = categories;

        for (var i = 0; i < table.children().length; i++) {
          if (row.children().first().text() == course.secret) {
            break;
          }
          row = row.next();
        }

        // get scores for each category

        // overall score and/or rank
        // some courses do not provide rank for overall grade
        if (item.attr('colspan') == 2) {
          course.overallRank = parseInt(row.children().last().prev().text());
          course.overallScore = row.children().last().text();
        } else {
          course.overallScore = row.children().last().text();
        }
        resolve(course);
      } else {
        reject(error);
      }
    });
  });
};

module.exports = Course;
