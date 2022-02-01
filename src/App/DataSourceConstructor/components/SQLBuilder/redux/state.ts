import { AggregationsBuilderState } from '../components/AggregationsBuilder/redux/state';
import { SQLBCommonComponentsState } from '../components/common/state';
import { CustomColumnsBuilderState } from '../components/CustomColumnsBuilder/redux/state';
import { FilterBuilderState } from '../components/FilterBuilder/redux/state';
import { GroupingsBuilderState } from '../components/GroupingsBuilder/redux/state';
import { OrdersBuilderState } from '../components/OrdersBuilder/redux/state';
import { RowLimitBuilderState } from '../components/RowLimit/redux/state';
import { TableSelectorState } from '../components/TableSelector/redux/state';

export type SQLBuilderState = TableSelectorState &
  CustomColumnsBuilderState &
  FilterBuilderState &
  AggregationsBuilderState &
  GroupingsBuilderState &
  OrdersBuilderState &
  RowLimitBuilderState &
  SQLBCommonComponentsState;
