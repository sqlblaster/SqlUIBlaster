import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { actionCreators, PickActionCreators } from 'src/components/query-builder/store/action-creators';
import { CheckedSelectProps } from '../../CheckedSelect/props';
import { MutatorProps } from '../props';
import { DateOperation } from './DateOperation';
import { DateOperator } from './operators';
import { DateMutatorClassKeys } from './styles';

export type DateMutatorOwnProps = MutatorProps;

export interface DateMutatorStateProps {
  operator: DateOperator;
  operation: DateOperation;
}

export type DateMutatorDispatchProps = PickActionCreators<'setOperation' | 'setPickedVariables'>;
const { setOperation, setPickedVariables } = actionCreators;
export const DMMapDispatchToProps: DateMutatorDispatchProps = {
  setOperation,
  setPickedVariables
};

export type DateMutatorProps = DateMutatorOwnProps &
  DateMutatorStateProps &
  DateMutatorDispatchProps;

export type DateMutatorViewProps = DateMutatorOwnProps &
  DateMutatorStateProps & {
    handleSelect: CheckedSelectProps<DateOperator>['onSelect'];
  } & ClassesProp<DateMutatorClassKeys>;
