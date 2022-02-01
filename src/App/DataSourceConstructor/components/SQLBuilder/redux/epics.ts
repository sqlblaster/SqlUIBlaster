import { combineEpics } from 'redux-observable';
import { SQLBCommonComponentsEpics } from '../components/common/epics';
import { FilterBuilderEpics } from '../components/FilterBuilder/redux/epics';
import { OrdersBuilderEpic } from '../components/OrdersBuilder/redux/epic';
import { TableSelectorEpic } from '../components/TableSelector/redux/epic';

export const SQLBuilderEpics = combineEpics(
  SQLBCommonComponentsEpics,
  FilterBuilderEpics,
  OrdersBuilderEpic,
  TableSelectorEpic
);
