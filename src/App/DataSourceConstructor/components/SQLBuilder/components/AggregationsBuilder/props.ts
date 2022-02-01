import { ClassesProp } from 'src/App/utils/classes-prop';
import { PickStates } from 'src/store/models/State';
import { AggregationsBuilderClassKeys } from './styles';

export type AggregationsBuilderStateProps = PickStates<'aggregations'>;

export type AggregationsBuilderProps = AggregationsBuilderStateProps;
export type AggregationsBuilderViewProps = AggregationsBuilderStateProps &
  ClassesProp<AggregationsBuilderClassKeys>;
