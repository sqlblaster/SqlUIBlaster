import {
  actionCreators,
  PickActionCreators
} from 'src/store/action-creators';
import {
  PickStates,
  State
} from 'src/store/models/State';
import { QueryJSON } from '../DataSourceConstructor/components/SQLGenerator/redux/query-json.model';
import { DatabaseSchema } from '../DataSourceConstructor/schemas';
import { ClassesProp } from '../utils/classes-prop';
import { DrillDownQueryBuilderKeys } from './styles';

export interface DrillDownQueryBuilderOwnProps {
  initialQuery?: QueryJSON;
  databaseSchema: DatabaseSchema;
  enabled?: boolean;
  onQueryChange?: (query: string, queryJson: QueryJSON) => void;
}

export type DrillDownQueryBuilderStateProps = PickStates<
  'sqlQuery' | 'queryJson' | 'selectedTable'
> & {
  rootState: State;
};

export type DrillDownQueryBuilderDispatchProps = PickActionCreators<
  'setDatabaseSchema' | 'updateRootState'
>;

const {
  setDatabaseSchema,
  updateRootState
}: DrillDownQueryBuilderDispatchProps = actionCreators;
export const DSCMapDispatchToProps: DrillDownQueryBuilderDispatchProps = {
  setDatabaseSchema,
  updateRootState
};

export type DrillDownQueryBuilderProps = DrillDownQueryBuilderOwnProps &
  DrillDownQueryBuilderDispatchProps &
  DrillDownQueryBuilderStateProps;

export type DrillDownQueryBuilderViewProps = Pick<
  DrillDownQueryBuilderProps,
  'selectedTable' | 'enabled'
> &
  ClassesProp<DrillDownQueryBuilderKeys>;
