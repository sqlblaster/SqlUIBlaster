import * as React from 'react';
import {
  CheckedSelectProps,
  CheckedSelectState,
  CheckedSelectViewProps as ViewProps
} from './props';
import { CheckedSelect as View } from './view';

export class CheckedSelect<TItem extends string = string> extends React.Component<
  CheckedSelectProps<TItem>,
  CheckedSelectState
> {
  public state = {
    isOpen: false
  };

  public handleItemSelect: ViewProps<TItem>['handleItemSelect'] = item => {
    const { onSelect } = this.props;

    return () => {
      onSelect(item);
      this.setState({ isOpen: false });
    };
  }

  public showItems = () => {
    this.setState({ isOpen: true });
  }

  public handlePopoverClose = () => {
    this.setState({ isOpen: false });
  }

  public render() {
    return (
      <View
        isOpen={this.state.isOpen}
        handleItemSelect={this.handleItemSelect}
        showItems={this.showItems}
        handlePopoverClose={this.handlePopoverClose}
        {...this.props}
      />
    );
  }
}
