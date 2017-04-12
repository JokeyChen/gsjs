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
  },
  {
    url: 'http://www.gradesource.com/reports/7/28639/index.html',
    secret: 2013,
    name: 'CSE 110',
    instructor: 'Gary Gillespie',
    last_update: moment('4/6/2017 9:39:02 PM', 'M/D/YYYY h:mm:ss A').toString(),
    overallRank: 7,
    overallScore: '94.70%',
    categories: [
      {
        name: 'Participation',
        props: [
          { name: 'Rank' },
          { name: 'Score', value: '100%' }
        ]
      },
      {
        name: 'Teamwork',
        props: [
          { name: 'Rank' },
          { name: 'Points', value: '75' },
          { name: 'Score', value: '100%' }
        ]
      },
      {
        name: 'Labs',
        props: [
          { name: 'Rank' },
          { name: 'Points', value: '90' },
          { name: 'Score', value: '100%' }
        ]
      },
      {
        name: 'Project Artifacts',
        props: [
          { name: 'Rank' },
          { name: 'Points', value: '309' },
          { name: 'Score', value: '100%' }
        ]
      },
      {
        name: 'Project Implementation',
        props: [
          { name: 'Rank' },
          { name: 'Points', value: '180' },
          { name: 'Score', value: '100%' }
        ]
      },
      {
        name: 'Quizzes(Best 4 out of 5)',
        props: [
          { name: 'Rank' },
          { name: 'Score', value: '100%' }
        ]
      },
      {
        name: 'Final',
        props: [
          { name: 'Rank' },
          { name: 'Points', value: '149' },
          { name: 'Score', value: '100%' }
        ]
      },
      {
        name: 'Professionalism',
        props: [
          { name: 'Rank' },
          { name: 'Points', value: '1' },
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
