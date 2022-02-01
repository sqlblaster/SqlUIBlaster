import {
  actionCreators,
  PickActionCreators
} from 'src/store/action-creators';
import {
  PickStates,
  State
} from 'src/store/models/State';
import { Variable } from 'src/schema';
import { ClassesProp } from '../utils/classes-prop';
import { QueryJSON } from './components/SQLGenerator/redux/query-json.model';
import { DatabaseSchema } from './schemas';
import { QueryBuilderClassKeys } from './styles';

export interface DataSourceConstructorOwnProps {
  databaseSchema: DatabaseSchema;
  initialQuery?: QueryJSON;
  initialDrillDownQueryJson?: QueryJSON;
  showQuery?: boolean;
  variables?: Variable[];
  onQueryChange?: (
    query: string,
    queryJson: QueryJSON,
    drillDownSqlQuery: string,
    drillDownQueryJson: QueryJSON
  ) => void;
}

export type DataSourceConstructorStateProps = PickStates<
  'sqlQuery' | 'queryJson' | 'drillDownSqlQuery' | 'drillDownQueryJson'
> & {
  rootState: State;
};

export type DataSourceConstructorDispatchProps = PickActionCreators<
  'setDatabaseSchema' | 'updateRootState'
>;

const {
  setDatabaseSchema,
  updateRootState
}: DataSourceConstructorDispatchProps = actionCreators;
export const DSCMapDispatchToProps: DataSourceConstructorDispatchProps = {
  setDatabaseSchema,
  updateRootState
};

export type DataSourceConstructorProps = DataSourceConstructorOwnProps &
  DataSourceConstructorDispatchProps &
  DataSourceConstructorStateProps;

export type DataSourceConstructorViewProps = Pick<
  DataSourceConstructorOwnProps,
  'showQuery'
> &
  ClassesProp<QueryBuilderClassKeys>;
