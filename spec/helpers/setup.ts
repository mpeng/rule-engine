const Jasmine = require('jasmine');

// Example of adding a custom matcher
beforeEach(() => {

  // Example: Mocking a console.warn in tests
  spyOn(console, 'warn').and.callThrough();

  jasmine.addMatchers({
    toBeDivisibleBy: () => {
      return {
        compare: (actual: number, expected: number) => {
          const result = {
            pass: actual % expected === 0,
            message: `Expected ${actual} to be divisible by ${expected}`,
          };
          if (!result.pass) {
            result.message = `Expected ${actual} to be divisible by ${expected}, but it wasn't.`;
          }
          return result;
        },
      };
    },
  });
});

// Example: Setting up a global variable for all tests
globalThis.testEnv = {
  apiUrl: 'https://api.example.com',
};

console.log('Jasmine setup completed.');
