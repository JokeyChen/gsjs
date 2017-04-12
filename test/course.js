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
          { name: 'Points', maxValue: '30' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Midterm',
        props: [
          { name: 'Rank' },
          { name: 'Points', maxValue: '24' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Final',
        props: [
          { name: 'Rank' },
          { name: 'Points', maxValue: '60' },
          { name: 'Score', maxValue: '100%' }
        ]
      }
    ],
    scores: [
      {
        category: 'Programming',
        rank: '159',
        points: '24.75',
        score: '82.50%'
      },
      {
        category: 'Midterm',
        rank: '70',
        points: '20',
        score: '83.33%'
      },
      {
        category: 'Final',
        rank: '88',
        points: '41',
        score: '68.33%'
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
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Teamwork',
        props: [
          { name: 'Rank' },
          { name: 'Points', maxValue: '75' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Labs',
        props: [
          { name: 'Rank' },
          { name: 'Points', maxValue: '90' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Project Artifacts',
        props: [
          { name: 'Rank' },
          { name: 'Points', maxValue: '309' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Project Implementation',
        props: [
          { name: 'Rank' },
          { name: 'Points', maxValue: '180' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Quizzes(Best 4 out of 5)',
        props: [
          { name: 'Rank' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Final',
        props: [
          { name: 'Rank' },
          { name: 'Points', maxValue: '149' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Professionalism',
        props: [
          { name: 'Rank' },
          { name: 'Points', maxValue: '1' },
          { name: 'Score', maxValue: '100%' }
        ]
      }
    ],
    scores: [
      {
        category: 'Participation',
        rank: '1',
        score: '97.78%'
      },
      {
        category: 'Teamwork',
        rank: '1',
        points: '75',
        score: '100.00%'
      },
      {
        category: 'Labs',
        rank: '1',
        points: '90',
        score: '100.00%'
      },
      {
        category: 'Project Artifacts',
        rank: '1',
        points: '308',
        score: '99.68%'
      },
      {
        category: 'Project Implementation',
        rank: '1',
        points: '180',
        score: '100.00%'
      },
      {
        category: 'Quizzes(Best 4 out of 5)',
        rank: '15',
        score: '94.44%'
      },
      {
        category: 'Final',
        rank: '59',
        points: '129',
        score: '86.58%'
      },
      {
        category: 'Professionalism',
        rank: '1',
        points: '1',
        score: '100.00%'
      }
    ]
  },
  {
    url: 'http://www.gradesource.com/reports/5805/28893/index.html',
    secret: 168,
    name: 'CSE 11',
    instructor: 'Joe Politz',
    last_update: moment('2/26/2017 10:28:01 PM', 'M/D/YYYY h:mm:ss A').toString(),
    overallScore: '68.35%',
    categories: [
      {
        name: 'Participation (clickers)',
        props: [
          { name: 'Points', maxValue: '28' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Reading',
        props: [
          { name: 'Points', maxValue: '400' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'ZyLab',
        props: [
          { name: 'Points', maxValue: '300' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Programming',
        props: [
          { name: 'Points', maxValue: '200' },
          { name: 'Score', maxValue: '100%' }
        ]
      },
      {
        name: 'Exams',
        props: [
          { name: 'Points', maxValue: '90' },
          { name: 'Score', maxValue: '100%' }
        ]
      }
    ],
    scores: [
      {
        category: 'Participation (clickers)',
        points: '9',
        score: '32.14%'
      },
      {
        category: 'Reading',
        points: '396.9',
        score: '99.23%'
      },
      {
        category: 'ZyLab',
        points: '300',
        score: '100.00%'
      },
      {
        category: 'Programming',
        points: '87',
        score: '43.50%'
      },
      {
        category: 'Exams',
        points: '66',
        score: '73.33%'
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

test('scores for each category are correct', async t => {
  for (var course of t.context.courses) {
    var returnVal = await app.createCourse(course.url, course.secret);
    t.deepEqual(returnVal.scores, course.scores);
  }
});
