import { Reducer, ReducersMapObject } from 'redux';
import { CustomColumn } from '../components/CustomColumnItem/model';
import {
  AddCustomColumnAction,
  CustomColumnActions,
  RemoveCustomColumnAction,
  UpdateCustomColumnAction
} from './action';
import { CustomColumnsBuilderState } from './state';

export const addCustomColumn: Reducer<CustomColumn[], AddCustomColumnAction> = (
  state = [],
  { customColumn }
) => state.concat(new CustomColumn({ ...customColumn }));

export const updateCustomColumn: Reducer<
  CustomColumn[],
  UpdateCustomColumnAction
> = (state = [], { customColumn }) =>
  state.map(a => {
    if (a.id !== customColumn.id) {
      return a;
    }

    return new CustomColumn(a, customColumn);
  });

export const removeCustomColumn: Reducer<
  CustomColumn[],
  RemoveCustomColumnAction
> = (state = [], { id }) =>
  state.filter(customColumn => customColumn.id !== id);

export const customColumns: Reducer<CustomColumn[], CustomColumnActions> = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_CUSTOM_COLUMN':
      return addCustomColumn(state, action);
    case 'UPDATE_CUSTOM_COLUMN':
      return updateCustomColumn(state, action);
    case 'REMOVE_CUSTOM_COLUMN':
      return removeCustomColumn(state, action);
    case 'CLEAR_CUSTOM_COLUMNS':
      return [];
    default:
      return state;
  }
};

export const CustomColumnsBuilderReducers: ReducersMapObject<
  CustomColumnsBuilderState
> = {
  customColumns
};
