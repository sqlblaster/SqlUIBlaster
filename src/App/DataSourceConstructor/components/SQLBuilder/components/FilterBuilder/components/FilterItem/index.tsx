import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { Filter } from './model';
import {
  FilterItemDispatchProps,
  FilterItemOwnProps,
  FilterItemProps,
  FilterItemState,
  FilterItemStateProps,
  FilterItemViewProps as ViewProps,
  FIMapDispatchToProps
} from './props';
import { FilterItem as View } from './view';

export const FilterItem = connect<
  FilterItemStateProps,
  FilterItemDispatchProps,
  FilterItemOwnProps,
  State
>(
  null,
  FIMapDispatchToProps
)(
  class extends React.Component<FilterItemProps, FilterItemState> {
    public state: FilterItemState = {
      isMutatorOpen: false
    };

    public handleFilterRemoval: ViewProps['handleFilterRemoval'] = (id) => () => {
      const { removeFilter } = this.props;
      removeFilter(id);
    }

    public handleMutatorOpen: ViewProps['handleOpen'] = () => {
      this.setState((state) => ({ isMutatorOpen: !state.isMutatorOpen }));
    }

    public handleMutatorClose: ViewProps['handleClose'] = () => {
      this.setState({ isMutatorOpen: false });
    }

    public handleLogicOperatorSwitch: ViewProps['handleLogicOperatorSwitch'] = (logicOperator) => {
      const { updateFilter, filter } = this.props;

      updateFilter(
        new Filter(filter, {
          logicOperator
        })
      );
    }

    public handleBracketsCountChange: ViewProps['handleBracketsCountChange'] = (
      bracketsCount,
      openBracket
    ) => {
      const { updateFilter, filter } = this.props;
      const bracketsCountObject: Partial<Filter> = {};

      if (openBracket) {
        bracketsCountObject.openingBracketsCount = bracketsCount;
      } else {
        bracketsCountObject.closingBracketsCount = bracketsCount;
      }

      updateFilter(new Filter(filter, bracketsCountObject));
    }

    public render() {
      const { isMutatorOpen } = this.state;

      return (
        <View
          handleFilterRemoval={this.handleFilterRemoval}
          handleLogicOperatorSwitch={this.handleLogicOperatorSwitch}
          handleBracketsCountChange={this.handleBracketsCountChange}
          isOpen={isMutatorOpen}
          handleOpen={this.handleMutatorOpen}
          handleClose={this.handleMutatorClose}
          {...this.props}
        />
      );
    }
  }
);
