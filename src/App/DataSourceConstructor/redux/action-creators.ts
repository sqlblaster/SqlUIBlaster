import { SQLBActionCreators } from '../components/SQLBuilder/redux/action-creators';
import { SQLGeneratorActionCreators } from '../components/SQLGenerator/redux/action';
import { setDatabaseSchema } from './database-schema/action';
import { setTables } from './tables/action';

export const DSCActionCreators = {
  setDatabaseSchema,
  setTables,
  ...SQLBActionCreators,
  ...SQLGeneratorActionCreators
};
