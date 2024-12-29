var Jasmine = require('jasmine');
// Add custom matchers globally
beforeAll(function () {
    jasmine.addMatchers({
        toBeDivisibleBy: function () {
            return {
                compare: function (actual, expected) {
                    if (expected === 0) {
                        return {
                            pass: false,
                            message: "Division by zero is undefined.",
                        };
                    }
                    var result = {
                        pass: actual % expected === 0,
                        message: "Expected ".concat(actual, " to be divisible by ").concat(expected),
                    };
                    if (!result.pass) {
                        result.message = "Expected ".concat(actual, " to be divisible by ").concat(expected, ", but it wasn't.");
                    }
                    return result;
                },
            };
        },
    });
});
// Example: Mocking a console.warn in tests
beforeEach(function () {
    spyOn(console, 'warn').and.callThrough();
});
// Example: Setting up a global variable for all tests
globalThis.testEnv = {
    apiUrl: 'https://api.example.com',
};
console.log('Jasmine setup completed.');
