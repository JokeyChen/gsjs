import test from 'ava';
import moment from 'moment';
import app from '../index';

test.beforeEach(t => {
  t.context.url = 'http://www.gradesource.com/reports/823/28732/index.html';
  t.context.secret = 6454;
  t.context.name = 'CSE 120';
  t.context.instructor = 'Professor Joseph Pasquale';
  t.context.last_update = moment('3/31/2017 5:43:01 AM', 'M/D/YYYY h:mm:ss A').toString();
});

test('url is correct', t => {
  return app.createCourse(t.context.url, t.context.secret).then(course => {
    t.is(course.url, t.context.url);
  });
});

test('secret is correct', t => {
  return app.createCourse(t.context.url, t.context.secret).then(course => {
    t.is(course.secret, t.context.secret);
  });
});

test('name is correct', t => {
  return app.createCourse(t.context.url, t.context.secret).then(course => {
    t.is(course.name, t.context.name);
  });
});

test('instructor is correct', t => {
  return app.createCourse(t.context.url, t.context.secret).then(course => {
    t.is(course.instructor, t.context.instructor);
  });
});

test('last_update is correct', t => {
  return app.createCourse(t.context.url, t.context.secret).then(course => {
    t.is(course.last_update, t.context.last_update);
  });
});
