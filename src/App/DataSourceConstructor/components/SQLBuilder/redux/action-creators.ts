import { Action } from 'src/components/query-builder/store/models/action-types';
import { AggregationBuilderActionCreators } from '../components/AggregationsBuilder/redux/action';
import { SQLBCommonComponentsActionCreators } from '../components/common/action-creators';
import { CustomColumnsBuilderActionCreators } from '../components/CustomColumnsBuilder/redux/action';
import { FilterBuilderActionCreators } from '../components/FilterBuilder/redux/action';
import { GroupingsBuilderActionCreators } from '../components/GroupingsBuilder/redux/action';
import { OrdersBuilderActionCreators } from '../components/OrdersBuilder/redux/action';
import { RowLimitBuilderActionCreators } from '../components/RowLimit/redux/action';
import { selectTable } from '../components/TableSelector/redux/action';

export type EmptyAction = Action<'EMPTY_ACTION'>;

export const emitEmptyAction = (): EmptyAction => ({ type: 'EMPTY_ACTION' });

export const SQLBActionCreators = {
  selectTable,
  emitEmptyAction,
  ...SQLBCommonComponentsActionCreators,
  ...CustomColumnsBuilderActionCreators,
  ...FilterBuilderActionCreators,
  ...AggregationBuilderActionCreators,
  ...GroupingsBuilderActionCreators,
  ...OrdersBuilderActionCreators,
  ...RowLimitBuilderActionCreators
};
