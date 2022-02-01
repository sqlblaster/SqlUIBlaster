import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { WithPopoverManagement } from '../../../common/WithPopoverManagement';
import {
  CustomColumnItemDispatchProps,
  CustomColumnItemOwnProps,
  CustomColumnItemProps,
  CustomColumnItemViewProps as ViewProps,
  GIMapDispatchToProps
} from './props';
import { CustomColumnItem as View } from './view';

export const CustomColumnItem = connect<
  {},
  CustomColumnItemDispatchProps,
  CustomColumnItemOwnProps,
  State
>(
  null,
  GIMapDispatchToProps
)(
  class extends React.Component<CustomColumnItemProps> {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public handleCustomColumnRemoval: ViewProps['handleCustomColumnRemoval'] = (id) => () =>
      this.props.removeCustomColumn(id)

    public render() {
      return (
        <CustomColumnItem.ViewWithPopoverManagement
          handleCustomColumnRemoval={this.handleCustomColumnRemoval}
          {...this.props}
        />
      );
    }
  }
);
