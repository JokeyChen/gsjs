const Course = require('./lib/course');

exports.createCourse = function (url, secret) {
  var course = new Course(url, secret);
  return course.scrapeInfo();
};
