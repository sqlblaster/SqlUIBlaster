
export interface SqlDateOperator {
  dateOperand2: (operand2Expr: string) => string;
}

export interface SqlDateOperatorsList {
  after: SqlDateOperator;
  afterInclusive: SqlDateOperator;
  before: SqlDateOperator;
  beforeInclusive: SqlDateOperator;
}

export function dateOperand1(
  operand1Expr: string,
  timeEnabled: boolean = false
): SqlDateOperatorsList {
  return {
    after: {
      dateOperand2(operand2Expr: string): string {
        if (timeEnabled) {
          return `${operand1Expr}
            >
          ${operand2Expr}`;
        } else {
          return `${operand1Expr}
            >=
          (${operand2Expr} + INTERVAL '1 day')::date`;
        }
      }
    },
    afterInclusive: {
      dateOperand2(operand2Expr: string): string {
        if (timeEnabled) {
          return `${operand1Expr}
            >=
          ${operand2Expr}`;
        } else {
          return `${operand1Expr}
            >=
          (${operand2Expr})::date`;
        }
      }
    },
    before: {
      dateOperand2(operand2Expr: string): string {
        if (timeEnabled) {
          return `${operand1Expr}
            <
          ${operand2Expr}`;
        } else {
          return `${operand1Expr}
            <
          (${operand2Expr})::date`;
        }
      }
    },
    beforeInclusive: {
      dateOperand2(operand2Expr: string): string {
        if (timeEnabled) {
          return `${operand1Expr}
            <=
          ${operand2Expr}`;
        } else {
          return `${operand1Expr}
            <
          (${operand2Expr})::date + INTERVAL '1 day'`;
        }
      }
    }
  };
}
