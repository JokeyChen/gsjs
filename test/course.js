import test from 'ava';
import moment from 'moment';
import app from '../index';

test.beforeEach(t => {
  t.context.url = 'http://www.gradesource.com/reports/823/28732/index.html';
  t.context.secret = 6454;
  t.context.name = 'CSE 120';
  t.context.instructor = 'Professor Joseph Pasquale';
  t.context.last_update = moment('3/31/2017 5:43:01 AM', 'M/D/YYYY h:mm:ss A').toString();
  t.context.overallRank = 103;
  t.context.overallScore = '77.08%';
  t.context.numCategories = 3;
  t.context.categories = [
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
  ];
});

test('url is correct', async t => {
  var course = await app.createCourse(t.context.url, t.context.secret);
  t.is(course.url, t.context.url);
});

test('secret is correct', async t => {
  var course = await app.createCourse(t.context.url, t.context.secret);
  t.is(course.secret, t.context.secret);
});

test('name is correct', async t => {
  var course = await app.createCourse(t.context.url, t.context.secret);
  t.is(course.name, t.context.name);
});

test('instructor is correct', async t => {
  var course = await app.createCourse(t.context.url, t.context.secret);
  t.is(course.instructor, t.context.instructor);
});

test('last_update is correct', async t => {
  var course = await app.createCourse(t.context.url, t.context.secret);
  t.is(course.last_update, t.context.last_update);
});

test('overall rank is correct', async t => {
  var course = await app.createCourse(t.context.url, t.context.secret);
  t.is(course.overallRank, t.context.overallRank);
});

test('overall score is correct', async t => {
  var course = await app.createCourse(t.context.url, t.context.secret);
  t.is(course.overallScore, t.context.overallScore);
});

test('num of categories is correct', async t => {
  var course = await app.createCourse(t.context.url, t.context.secret);
  t.is(course.numCategories, t.context.numCategories);
});

test('categories is correct', async t => {
  var course = await app.createCourse(t.context.url, t.context.secret);
  t.deepEqual(course.categories, t.context.categories);
});
