import { ClassesProp } from 'src/App/utils/classes-prop';
import { actionCreators, PickActionCreators } from 'src/store/action-creators';
import { PopoverManagerProps } from '../../../common/WithPopoverManagement';
import { CheckedSelectProps } from '../../../FilterBuilder/components/MutateFilterPopover/SwitchMutator/CheckedSelect/props';
import { Order } from './model';
import { SortOrder } from './orders';
import { OrderItemClassKeys } from './styles';

export interface OrderItemOwnProps {
  order: Order;
}

export type OrderItemDispatchProps = PickActionCreators<
  'removeOrder' | 'updateOrder'
>;

export const OIMapDispatchToProps: OrderItemDispatchProps = {
  removeOrder: actionCreators.removeOrder,
  updateOrder: actionCreators.updateOrder
};

export type OrderItemProps = OrderItemOwnProps &
  OrderItemDispatchProps;

export type OrderItemViewProps = {
  handleOrderRemoval: (id: Order['id']) => () => void;
  handleSortOrderChange: CheckedSelectProps<SortOrder>['onSelect'];
} & OrderItemOwnProps &
  PopoverManagerProps &
  PickActionCreators<'updateOrder'> &
  ClassesProp<OrderItemClassKeys>;
