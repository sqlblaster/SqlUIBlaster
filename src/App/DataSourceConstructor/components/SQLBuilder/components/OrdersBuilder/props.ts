import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { PickStates } from 'src/components/query-builder/store/models/State';
import { OrdersBuilderClassKeys } from './styles';

export type OrdersBuilderStateProps = PickStates<
  'orders' | 'aggregations' | 'groupings'
>;

export type OrdersBuilderProps = OrdersBuilderStateProps;
export type OrdersBuilderViewProps = OrdersBuilderStateProps &
  ClassesProp<OrdersBuilderClassKeys>;
