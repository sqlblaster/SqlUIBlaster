import { actionCreators, PickActionCreators } from 'src/store/action-creators';
import { NumberOperation } from '../../../NumberOperation';
import { NumberFieldProps } from '../NumberField';

export type TwoNumberOperand = [number, number];

export interface OperandsProp {
  operands: TwoNumberOperand;
}

export type TwoNumberOperandsStateProps = OperandsProp & {
  operation: NumberOperation;
};

export type TwoNumberOperandsDispatchProps = PickActionCreators<'setOperation'>;

export const TNOMapDispatchToProps: TwoNumberOperandsDispatchProps = {
  setOperation: actionCreators.setOperation
};

export type TwoNumberOperandsProps = TwoNumberOperandsStateProps &
  TwoNumberOperandsDispatchProps;

export type TwoNumberOperandsViewProps = {
  handleOperandChange: (index: number) => NumberFieldProps['onValueChange'];
} & OperandsProp;
