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

2. Call the createCourse() method by passing an url and a secret code provided by instructor. The method return a promise, so do whatever you want with the course object inside then()
  ```
  gsjs.createCourse('http://www.some-url.com', 1234).then(function (course) {
    console.log('Course Name:', course.name);
  });
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
