import { TeosRule, Outcome } from './TeosRule';

class TeosRuleCheck {
  private rules: TeosRule[] = [
    { stateCondition: 'QUEUED', slaCondition: 'BREACHED', alertCondition: 'ALERT',
        outcome: {message: 'A0', leftIcon: 'B', rightIcon: 'C'} },
    { stateCondition: 'PENDING', slaCondition: 'NORMAL', alertCondition: 'WARNING',
        outcome: {message: 'A1', leftIcon: 'B', rightIcon: 'C'} }
  ];

  public checkRules(state: string, sla: string, alert: string): Outcome {
    for (const rule of this.rules) {
      const stateMatch = rule.stateCondition === 'ANY' || state === rule.stateCondition;
      const slaMatch = rule.slaCondition === 'ANY' || sla === rule.slaCondition;
      const alertMatch = rule.alertCondition === 'ANY' || alert === rule.alertCondition;

      if (stateMatch && slaMatch && alertMatch) {
        return rule.outcome;
      }
    }
    return {message: 'c', leftIcon: 'c', rightIcon: 'c'} ;
  }

}

const ruleEvaluator = new TeosRuleCheck();
console.log(ruleEvaluator.checkRules('QUEUED', 'BREACHED', 'ALERT'));
console.log(ruleEvaluator.checkRules('QUEUED', 'MET', 'ALERT'));
