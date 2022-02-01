import { Reducer, ReducersMapObject } from 'redux';
import { Grouping } from '../components/GroupingItem/model';
import {
  AddGroupingAction,
  GroupingActions,
  RemoveGroupingAction,
  UpdateGroupingAction
} from './action';
import { GroupingsBuilderState } from './state';

export const addGrouping: Reducer<Grouping[], AddGroupingAction> = (
  state = [],
  { grouping }
) => state.concat(new Grouping({ ...grouping }));

export const updateGrouping: Reducer<Grouping[], UpdateGroupingAction> = (
  state = [],
  { grouping }
) =>
  state.map((a) => {
    if (a.id !== grouping.id) {
      return a;
    }

    return new Grouping(a, grouping);
  });

export const removeGrouping: Reducer<Grouping[], RemoveGroupingAction> = (
  state = [],
  { id }
) => state.filter((grouping) => grouping.id !== id);

export const groupings: Reducer<
  Grouping[],
  GroupingActions
> = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROUPING':
      return addGrouping(state, action);
    case 'UPDATE_GROUPING':
      return updateGrouping(state, action);
    case 'REMOVE_GROUPING':
      return removeGrouping(state, action);
    case 'CLEAR_GROUPINGS':
      return [];
    default:
      return state;
  }
};

export const GroupingsBuilderReducers: ReducersMapObject<
  GroupingsBuilderState
> = {
  groupings
};
