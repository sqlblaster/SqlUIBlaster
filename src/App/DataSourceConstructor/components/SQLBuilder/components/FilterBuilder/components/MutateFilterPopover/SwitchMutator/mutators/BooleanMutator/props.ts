import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { actionCreators, PickActionCreators } from 'src/components/query-builder/store/action-creators';
import { CheckedSelectProps } from '../../CheckedSelect/props';
import { MutatorProps } from '../props';
import { BooleanOperation } from './BooleanOperation';
import { BooleanOperator } from './operators';
import { BooleanMutatorClassKeys } from './styles';

export type BooleanMutatorOwnProps = MutatorProps;

export interface BooleanMutatorStateProps {
  operator: BooleanOperator;
  operation: BooleanOperation;
}

export type BooleanMutatorDispatchProps = PickActionCreators<
  'setOperation'
>;
export const BMMapDispatchToProps: BooleanMutatorDispatchProps = {
  setOperation: actionCreators.setOperation
};

export type BooleanMutatorProps = BooleanMutatorOwnProps &
  BooleanMutatorStateProps &
  BooleanMutatorDispatchProps;

export type BooleanMutatorViewProps = BooleanMutatorOwnProps &
  BooleanMutatorStateProps & {
    handleOperatorSelect: CheckedSelectProps<BooleanOperator>['onSelect'];
  } & ClassesProp<BooleanMutatorClassKeys>;
