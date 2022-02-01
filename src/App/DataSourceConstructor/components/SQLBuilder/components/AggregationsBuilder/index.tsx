import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { AggregationsBuilderStateProps } from './props';
import { AggregationsBuilder as View } from './view';

export const AggregationsBuilder = connect<
  AggregationsBuilderStateProps,
  {},
  {},
  State
>(({ aggregations }) => ({
  aggregations
}))(View);
