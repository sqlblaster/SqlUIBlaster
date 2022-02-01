import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { raiseGlobalError } from 'src/components/query-builder/store/global-error/action';
import { Epic } from 'src/components/query-builder/store/models/Epic';
import { UpdateRootStateAction } from 'src/components/query-builder/store/reducer';
import {
  AggregationActions,
  aggregationActionTypes
} from '../../SQLBuilder/components/AggregationsBuilder/redux/action';
import {
  CustomColumnActions,
  customColumnActionTypes
} from '../../SQLBuilder/components/CustomColumnsBuilder/redux/action';
import {
  FilterActions,
  filterActionTypes
} from '../../SQLBuilder/components/FilterBuilder/redux/action';
import {
  GroupingActions,
  groupingActionTypes
} from '../../SQLBuilder/components/GroupingsBuilder/redux/action';
import {
  OrderActions,
  orderActionTypes
} from '../../SQLBuilder/components/OrdersBuilder/redux/action';
import { SetRowLimitAction } from '../../SQLBuilder/components/RowLimit/redux/action';
import { SelectTableAction } from '../../SQLBuilder/components/TableSelector/redux/action';
import {
  setDrillDownQueryJson,
  setDrillDownSQLQuery,
  setQueryJson,
  setSQLQuery
} from './action';
import { generateSQLQuery, generateSQLQueryJSON } from './generate';
import { getDrillDownState } from './generateDrillDown';
import { QueryJSON } from './query-json.model';

export const generateSQLQueryEpic: Epic<
  | SelectTableAction
  | CustomColumnActions
  | FilterActions
  | AggregationActions
  | GroupingActions
  | OrderActions
  | SetRowLimitAction
  | UpdateRootStateAction
> = (action$, state$) =>
  action$.pipe(
    ofType(
      'SELECT_TABLE',
      ...customColumnActionTypes,
      ...filterActionTypes,
      ...aggregationActionTypes,
      ...groupingActionTypes,
      ...orderActionTypes,
      'SET_ROW_LIMIT',
      'UPDATE_ROOT_STATE'
    ),
    mergeMap(action => {
      const state = state$.value;
      const drillDownState = getDrillDownState(
        state,
        action.type === 'SELECT_TABLE'
          ? new QueryJSON()
          : state$.value.drillDownQueryJson
      );

      return [
        setSQLQuery(generateSQLQuery(state)),
        setQueryJson(generateSQLQueryJSON(state)),
        setDrillDownSQLQuery(generateSQLQuery(drillDownState)),
        setDrillDownQueryJson(generateSQLQueryJSON(drillDownState))
      ];
    }),
    catchError(err => {
      console.error(err);

      return of(raiseGlobalError(`Couldn't generate sql query`));
    })
  );
