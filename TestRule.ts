import { Rule } from './Rule';

class RuleEvaluator {
  private rules: Rule[] = [
    { ageCondition: '>= 18', incomeCondition: '>= 50000', locationCondition: 'US', outcome: 'Eligible' },
    { ageCondition: '< 18', incomeCondition: 'Any', locationCondition: 'Any', outcome: 'Not Eligible' },
    { ageCondition: '>= 18', incomeCondition: '< 50000', locationCondition: 'Any', outcome: 'Not Eligible' },
    { ageCondition: '>= 18', incomeCondition: '>= 50000', locationCondition: 'Outside US', outcome: 'Not Eligible' },
  ];

  public evaluateConditions(age: number, income: number, location: string): string {
    for (const rule of this.rules) {
      const ageValid = this.checkCondition(age, rule.ageCondition);
      const incomeValid = this.checkCondition(income, rule.incomeCondition);
      const locationValid = rule.locationCondition === 'Any' || location === rule.locationCondition;

      if (ageValid && incomeValid && locationValid) {
        return rule.outcome;
      }
    }
    return 'Not Eligible'; // Default outcome
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

const ruleEvaluator = new RuleEvaluator();
console.log(ruleEvaluator.evaluateConditions(20, 60000, 'US'));  // Example test
