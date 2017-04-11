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
        var row = table.children().first();

        course.numCategories = row.children().length - 3;

        for (var i = 0; i < table.children().length; i++) {
          if (row.children().first().text() == course.secret) {
            break;
          }
          row = row.next();
        }
        course.overallRank = parseInt(row.children().last().prev().text());
        course.overallScore = row.children().last().text();
        resolve(course);
      } else {
        reject(error);
      }
    });
  });
};

module.exports = Course;
