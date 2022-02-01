import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { actionCreators, PickActionCreators } from 'src/components/query-builder/store/action-creators';
import { CheckedSelectProps } from '../../CheckedSelect/props';
import { MutatorProps } from '../props';
import { NumberOperation } from './NumberOperation';
import { NumberOperator } from './operators';
import { NumberMutatorClassKeys } from './styles';

export type NumberMutatorOwnProps = MutatorProps;

export interface NumberMutatorStateProps {
  operator: NumberOperator;
  operation: NumberOperation;
}

export type NumberMutatorDispatchProps = PickActionCreators<
  'setOperation'
>;
export const NMMapDispatchToProps: NumberMutatorDispatchProps = {
  setOperation: actionCreators.setOperation
};

export type NumberMutatorProps = NumberMutatorOwnProps &
  NumberMutatorStateProps &
  NumberMutatorDispatchProps;

export type NumberMutatorViewProps = NumberMutatorOwnProps &
  NumberMutatorStateProps & {
    handleSelect: CheckedSelectProps<NumberOperator>['onSelect'];
  } & ClassesProp<NumberMutatorClassKeys>;
