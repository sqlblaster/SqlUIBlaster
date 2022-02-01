import { Reducer, ReducersMapObject } from 'redux';
import { Aggregation } from '../components/AggregationItem/model';
import {
  AddAggregationAction,
  AggregationActions,
  RemoveAggregationAction,
  UpdateAggregationAction
} from './action';
import { AggregationsBuilderState } from './state';

export const addAggregation: Reducer<Aggregation[], AddAggregationAction> = (
  state = [],
  { aggregation }
) => state.concat(new Aggregation({ ...aggregation }));

export const updateAggregation: Reducer<
  Aggregation[],
  UpdateAggregationAction
> = (state = [], { aggregation }) =>
  state.map((a) => {
    if (a.id !== aggregation.id) {
      return a;
    }

    return new Aggregation(a, aggregation);
  });

export const removeAggregation: Reducer<
  Aggregation[],
  RemoveAggregationAction
> = (state = [], { id }) => state.filter((aggregation) => aggregation.id !== id);

export const aggregations: Reducer<
  Aggregation[],
  AggregationActions
> = (state = [], action) => {
  switch (action.type) {
    case 'ADD_AGGREGATION':
      return addAggregation(state, action);
    case 'UPDATE_AGGREGATION':
      return updateAggregation(state, action);
    case 'REMOVE_AGGREGATION':
      return removeAggregation(state, action);
    case 'CLEAR_AGGREGATIONS':
      return [];
    default:
      return state;
  }
};

export const AggregationsBuilderReducers: ReducersMapObject<
  AggregationsBuilderState
> = {
  aggregations
};
