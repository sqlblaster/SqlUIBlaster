import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { CustomColumnsBuilderStateProps } from './props';
import { CustomColumnsBuilder as View } from './view';

export const CustomColumnsBuilder = connect<
  CustomColumnsBuilderStateProps,
  {},
  {},
  State
>(({ customColumns, aggregations, groupings }) => ({
  customColumns,
  aggregations,
  groupings
}))(View);
