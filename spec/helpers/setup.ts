const Jasmine = require('jasmine');

// Add custom matchers globally
beforeAll(() => {
  jasmine.addMatchers({
    toBeDivisibleBy: () => {
      return {
        compare: (actual: number, expected: number) => {
          if (expected === 0) {
            return {
              pass: false,
              message: `Division by zero is undefined.`,
            };
          }
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

// Example: Mocking a console.warn in tests
beforeEach(() => {
  spyOn(console, 'warn').and.callThrough();
});

// Example: Setting up a global variable for all tests
globalThis.testEnv = {
  apiUrl: 'https://api.example.com',
};

console.log('Jasmine setup completed.');
