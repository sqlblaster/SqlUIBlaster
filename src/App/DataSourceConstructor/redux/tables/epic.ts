import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { raiseGlobalError } from 'src/store/global-error/action';
import { Epic } from 'src/store/models/Epic';
import { SetDatabaseSchemaAction } from '../database-schema/action';
import { setTables } from './action';

export const extractTablesEpic: Epic<SetDatabaseSchemaAction> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType<SetDatabaseSchemaAction>(
      'SET_DATABASE_SCHEMA'
    ),
    map(({ databaseSchema }) =>
      databaseSchema
        ? setTables(databaseSchema.tables)
        : raiseGlobalError('Couldn\'t fetch database schema')
    ),
    catchError((err) => {
      console.error(err && err.xhr && err.xhr.response);

      return of(raiseGlobalError('Couldn\'t fetch database schema'));
    })
  );
