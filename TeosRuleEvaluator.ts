import { TeosRule, Outcome } from './TeosRule';

class TeosRuleEvaluator {
  private rules: TeosRule[] = [
    { stateCondition: '>= 18', slaCondition: '>= 50000', alertCondition: 'US', outcome: {message: 'A0', leftIcon: 'B', rightIcon: 'C'} },
    { stateCondition: '< 18', slaCondition: 'Any', alertCondition: 'Any', outcome: {message: 'A1', leftIcon: 'B', rightIcon: 'C'} },
    { stateCondition: '>= 18', slaCondition: '< 50000', alertCondition: 'US', outcome: {message: 'A2', leftIcon: 'B', rightIcon: 'C'} },
    { stateCondition: '>= 18', slaCondition: '>= 50000', alertCondition: 'Outside US', outcome: {message: 'A3', leftIcon: 'B', rightIcon: 'C'} }
  ];

  public evaluateConditions(age: number, income: number, location: string): Outcome {
    for (const rule of this.rules) {
      const ageValid = this.checkCondition(age, rule.stateCondition);
      const incomeValid = this.checkCondition(income, rule.slaCondition);
      const locationValid = rule.alertCondition === 'Any' || location === rule.alertCondition;

      if (ageValid && incomeValid && locationValid) {
        return rule.outcome;
      }
    }
    return {message: 'c', leftIcon: 'c', rightIcon: 'c'} ; // Default outcome
  }

  private checkCondition(value: number, condition: string): boolean {
    if (condition.indexOf('>=') >= 0) {
      return value >= parseFloat(condition.split('>=')[1].trim());
    } else if (condition.indexOf('<=') >= 0) {
      return value <= parseFloat(condition.split('<=')[1].trim());
    } else if (condition.indexOf('<') >= 0) {
      return value < parseFloat(condition.split('<')[1].trim());
    } else if (condition.indexOf('>') >= 0) {
      return value > parseFloat(condition.split('>')[1].trim());
    } else if (condition === 'Any') {
      return true;
    }
    return false;
  }
}

const ruleEvaluator = new TeosRuleEvaluator();
console.log(ruleEvaluator.evaluateConditions(20, 60000, 'US'));  // Example test
