"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeosRuleCheck = void 0;
// state: RECEIVING, QUEUED, PROCESSING, COMPLETED
// sla: NONE, MET, BREACH
// alert: NONE, WARNING, ALERT
var TeosRuleCheck = /** @class */ (function () {
    function TeosRuleCheck() {
        this.rules = [
            { stateCondition: 'RECEIVING', slaCondition: 'MET', alertCondition: 'ANY',
                outcome: { message: 'RECEIVING_MET_ANY', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'RECEIVING', slaCondition: 'BREACH', alertCondition: 'ANY',
                outcome: { message: 'RECEIVING_BREACH_ANY', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'QUEUED', slaCondition: 'MET', alertCondition: 'WARNING',
                outcome: { message: 'QUEUED_MET_WARNING', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'QUEUED', slaCondition: 'MET', alertCondition: 'ALERT',
                outcome: { message: 'QUEUED_MET_ALERT', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'QUEUED', slaCondition: 'BREACH', alertCondition: 'WARNING',
                outcome: { message: 'QUEUED_BREACH_WARNING', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'QUEUED', slaCondition: 'BREACH', alertCondition: 'ALERT',
                outcome: { message: 'QUEUED_BREACH_ALERT', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'PROCESSING', slaCondition: 'MET', alertCondition: 'WARNING',
                outcome: { message: 'PROCESSING_MET_WARNING', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'PROCESSING', slaCondition: 'MET', alertCondition: 'ALERT',
                outcome: { message: 'PROCESSING_MET_ALERT', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'PROCESSING', slaCondition: 'BREACH', alertCondition: 'WARNING',
                outcome: { message: 'PROCESSING_BREACH_WARNING', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'PROCESSING', slaCondition: 'BREACH', alertCondition: 'ALERT',
                outcome: { message: 'PROCESSING_BREACH_ALERT', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'COMPLETED', slaCondition: 'MET', alertCondition: 'WARNING',
                outcome: { message: 'COMPLETED_MET_WARNING', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'COMPLETED', slaCondition: 'MET', alertCondition: 'ALERT',
                outcome: { message: 'COMPLETED_MET_ALERT', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'COMPLETED', slaCondition: 'BREACH', alertCondition: 'WARNING',
                outcome: { message: 'COMPLETED_BREACH_WARNING', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } },
            { stateCondition: 'COMPLETED', slaCondition: 'BREACH', alertCondition: 'ALERT',
                outcome: { message: 'COMPLETED_BREACH_ALERT', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' } }
        ];
    }
    TeosRuleCheck.prototype.checkRules = function (state, sla, alert) {
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            var stateMatch = rule.stateCondition === 'ANY' || state === rule.stateCondition;
            var slaMatch = rule.slaCondition === 'ANY' || sla === rule.slaCondition;
            var alertMatch = rule.alertCondition === 'ANY' || alert === rule.alertCondition;
            if (stateMatch && slaMatch && alertMatch) {
                return rule.outcome;
            }
        }
        return { message: 'NO MATCH', leftIcon: 'LEFT_ICON', rightIcon: 'RIGHT_ICON' };
    };
    return TeosRuleCheck;
}());
exports.TeosRuleCheck = TeosRuleCheck;
var ruleEvaluator = new TeosRuleCheck();
console.log(ruleEvaluator.checkRules('QUEUED', 'BREACH', 'ALERT'));
console.log(ruleEvaluator.checkRules('QUEUED', 'MET', 'ALERT'));
console.log(ruleEvaluator.checkRules('COMPLETED', 'BREACH', 'ALERT'));
console.log(ruleEvaluator.checkRules('COMPLETED', 'BREACH', 'ALERT'));
console.log(ruleEvaluator.checkRules('COMPLETED', 'BREACH', 'ALERT'));
console.log(ruleEvaluator.checkRules('COMPLETED', 'BREACH', 'ALERT'));
console.log(ruleEvaluator.checkRules('COMPLETED', 'BREACH', 'ALERT'));
