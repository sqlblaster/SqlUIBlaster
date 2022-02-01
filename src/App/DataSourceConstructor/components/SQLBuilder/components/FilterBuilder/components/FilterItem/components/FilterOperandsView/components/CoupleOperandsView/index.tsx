import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { Filter } from '../../../../model';
import { SingleOperandView } from '../SingleOperandView';
import {
  CoupleOperandsViewClassKeys,
  coupleOperandsViewStyles
} from './styles';

export type CoupleOperandsViewProps = {
  operands: [string, string] | [number, number];
  variables: Filter['variables'];
} & ClassesProp<CoupleOperandsViewClassKeys>;

export const CoupleOperandsView = withStyles(coupleOperandsViewStyles)((({
  operands,
  variables,
  classes
}) => {
  return (
    <>
      <SingleOperandView
        operand={operands[0]}
        variable={variables instanceof Array ? variables[0] : null}
      />
      <span className={classes.and}>and</span>
      <SingleOperandView
        operand={operands[1]}
        variable={variables instanceof Array ? variables[1] : null}
      />
    </>
  );
}) as React.FC<CoupleOperandsViewProps>);
