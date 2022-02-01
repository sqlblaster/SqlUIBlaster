import * as React from 'react';
import {
  ColumnItemProps,
  ColumnItemViewProps as ViewProps,
  IColumnItemHandlers
} from './props';
import { ColumnItem as View } from './view';

export interface ColumnItemState {
  collapsed: boolean;
}

export class ColumnItem
  extends React.Component<ColumnItemProps, ColumnItemState>
  implements IColumnItemHandlers {
  public state: ColumnItemState = {
    collapsed: true
  };

  public handleCollapseEnter: ViewProps['handleCollapseEnter'] = () =>
    this.props.popoverPositionUpdater && this.props.popoverPositionUpdater()

  public handleCollapseExit: ViewProps['handleCollapseExit'] = () =>
    this.props.popoverPositionUpdater && this.props.popoverPositionUpdater()

  public handleColumnClick: ViewProps['handleColumnClick'] = () => {
    const {
      columnBranch,
      onColumnSelected,
      popoverPositionUpdater
    } = this.props;

    popoverPositionUpdater && popoverPositionUpdater();

    onColumnSelected(columnBranch);
  }

  public handleCollapsedStateChange: ViewProps['handleCollapsedStateChange'] = event => {
    this.setState(state => ({ collapsed: !state.collapsed }));
    event.stopPropagation();
  }

  public render() {
    const { collapsed } = this.state;

    return (
      <View
        {...this.props}
        collapsed={collapsed}
        handleCollapseEnter={this.handleCollapseEnter}
        handleCollapseExit={this.handleCollapseExit}
        handleCollapsedStateChange={this.handleCollapsedStateChange}
        handleColumnClick={this.handleColumnClick}
      />
    );
  }
}
