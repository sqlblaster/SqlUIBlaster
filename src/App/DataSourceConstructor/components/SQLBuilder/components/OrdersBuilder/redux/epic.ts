import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { actionCreators } from 'src/components/query-builder/store/action-creators';
import { Epic } from 'src/components/query-builder/store/models/Epic';
import {
  AggregationActions,
  aggregationActionTypes
} from '../../AggregationsBuilder/redux/action';
import {
  GroupingActions,
  groupingActionTypes
} from '../../GroupingsBuilder/redux/action';

const {
  raiseGlobalError,
  clearOrders,
  matchToGroupings,
  emitEmptyAction
} = actionCreators;

export const adjustOrdersEpic: Epic<GroupingActions | AggregationActions> = (
  action$,
  state$
) => {
  return action$.pipe(
    ofType(...groupingActionTypes, ...aggregationActionTypes),
    map((action) => {
      const { type } = action;
      const { aggregations, groupings } = state$.value;

      if (aggregations.length && !groupings.length) {
        return clearOrders();
      }

      switch (type) {
        case 'ADD_GROUPING':
        case 'UPDATE_GROUPING':
        case 'REMOVE_GROUPING':
          return matchToGroupings(groupings);
        default:
          return emitEmptyAction();
      }
    }),
    catchError((err) => {
      console.error(err && err.xhr && err.xhr.response);

      return of(raiseGlobalError('Oops, something went wrong!...'));
    })
  );
};

export const OrdersBuilderEpic = adjustOrdersEpic;
