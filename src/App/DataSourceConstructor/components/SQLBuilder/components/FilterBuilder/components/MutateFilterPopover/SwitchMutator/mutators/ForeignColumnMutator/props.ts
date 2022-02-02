import { ClassesProp } from 'src/App/utils/classes-prop';
import {
  actionCreators,
  PickActionCreators
} from 'src/store/action-creators';
import { PickStates } from 'src/store/models/State';
import { VariablesPickerProps } from '../../VariablesPicker/props';
import { MutatorProps } from '../props';
import { ForeignColumnOperation } from './ForeignColumnOperation';
import { ForeignColumnMutatorClassKeys } from './styles';
import { Maybe, NavigationSearchResultItem } from 'src/schema';

export type ForeignColumnMutatorOwnProps = MutatorProps;

export type ForeignColumnMutatorStateProps = {
  record: ForeignColumnOperation['operands'];
  enums: string[] | undefined;
} & PickStates<'canSaveFilter' | 'pickedVariables'>;

export type ForeignColumnMutatorDispatchProps = PickActionCreators<
  'setOperation' | 'changeCanSaveFilterState' | 'setPickedVariables'
>;

const { setOperation, setPickedVariables, changeCanSaveFilterState } = actionCreators;
export const FCMMapDispatchToProps: ForeignColumnMutatorDispatchProps = {
  setOperation,
  setPickedVariables,
  changeCanSaveFilterState
};

export type ForeignColumnMutatorProps = ForeignColumnMutatorOwnProps &
  ForeignColumnMutatorStateProps &
  ForeignColumnMutatorDispatchProps;

export interface IForeignColumnMutatorHandlers {
  handleOperandChange: (definition: Maybe<Partial<NavigationSearchResultItem>>) => void;
  handleVariablePick: VariablesPickerProps['onVariablePicked'];
  filter: Required<VariablesPickerProps>['filter'];
}

export type ForeignColumnMutatorViewProps = ForeignColumnMutatorOwnProps &
  ForeignColumnMutatorStateProps &
  IForeignColumnMutatorHandlers &
  ClassesProp<ForeignColumnMutatorClassKeys>;
