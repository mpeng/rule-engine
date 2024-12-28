"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuleEvaluator = /** @class */ (function () {
    function RuleEvaluator() {
        this.rules = [
            { ageCondition: '>= 18', incomeCondition: '>= 50000', locationCondition: 'US', outcome: 'Eligible' },
            { ageCondition: '< 18', incomeCondition: 'Any', locationCondition: 'Any', outcome: 'Not Eligible' },
            { ageCondition: '>= 18', incomeCondition: '< 50000', locationCondition: 'Any', outcome: 'Not Eligible' },
            { ageCondition: '>= 18', incomeCondition: '>= 50000', locationCondition: 'Outside US', outcome: 'Not Eligible' },
        ];
    }
    RuleEvaluator.prototype.evaluateConditions = function (age, income, location) {
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            var ageValid = this.checkCondition(age, rule.ageCondition);
            var incomeValid = this.checkCondition(income, rule.incomeCondition);
            var locationValid = rule.locationCondition === 'Any' || location === rule.locationCondition;
            if (ageValid && incomeValid && locationValid) {
                return rule.outcome;
            }
        }
        return 'Not Eligible'; // Default outcome
    };
    RuleEvaluator.prototype.checkCondition = function (value, condition) {
        if (condition.indexOf('>=') >= 0) {
            return value >= parseFloat(condition.split('>=')[1].trim());
        }
        else if (condition.indexOf('<=') >= 0) {
            return value <= parseFloat(condition.split('<=')[1].trim());
        }
        else if (condition.indexOf('<') >= 0) {
            return value < parseFloat(condition.split('<')[1].trim());
        }
        else if (condition.indexOf('>') >= 0) {
            return value > parseFloat(condition.split('>')[1].trim());
        }
        else if (condition === 'Any') {
            return true;
        }
        return false;
    };
    return RuleEvaluator;
}());
var ruleEvaluator = new RuleEvaluator();
console.log(ruleEvaluator.evaluateConditions(20, 60000, 'US')); // Example test
