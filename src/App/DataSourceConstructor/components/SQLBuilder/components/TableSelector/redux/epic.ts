import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { actionCreators } from 'src/components/query-builder/store/action-creators';
import { Epic } from 'src/components/query-builder/store/models/Epic';
import { SelectTableAction } from './action';
const {
  raiseGlobalError,
  clearFilters,
  clearAggregations,
  clearGroupings,
  clearOrders,
  clearCustomColumns,
  resetRowLimit
} = actionCreators;

export const resetEntitiesEpic: Epic<SelectTableAction> = (action$, state$) => {
  return action$.pipe(
    ofType('SELECT_TABLE'),
    mergeMap(() => [
      clearFilters(),
      clearAggregations(),
      clearGroupings(),
      clearOrders(),
      clearCustomColumns(),
      resetRowLimit()
    ]),
    catchError((err) => {
      console.error(err && err.xhr && err.xhr.response);

      return of(raiseGlobalError('Oops, something went wrong!...'));
    })
  );
};

export const TableSelectorEpic = resetEntitiesEpic;
