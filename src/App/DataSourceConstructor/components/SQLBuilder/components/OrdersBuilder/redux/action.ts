import { Action } from 'src/components/query-builder/store/models/action-types';
import { Grouping } from '../../GroupingsBuilder/components/GroupingItem/model';
import { Order } from '../components/OrderItem/model';

export type AddOrderAction = Action<'ADD_ORDER', { order: Order }>;

export type UpdateOrderAction = Action<'UPDATE_ORDER', { order: Order }>;

export type RemoveOrderAction = Action<'REMOVE_ORDER', { id: Order['id'] }>;

export type ClearOrdersAction = Action<'CLEAR_ORDERS'>;

export type MatchToGroupingsAction = Action<'MATCH_TO_GROUPINGS', {
  groupings: Grouping[];
}>;

export type OrderActions =
  | AddOrderAction
  | UpdateOrderAction
  | RemoveOrderAction
  | ClearOrdersAction
  | MatchToGroupingsAction;

export const orderActionTypes: OrderActions['type'][] = [
  'ADD_ORDER',
  'UPDATE_ORDER',
  'REMOVE_ORDER',
  'CLEAR_ORDERS',
  'MATCH_TO_GROUPINGS'
];

export const addOrder = (order: Order): AddOrderAction => ({
  type: 'ADD_ORDER',
  order
});

export const updateOrder = (order: Order): UpdateOrderAction => ({
  type: 'UPDATE_ORDER',
  order
});

export const removeOrder = (id: Order['id']): RemoveOrderAction => ({
  type: 'REMOVE_ORDER',
  id
});

export const clearOrders = (): ClearOrdersAction => ({
  type: 'CLEAR_ORDERS'
});

export const matchToGroupings = (groupings: Grouping[]): MatchToGroupingsAction => ({
  type: 'MATCH_TO_GROUPINGS',
  groupings
});

export const OrdersBuilderActionCreators = {
  addOrder,
  updateOrder,
  removeOrder,
  clearOrders,
  matchToGroupings
};
