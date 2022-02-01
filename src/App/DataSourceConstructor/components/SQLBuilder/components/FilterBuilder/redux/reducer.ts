import { Reducer, ReducersMapObject } from 'redux';
import { Filter } from '../components/FilterItem/model';
import { MutateFilterPopoverReducers } from '../components/MutateFilterPopover/redux/reducers';
import {
  AddFilterAction,
  FilterActions,
  RemoveFilterAction,
  UpdateFilterAction
} from './action';
import { FilterBuilderState } from './state';

export const addFilter: Reducer<Filter[], AddFilterAction> = (
  state = [],
  { filter }
) => state.concat(new Filter({ ...filter }));

export const updateFilter: Reducer<Filter[], UpdateFilterAction> = (
  state = [],
  { filter }
) =>
  state.map((f) => {
    if (f.id !== filter.id) {
      return f;
    }

    return new Filter(f, filter);
  });

export const removeFilter: Reducer<Filter[], RemoveFilterAction> = (
  state = [],
  { id }
) => state.filter((filter) => filter.id !== id);

export const filters: Reducer<Filter[], FilterActions> = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return addFilter(state, action);
    case 'UPDATE_FILTER':
      return updateFilter(state, action);
    case 'REMOVE_FILTER':
      return removeFilter(state, action);
    case 'CLEAR_FILTERS':
      return [];
    default:
      return state;
  }
};

export const FilterBuilderReducers: ReducersMapObject<
  FilterBuilderState,
  any
> = {
  filters,
  ...MutateFilterPopoverReducers
};
