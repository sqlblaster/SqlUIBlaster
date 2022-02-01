import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { WithPopoverManagement } from '../../../common/WithPopoverManagement';
import {
  AddOrderDispatchProps,
  AddOrderProps,
  AddOrderStateProps,
  AGMapDispatchToProps
} from './props';
import { AddOrder as View } from './view';

export const AddOrder = connect<AddOrderStateProps, AddOrderDispatchProps, {}, State>(
  ({ orders }) => ({ orders }),
  AGMapDispatchToProps
)(
  class extends React.Component<AddOrderProps> {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public render() {
      return <AddOrder.ViewWithPopoverManagement addOrder={this.props.addOrder} {...this.props} />;
    }
  }
);
