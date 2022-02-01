import { actionCreators, PickActionCreators } from 'src/components/query-builder/store/action-creators';
import { NumberOperands, NumberOperation } from '../../../NumberOperation';

export interface OneNumberOperandsStateProps {
  operands: NumberOperands;
  operation: NumberOperation;
}

export type OneNumberOperandsDispatchProps = PickActionCreators<
  'setOperation'
>;

export const ONOMapDispatchToProps: OneNumberOperandsDispatchProps = {
  setOperation: actionCreators.setOperation
};

export type OneNumberOperandsProps = OneNumberOperandsStateProps &
  OneNumberOperandsDispatchProps;
