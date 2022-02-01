import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { PickStates } from 'src/components/query-builder/store/models/State';
import { AggregationsBuilderClassKeys } from './styles';

export type AggregationsBuilderStateProps = PickStates<'aggregations'>;

export type AggregationsBuilderProps = AggregationsBuilderStateProps;
export type AggregationsBuilderViewProps = AggregationsBuilderStateProps &
  ClassesProp<AggregationsBuilderClassKeys>;
