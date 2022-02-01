import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { PickStates } from 'src/components/query-builder/store/models/State';
import { FilterBuilderClassKeys } from './styles';

export type FilterBuilderStateProps = PickStates<'filters'>;

export type FilterBuilderProps = FilterBuilderStateProps;
export type FilterBuilderViewProps = FilterBuilderStateProps &
  ClassesProp<FilterBuilderClassKeys>;
