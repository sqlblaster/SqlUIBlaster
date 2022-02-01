import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import {
  actionCreators,
  PickActionCreators
} from 'src/components/query-builder/store/action-creators';
import { Variable } from 'src/schema';
import { OperatorViewProp } from '../..';
import { DatePickerByOperandsTypeProps } from '../../DatePickerByOperandsType/props';
import { CoupleDateOperands, CoupleDateOperation } from './model';
import { CoupleDateClassKeys } from './styles';

export type CoupleDateOwnProps = OperatorViewProp;

export interface OperandsProp {
  operands: CoupleDateOperands;
}

export type CoupleDateStateProps = OperandsProp & {
  operation: CoupleDateOperation;
  pickedVariables: [Variable | null, Variable | null];
};

export type CoupleDateDispatchProps = PickActionCreators<
  'setOperation' | 'setPickedVariables'
>;

const { setOperation, setPickedVariables } = actionCreators;
export const CDMapDispatchToProps: CoupleDateDispatchProps = {
  setOperation,
  setPickedVariables
};

export type CoupleDateProps = CoupleDateStateProps &
  CoupleDateDispatchProps &
  CoupleDateOwnProps;

export interface ICoupleDateHandlers {
  handleOperandsChange: (
    index: number
  ) => DatePickerByOperandsTypeProps['onOperandsChange'];
  handleVariablePick: (
    index: number
  ) => DatePickerByOperandsTypeProps['onVariablePicked'];
}

export type CoupleDateViewProps = ICoupleDateHandlers &
  OperandsProp &
  Pick<CoupleDateStateProps, 'pickedVariables'> &
  CoupleDateOwnProps &
  ClassesProp<CoupleDateClassKeys>;
