import test from 'ava';
import moment from 'moment';
import app from '../index';

test.beforeEach(t => {
  t.context.courses = [{
    url: 'http://www.gradesource.com/reports/823/28732/index.html',
    secret: 6454,
    name: 'CSE 120',
    instructor: 'Professor Joseph Pasquale',
    last_update: moment('3/31/2017 5:43:01 AM', 'M/D/YYYY h:mm:ss A').toString(),
    overallRank: 103,
    overallScore: '77.08%',
    categories: [
      {
        name: 'Programming',
        props: [
          { name: 'Rank' },
          { name: 'Points', value: '30' },
          { name: 'Score', value: '100%' }
        ]
      },
      {
        name: 'Midterm',
        props: [
          { name: 'Rank' },
          { name: 'Points', value: '24' },
          { name: 'Score', value: '100%' }
        ]
      },
      {
        name: 'Final',
        props: [
          { name: 'Rank' },
          { name: 'Points', value: '60' },
          { name: 'Score', value: '100%' }
        ]
      }
    ]
  }];
});

test('url is correct', async t => {
  for (var course of t.context.courses) {
    var returnVal = await app.createCourse(course.url, course.secret);
    t.is(returnVal.url, course.url);
  }
});

test('secret is correct', async t => {
  for (var course of t.context.courses) {
    var returnVal = await app.createCourse(course.url, course.secret);
    t.is(returnVal.secret, course.secret);
  }
});

test('name is correct', async t => {
  for (var course of t.context.courses) {
    var returnVal = await app.createCourse(course.url, course.secret);
    t.is(returnVal.name, course.name);
  }
});

test('instructor is correct', async t => {
  for (var course of t.context.courses) {
    var returnVal = await app.createCourse(course.url, course.secret);
    t.is(returnVal.instructor, course.instructor);
  }
});

test('last_update is correct', async t => {
  for (var course of t.context.courses) {
    var returnVal = await app.createCourse(course.url, course.secret);
    t.is(returnVal.last_update, course.last_update);
  }
});

test('overall rank is correct', async t => {
  for (var course of t.context.courses) {
    var returnVal = await app.createCourse(course.url, course.secret);
    t.is(returnVal.overallRank, course.overallRank);
  }
});

test('overall score is correct', async t => {
  for (var course of t.context.courses) {
    var returnVal = await app.createCourse(course.url, course.secret);
    t.is(returnVal.overallScore, course.overallScore);
  }
});

test('categories is correct', async t => {
  for (var course of t.context.courses) {
    var returnVal = await app.createCourse(course.url, course.secret);
    t.deepEqual(returnVal.categories, course.categories);
  }
});
