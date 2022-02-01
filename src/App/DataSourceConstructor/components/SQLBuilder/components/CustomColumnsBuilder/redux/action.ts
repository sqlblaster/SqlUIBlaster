import { Action } from 'src/components/query-builder/store/models/action-types';
import { CustomColumn } from '../components/CustomColumnItem/model';

export type AddCustomColumnAction = Action<
  'ADD_CUSTOM_COLUMN',
  { customColumn: CustomColumn }
>;

export type UpdateCustomColumnAction = Action<
  'UPDATE_CUSTOM_COLUMN',
  { customColumn: CustomColumn }
>;

export type RemoveCustomColumnAction = Action<
  'REMOVE_CUSTOM_COLUMN',
  { id: CustomColumn['id'] }
>;

export type ClearCustomColumnsAction = Action<'CLEAR_CUSTOM_COLUMNS'>;

export type CustomColumnActions =
  | AddCustomColumnAction
  | UpdateCustomColumnAction
  | RemoveCustomColumnAction
  | ClearCustomColumnsAction;

export const customColumnActionTypes: CustomColumnActions['type'][] = [
  'ADD_CUSTOM_COLUMN',
  'UPDATE_CUSTOM_COLUMN',
  'REMOVE_CUSTOM_COLUMN',
  'CLEAR_CUSTOM_COLUMNS'
];

export const addCustomColumn = (
  customColumn: CustomColumn
): AddCustomColumnAction => ({
  type: 'ADD_CUSTOM_COLUMN',
  customColumn
});

export const updateCustomColumn = (
  customColumn: CustomColumn
): UpdateCustomColumnAction => ({
  type: 'UPDATE_CUSTOM_COLUMN',
  customColumn
});

export const removeCustomColumn = (
  id: CustomColumn['id']
): RemoveCustomColumnAction => ({
  type: 'REMOVE_CUSTOM_COLUMN',
  id
});

export const clearCustomColumns = (): ClearCustomColumnsAction => ({
  type: 'CLEAR_CUSTOM_COLUMNS'
});

export const CustomColumnsBuilderActionCreators = {
  addCustomColumn,
  updateCustomColumn,
  removeCustomColumn,
  clearCustomColumns
};
