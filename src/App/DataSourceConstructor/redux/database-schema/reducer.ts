import { Reducer } from 'redux';
import { DatabaseSchema } from 'src/components/query-builder/App/DataSourceConstructor/schemas';
import { SetDatabaseSchemaAction } from './action';
import { DatabaseSchemaState } from './state';

export const databaseSchema: Reducer<
  DatabaseSchemaState['databaseSchema'],
  SetDatabaseSchemaAction
> = (state = new DatabaseSchema(), { type, databaseSchema: newDatabaseSchema }) => {
  return type === 'SET_DATABASE_SCHEMA' ? newDatabaseSchema : state;
};
