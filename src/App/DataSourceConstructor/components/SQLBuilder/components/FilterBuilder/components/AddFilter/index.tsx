import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { WithPopoverManagement } from '../../../common/WithPopoverManagement';
import {
  AddFilterDispatchProps,
  AddFilterProps,
  AddFilterStateProps,
  FBMapDispatchToProps
} from './props';
import { AddFilter as View } from './view';

export const AddFilter = connect<
  AddFilterStateProps,
  AddFilterDispatchProps,
  {},
  State
>(
  ({ filters }) => ({
    filters
  }),
  FBMapDispatchToProps
)(
  class extends React.Component<AddFilterProps> {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public render() {
      const { filters, addFilter } = this.props;

      return (
        <AddFilter.ViewWithPopoverManagement
          filters={filters}
          addFilter={addFilter}
        />
      );
    }
  }
);
