import { Action } from 'src/store/models/action-types';
import { Filter } from '../components/FilterItem/model';
import { MutateFilterPopoverActionCreators } from '../components/MutateFilterPopover/redux/actions';

export type AddFilterAction = Action<'ADD_FILTER', { filter: Filter }>;

export type UpdateFilterAction = Action<'UPDATE_FILTER', { filter: Filter }>;

export type RemoveFilterAction = Action<'REMOVE_FILTER', { id: Filter['id'] }>;

export type ClearFiltersAction = Action<'CLEAR_FILTERS'>;

export type FilterActions =
  | AddFilterAction
  | UpdateFilterAction
  | RemoveFilterAction
  | ClearFiltersAction;

export const filterActionTypes: FilterActions['type'][] = [
  'ADD_FILTER',
  'UPDATE_FILTER',
  'REMOVE_FILTER',
  'CLEAR_FILTERS'
];

export const addFilter = (filter: Filter): AddFilterAction => ({
  type: 'ADD_FILTER',
  filter
});

export const updateFilter = (filter: Filter): UpdateFilterAction => ({
  type: 'UPDATE_FILTER',
  filter
});

export const removeFilter = (id: Filter['id']): RemoveFilterAction => ({
  type: 'REMOVE_FILTER',
  id
});

export const clearFilters = (): ClearFiltersAction => ({
  type: 'CLEAR_FILTERS'
});

export const FilterBuilderActionCreators = {
  addFilter,
  updateFilter,
  removeFilter,
  clearFilters,
  ...MutateFilterPopoverActionCreators
};
