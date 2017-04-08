const Course = require('./lib/course');

exports.createCourse = async function (url, secret) {
  var course = new Course(url, secret);
  course = await course.scrapeInfo();
  course = await course.scrapeScore();
  return course;
};
