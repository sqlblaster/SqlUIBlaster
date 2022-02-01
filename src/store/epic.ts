import { combineEpics } from 'redux-observable';
import { dataSourceConstructorEpics } from 'src/components/query-builder/App/DataSourceConstructor/redux/epics';

export const epic = combineEpics(dataSourceConstructorEpics);
