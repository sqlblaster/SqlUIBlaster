import { ClassesProp } from 'src/App/utils/classes-prop';
import {
  actionCreators,
  PickActionCreators
} from 'src/store/action-creators';
import { Variable } from 'src/schema';
import { OperatorViewProp } from '../..';
import { DatePickerByOperandsTypeProps } from '../../DatePickerByOperandsType/props';
import { SingleDateOperands, SingleDateOperation } from './model';
import { SingleDateClassKeys } from './styles';

export type SingleDateOwnProps = OperatorViewProp;

export interface OperandsProp {
  operands: SingleDateOperands;
}

export type SingleDateStateProps = OperandsProp & {
  operation: SingleDateOperation;
  pickedVariables: Variable | null;
};

export type SingleDateDispatchProps = PickActionCreators<
  'setOperation' | 'setPickedVariables'
>;

const { setOperation, setPickedVariables } = actionCreators;
export const SDMapDispatchToProps: SingleDateDispatchProps = {
  setOperation,
  setPickedVariables
};

export type SingleDateProps = SingleDateStateProps &
  SingleDateDispatchProps &
  SingleDateOwnProps;

export interface ISingleDateHandlers {
  handleOperandsChange: DatePickerByOperandsTypeProps['onOperandsChange'];
  handleVariablePicked: DatePickerByOperandsTypeProps['onVariablePicked'];
}

export type SingleDateViewProps = ISingleDateHandlers &
  OperandsProp &
  SingleDateOwnProps &
  Pick<SingleDateStateProps, 'pickedVariables'> &
  ClassesProp<SingleDateClassKeys>;
