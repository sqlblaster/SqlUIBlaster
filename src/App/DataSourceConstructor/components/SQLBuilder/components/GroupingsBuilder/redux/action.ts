import { Action } from 'src/components/query-builder/store/models/action-types';
import { Grouping } from '../components/GroupingItem/model';

export type AddGroupingAction = Action<'ADD_GROUPING', { grouping: Grouping }>;

export type UpdateGroupingAction = Action<
  'UPDATE_GROUPING',
  { grouping: Grouping }
>;

export type RemoveGroupingAction = Action<
  'REMOVE_GROUPING',
  { id: Grouping['id'] }
>;

export type ClearGroupingsAction = Action<'CLEAR_GROUPINGS'>;

export type GroupingActions =
  | AddGroupingAction
  | UpdateGroupingAction
  | RemoveGroupingAction
  | ClearGroupingsAction;

export const groupingActionTypes: GroupingActions['type'][] = [
  'ADD_GROUPING',
  'UPDATE_GROUPING',
  'REMOVE_GROUPING',
  'CLEAR_GROUPINGS'
];

export const addGrouping = (grouping: Grouping): AddGroupingAction => ({
  type: 'ADD_GROUPING',
  grouping
});

export const updateGrouping = (grouping: Grouping): UpdateGroupingAction => ({
  type: 'UPDATE_GROUPING',
  grouping
});

export const removeGrouping = (id: Grouping['id']): RemoveGroupingAction => ({
  type: 'REMOVE_GROUPING',
  id
});

export const clearGroupings = (): ClearGroupingsAction => ({
  type: 'CLEAR_GROUPINGS'
});

export const GroupingsBuilderActionCreators = {
  addGrouping,
  updateGrouping,
  removeGrouping,
  clearGroupings
};
