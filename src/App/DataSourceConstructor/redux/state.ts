import { SQLBuilderState } from '../components/SQLBuilder/redux/state';
import { SQLGeneratorState } from '../components/SQLGenerator/redux/state';
import { DatabaseSchemaState } from './database-schema/state';
import { TablesState } from './tables/state';

export type DataSourceConstructorState = DatabaseSchemaState &
  TablesState &
  SQLBuilderState &
  SQLGeneratorState;
