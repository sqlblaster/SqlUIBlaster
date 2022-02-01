import { clone } from 'ramda';
import { Reducer, ReducersMapObject } from 'redux';
import { Order } from '../components/OrderItem/model';
import {
  AddOrderAction,
  MatchToGroupingsAction,
  OrderActions,
  RemoveOrderAction,
  UpdateOrderAction
} from './action';
import { OrdersBuilderState } from './state';

export const addOrder: Reducer<Order[], AddOrderAction> = (
  state = [],
  { order }
) => state.concat(new Order({ ...order }));

export const updateOrder: Reducer<Order[], UpdateOrderAction> = (
  state = [],
  { order }
) =>
  state.map((a) => {
    if (a.id !== order.id) {
      return a;
    }

    return new Order(a, order);
  });

export const removeOrder: Reducer<Order[], RemoveOrderAction> = (
  state = [],
  { id }
) => state.filter((order) => order.id !== id);

export const matchToGroupings: Reducer<Order[], MatchToGroupingsAction> = (
  ordersState = [],
  { groupings }
) => {
  let newOrders = clone(ordersState);
  if (groupings.length) {
    newOrders = newOrders.filter((order) =>
      groupings.find((grouping) => grouping.column.equals(order.column))
    );
  }

  return newOrders;
};

export const orders: Reducer<Order[], OrderActions> = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return addOrder(state, action);
    case 'UPDATE_ORDER':
      return updateOrder(state, action);
    case 'REMOVE_ORDER':
      return removeOrder(state, action);
    case 'CLEAR_ORDERS':
      return [];
    case 'MATCH_TO_GROUPINGS':
      return matchToGroupings(state, action);
    default:
      return state;
  }
};

export const OrdersBuilderReducers: ReducersMapObject<OrdersBuilderState> = {
  orders
};
