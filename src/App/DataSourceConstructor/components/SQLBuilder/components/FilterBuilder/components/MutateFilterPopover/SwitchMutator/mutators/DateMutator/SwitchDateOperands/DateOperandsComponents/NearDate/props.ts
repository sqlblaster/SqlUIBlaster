import { ChangeEvent } from 'react';
import { ClassesProp } from 'src/App/utils/classes-prop';
import { actionCreators, PickActionCreators } from 'src/store/action-creators';
import { OperatorViewProp, RenderBottomSectionProp } from '../..';
import { CheckedSelectProps } from '../../../../../CheckedSelect/props';
import { NearDateOperands, NearDateOperation } from './model';
import { PluralDateComponent } from './plural-date-components';
import { NearDateClassKeys } from './styles';

export type NearDateOwnProps = OperatorViewProp & RenderBottomSectionProp;

export interface OperandsProp {
  operands: NearDateOperands;
}

export type NearDateStateProps = OperandsProp & {
  operation: NearDateOperation;
};

export type NearDateDispatchProps = PickActionCreators<'setOperation'>;

export const NDMapDispatchToProps: NearDateDispatchProps = {
  setOperation: actionCreators.setOperation
};

export type NearDateProps = NearDateStateProps &
  NearDateDispatchProps &
  NearDateOwnProps;

export type NearDateViewProps = {
  handleShiftAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDateComponentTypeChange: CheckedSelectProps<
    PluralDateComponent
  >['onSelect'];
  handleIncludeCurrentDateChange: () => void;
} & OperandsProp &
  NearDateOwnProps &
  ClassesProp<NearDateClassKeys>;
