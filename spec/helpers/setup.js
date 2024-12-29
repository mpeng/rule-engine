var Jasmine = require('jasmine');
// Example of adding a custom matcher
beforeEach(function () {
    // Example: Mocking a console.warn in tests
    spyOn(console, 'warn').and.callThrough();
    jasmine.addMatchers({
        toBeDivisibleBy: function () {
            return {
                compare: function (actual, expected) {
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
// Example: Setting up a global variable for all tests
globalThis.testEnv = {
    apiUrl: 'https://api.example.com',
};
console.log('Jasmine setup completed.');
