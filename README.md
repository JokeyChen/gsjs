# gsjs (GradeSource web scraper)
gsjs is a web scraper that scrapes all the course information as well as scores and rank for a specific user from GradeSource website.

## Getting Started

### Prerequisites

You need to have node.js and npm to install gsjs. Check your node.js version by running
```
node -v
```

### Installing

If you want to use this package in your own project, install the package from npm by running

```
npm install gsjs
```

Or if you want to have the source code, just clone this repo.

### Usage

Two simple steps to use:
1. Import the package in your javascript file

  ```
  const gsjs = require('gsjs');
  ```

2. Call the createCourse() method by passing an url and a secret code provided by instructor. The method returns a promise, so do whatever you want with the course object inside then(). For example,
  ```
  gsjs.createCourse('http://www.gradesource.com/reports/823/28732/index.html', 7414).then(function (course) {
    console.log('***** course object: *****');
    console.log(course);
  });
  ```
will output the following

  ```
  ***** course object: *****
  Course {
    url: 'http://www.gradesource.com/reports/823/28732/index.html',
    secret: 7414,
    name: 'CSE 120',
    instructor: 'Professor Joseph Pasquale',
    last_update: 'Fri Mar 31 2017 05:43:01 GMT-0700',
    categories:
     [ { name: 'Programming', props: [Object] },
       { name: 'Midterm', props: [Object] },
       { name: 'Final', props: [Object] } ],
    scores:
     [ { category: 'Programming', rank: 34, points: 29, score: '96.67%' },
       { category: 'Midterm', rank: 44, points: 21, score: '87.50%' },
       { category: 'Final', rank: 5, points: 52, score: '86.67%' } ],
    overallRank: 9,
    overallScore: '89.92%' }
  ```

## Testing

This project uses ava for testing. If you are in the gsjs directory, simply run
```
npm test
```

or

```
ava
```

to run all the tests.

## Documentation
TODO

## Todos
- [ ] Documentation
- [ ] Error checking
- [ ] Improve data output

## Contributing

All issues are welcome to tackle on and please send me a pull request if possible.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
