import * as React from 'react';
import { OneNumberOperands } from './NumberOperands/OneNumberOperands';
import { TwoNumberOperands } from './NumberOperands/TwoNumberOperands';
import { SwitchNumberMutatorOperandsViewProps } from './props';

export const SwitchNumberMutatorOperands: React.FC<
  SwitchNumberMutatorOperandsViewProps
> = ({ operator }) => {

  switch (operator) {
    case 'Equal to':
    case 'Not equal to':
    case 'Greater than':
    case 'Greater than or equal to':
    case 'Less than':
    case 'Less than or equal to':
      return <OneNumberOperands />;
    case 'Between':
      return <TwoNumberOperands />;
    case 'Is empty':
    case 'Is not empty':
    default:
      return null;
  }
};
