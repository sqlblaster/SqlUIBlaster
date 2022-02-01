import { Action } from 'src/components/query-builder/store/models/action-types';
import { Aggregation } from '../components/AggregationItem/model';

export type AddAggregationAction = Action<
  'ADD_AGGREGATION',
  { aggregation: Aggregation }
>;

export type UpdateAggregationAction = Action<
  'UPDATE_AGGREGATION',
  { aggregation: Aggregation }
>;

export type RemoveAggregationAction = Action<
  'REMOVE_AGGREGATION',
  { id: Aggregation['id'] }
>;

export type ClearAggregationsAction = Action<'CLEAR_AGGREGATIONS'>;

export type AggregationActions =
  | AddAggregationAction
  | UpdateAggregationAction
  | RemoveAggregationAction
  | ClearAggregationsAction;

export const aggregationActionTypes: (AggregationActions['type'])[] = [
  'ADD_AGGREGATION',
  'UPDATE_AGGREGATION',
  'REMOVE_AGGREGATION',
  'CLEAR_AGGREGATIONS'
];

export const addAggregation = (
  aggregation: Aggregation
): AddAggregationAction => ({
  type: 'ADD_AGGREGATION',
  aggregation
});

export const updateAggregation = (
  aggregation: Aggregation
): UpdateAggregationAction => ({
  type: 'UPDATE_AGGREGATION',
  aggregation
});

export const removeAggregation = (id: Aggregation['id']): RemoveAggregationAction => ({
  type: 'REMOVE_AGGREGATION',
  id
});

export const clearAggregations = (): ClearAggregationsAction => ({
  type: 'CLEAR_AGGREGATIONS',
});

export const AggregationBuilderActionCreators = {
  addAggregation,
  updateAggregation,
  removeAggregation,
  clearAggregations
};
