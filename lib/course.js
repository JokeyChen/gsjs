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

module.exports = Course;
