import { TeosRuleCheck } from '../src/TeosRuleCheck';
import { Outcome } from '../src/TeosRule';

console.log('=====================');
console.log(TeosRuleCheck);
console.log('=====================');

describe('TeosRuleCheck', () => {
  let ruleChecker: TeosRuleCheck;

  beforeEach(() => {
    ruleChecker = new TeosRuleCheck();
  });

  it('should return correct outcome for RECEIVING, MET, ANY', () => {
    const outcome: Outcome = ruleChecker.checkRules('RECEIVING', 'MET', 'ANY');
    expect(outcome.message).toBe('RECEIVING_MET_ANY');
    expect(outcome.leftIcon).toBe('LEFT_ICON');
    expect(outcome.rightIcon).toBe('RIGHT_ICON');
  });

  it('should return correct outcome for QUEUED, MET, WARNING', () => {
    const outcome: Outcome = ruleChecker.checkRules('QUEUED', 'MET', 'WARNING');
    expect(outcome.message).toBe('QUEUED_MET_WARNING');
    expect(outcome.leftIcon).toBe('LEFT_ICON');
    expect(outcome.rightIcon).toBe('RIGHT_ICON');
  });

  it('should return correct outcome for PROCESSING, BREACH, ALERT', () => {
    const outcome: Outcome = ruleChecker.checkRules('PROCESSING', 'BREACH', 'ALERT');
    expect(outcome.message).toBe('PROCESSING_BREACH_ALERT');
    expect(outcome.leftIcon).toBe('LEFT_ICON');
    expect(outcome.rightIcon).toBe('RIGHT_ICON');
  });

  it('should return NO MATCH for unmatched state, SLA, and alert', () => {
    const outcome: Outcome = ruleChecker.checkRules('UNKNOWN', 'MET', 'WARNING');
    expect(outcome.message).toBe('NO MATCH');
    expect(outcome.leftIcon).toBe('LEFT_ICON');
    expect(outcome.rightIcon).toBe('RIGHT_ICON');
  });

  it('should handle ANY condition for alert', () => {
    const outcome: Outcome = ruleChecker.checkRules('RECEIVING', 'BREACH', 'ALERT');
    expect(outcome.message).toBe('RECEIVING_BREACH_ANY');
    expect(outcome.leftIcon).toBe('LEFT_ICON');
    expect(outcome.rightIcon).toBe('RIGHT_ICON');
  });

  it('should handle ANY condition for state', () => {
    const outcome: Outcome = ruleChecker.checkRules('ANY', 'BREACH', 'WARNING');
    expect(outcome.message).toBe('NO MATCH'); // No explicit ANY state match in rules
  });

  it('should handle ANY condition for SLA', () => {
    const outcome: Outcome = ruleChecker.checkRules('QUEUED', 'ANY', 'ALERT');
    expect(outcome.message).toBe('NO MATCH'); // No explicit ANY SLA match in rules
  });
});

