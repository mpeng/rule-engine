"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TeosRuleEvaluator = /** @class */ (function () {
    function TeosRuleEvaluator() {
        this.rules = [
            { stateCondition: '>= 18', slaCondition: '>= 50000', alertCondition: 'US', outcome: { message: 'A0', leftIcon: 'B', rightIcon: 'C' } },
            { stateCondition: '< 18', slaCondition: 'Any', alertCondition: 'Any', outcome: { message: 'A1', leftIcon: 'B', rightIcon: 'C' } },
            { stateCondition: '>= 18', slaCondition: '< 50000', alertCondition: 'US', outcome: { message: 'A2', leftIcon: 'B', rightIcon: 'C' } },
            { stateCondition: '>= 18', slaCondition: '>= 50000', alertCondition: 'Outside US', outcome: { message: 'A3', leftIcon: 'B', rightIcon: 'C' } }
        ];
    }
    TeosRuleEvaluator.prototype.evaluateConditions = function (age, income, location) {
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            var ageValid = this.checkCondition(age, rule.stateCondition);
            var incomeValid = this.checkCondition(income, rule.slaCondition);
            var locationValid = rule.alertCondition === 'Any' || location === rule.alertCondition;
            if (ageValid && incomeValid && locationValid) {
                return rule.outcome;
            }
        }
        return { message: 'c', leftIcon: 'c', rightIcon: 'c' }; // Default outcome
    };
    TeosRuleEvaluator.prototype.checkCondition = function (value, condition) {
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
    return TeosRuleEvaluator;
}());
var ruleEvaluator = new TeosRuleEvaluator();
console.log(ruleEvaluator.evaluateConditions(20, 60000, 'US')); // Example test
