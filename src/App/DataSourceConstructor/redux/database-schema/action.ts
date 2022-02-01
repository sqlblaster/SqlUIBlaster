import { Action } from 'src/components/query-builder/store/models/action-types';
import { DatabaseSchema } from '../../schemas';

export type SetDatabaseSchemaAction = Action<
  'SET_DATABASE_SCHEMA',
  { databaseSchema: DatabaseSchema }
>;

export const setDatabaseSchema = (
  databaseSchema: DatabaseSchema
): SetDatabaseSchemaAction => ({
  type: 'SET_DATABASE_SCHEMA',
  databaseSchema
});
