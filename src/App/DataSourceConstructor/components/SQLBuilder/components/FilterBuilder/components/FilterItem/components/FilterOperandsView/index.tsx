import * as React from 'react';
import { Operation } from '../../../MutateFilterPopover/Operation';
import { Filter } from '../../model';
import { CoupleOperandsView } from './components/CoupleOperandsView';
import { SingleOperandView } from './components/SingleOperandView';

import {
  getFormattedCoupleOperands,
  getFormattedSingleOperand,
  hasOperands
} from './utils';

export type FilterOperandsProps = {
  operation: Operation;
  variables: Filter['variables'];
};

export const FilterOperandsView: React.FC<FilterOperandsProps> = ({
  operation,
  variables
}) => {
  return (
    <>
      {hasOperands(operation.operator) &&
        (() => {
          if (operation.operands instanceof Array) {
            return (
              <CoupleOperandsView
                variables={variables}
                operands={getFormattedCoupleOperands(operation)}
              />
            );
          } else {
            return (
              <SingleOperandView
                variable={variables}
                operand={getFormattedSingleOperand(operation)}
              />
            );
          }
        })()}
    </>
  );
};
