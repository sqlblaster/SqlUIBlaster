import { ReducersMapObject } from 'redux';
import { AggregationsBuilderReducers } from '../components/AggregationsBuilder/redux/reducer';
import { SQLBCommonComponentsReducers } from '../components/common/reducers';
import { CustomColumnsBuilderReducers } from '../components/CustomColumnsBuilder/redux/reducer';
import { FilterBuilderReducers } from '../components/FilterBuilder/redux/reducer';
import { GroupingsBuilderReducers } from '../components/GroupingsBuilder/redux/reducer';
import { OrdersBuilderReducers } from '../components/OrdersBuilder/redux/reducer';
import { RowLimitBuilderReducers } from '../components/RowLimit/redux/reducer';
import { selectedTable } from '../components/TableSelector/redux/reducer';
import { SQLBuilderState } from './state';

export const SQLBuilderReducers: ReducersMapObject<SQLBuilderState, any> = {
  selectedTable,
  ...SQLBCommonComponentsReducers,
  ...CustomColumnsBuilderReducers,
  ...FilterBuilderReducers,
  ...AggregationsBuilderReducers,
  ...GroupingsBuilderReducers,
  ...OrdersBuilderReducers,
  ...RowLimitBuilderReducers
};
