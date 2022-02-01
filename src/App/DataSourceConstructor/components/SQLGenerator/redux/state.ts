import { QueryJSON } from './query-json.model';

export interface SQLGeneratorState {
  sqlQuery: string;
  queryJson: QueryJSON;
  drillDownSqlQuery: string;
  drillDownQueryJson: QueryJSON;
}
