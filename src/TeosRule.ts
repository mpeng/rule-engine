export interface TeosRule {
  stateCondition: string;
  slaCondition: string;
  alertCondition: string;
  outcome: Outcome;
}

export interface Outcome {
  message: string;
  leftIcon: string;
  rightIcon: string;
}
