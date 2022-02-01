import { combineEpics } from 'redux-observable';
import { dataSourceConstructorEpics } from 'src/App/DataSourceConstructor/redux/epics';

export const epic = combineEpics(dataSourceConstructorEpics);
