import {
  actionCreators,
  PickActionCreators
} from 'src/components/query-builder/store/action-creators';
import { PickStates } from 'src/components/query-builder/store/models/State';
import { Variable } from 'src/schema';
import { NullableVariable } from '../../../../../../../../FilterItem/model';

export interface VariableDatePickerOwnProps {
  variable: NullableVariable;
  onVariablePicked: (variable: Variable) => void;
}

export type VariableDatePickerStateProps = PickStates<'variables'>;

export type VariableDatePickerDispatchProps = PickActionCreators<
  'changeCanSaveFilterState'
>;

export const VDPMapDispatchToProps: VariableDatePickerDispatchProps = {
  changeCanSaveFilterState: actionCreators.changeCanSaveFilterState
};

export type VariableDatePickerProps = VariableDatePickerStateProps &
  VariableDatePickerDispatchProps &
  VariableDatePickerOwnProps;
