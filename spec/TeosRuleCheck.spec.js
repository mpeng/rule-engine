"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TeosRuleCheck_1 = require("../src/TeosRuleCheck");
console.log('=====================');
console.log(TeosRuleCheck_1.TeosRuleCheck);
console.log('=====================');
describe('TeosRuleCheck', function () {
    var ruleChecker;
    beforeEach(function () {
        ruleChecker = new TeosRuleCheck_1.TeosRuleCheck();
    });
    it('should return correct outcome for RECEIVING, MET, ANY', function () {
        var outcome = ruleChecker.checkRules('RECEIVING', 'MET', 'ANY');
        expect(outcome.message).toBe('RECEIVING_MET_ANY');
        expect(outcome.leftIcon).toBe('LEFT_ICON');
        expect(outcome.rightIcon).toBe('RIGHT_ICON');
    });
    it('should return correct outcome for QUEUED, MET, WARNING', function () {
        var outcome = ruleChecker.checkRules('QUEUED', 'MET', 'WARNING');
        expect(outcome.message).toBe('QUEUED_MET_WARNING');
        expect(outcome.leftIcon).toBe('LEFT_ICON');
        expect(outcome.rightIcon).toBe('RIGHT_ICON');
    });
    it('should return correct outcome for PROCESSING, BREACH, ALERT', function () {
        var outcome = ruleChecker.checkRules('PROCESSING', 'BREACH', 'ALERT');
        expect(outcome.message).toBe('PROCESSING_BREACH_ALERT');
        expect(outcome.leftIcon).toBe('LEFT_ICON');
        expect(outcome.rightIcon).toBe('RIGHT_ICON');
    });
    it('should return NO MATCH for unmatched state, SLA, and alert', function () {
        var outcome = ruleChecker.checkRules('UNKNOWN', 'MET', 'WARNING');
        expect(outcome.message).toBe('NO MATCH');
        expect(outcome.leftIcon).toBe('LEFT_ICON');
        expect(outcome.rightIcon).toBe('RIGHT_ICON');
    });
    it('should handle ANY condition for alert', function () {
        var outcome = ruleChecker.checkRules('RECEIVING', 'BREACH', 'ALERT');
        expect(outcome.message).toBe('RECEIVING_BREACH_ANY');
        expect(outcome.leftIcon).toBe('LEFT_ICON');
        expect(outcome.rightIcon).toBe('RIGHT_ICON');
    });
    it('should handle ANY condition for state', function () {
        var outcome = ruleChecker.checkRules('ANY', 'BREACH', 'WARNING');
        expect(outcome.message).toBe('NO MATCH'); // No explicit ANY state match in rules
    });
    it('should handle ANY condition for SLA', function () {
        var outcome = ruleChecker.checkRules('QUEUED', 'ANY', 'ALERT');
        expect(outcome.message).toBe('NO MATCH'); // No explicit ANY SLA match in rules
    });
});
