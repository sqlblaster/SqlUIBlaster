import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { Filter } from '../FilterItem/model';
import {
  IMutateFilterPopoverHandlers,
  MFPMapDispatchToProps,
  MutateFilterPopoverDispatchProps,
  MutateFilterPopoverOwnProps,
  MutateFilterPopoverProps,
  MutateFilterPopoverState,
  MutateFilterPopoverStateProps,
  MutateFilterPopoverViewProps as ViewProps
} from './props';
import { getDefaultOperation } from './utils';
import { MutateFilterPopover as View } from './view';

type PropsType = MutateFilterPopoverProps;
type StateType = MutateFilterPopoverState;

export const MutateFilterPopover = connect<
  MutateFilterPopoverStateProps,
  MutateFilterPopoverDispatchProps,
  MutateFilterPopoverOwnProps,
  State
>(
  ({ operation, pickedVariables, canSaveFilter }) => ({
    operation,
    pickedVariables,
    canSaveFilter
  }),
  MFPMapDispatchToProps
)(
  class extends React.Component<PropsType, StateType>
    implements IMutateFilterPopoverHandlers {
    constructor(props: PropsType) {
      super(props);

      const { filter, setOperation, setPickedVariables } = props;

      this.state = {
        popoverPositionUpdater: undefined,
        ...(filter && filter.column ? { column: filter.column } : {})
      };

      filter && filter.operation && setOperation(filter.operation);

      setPickedVariables(filter && filter.variables ? filter.variables : null);
    }

    public positionUpdaterCallback: ViewProps['positionUpdaterCallback'] = popoverPositionUpdater => {
      if (!this.state.popoverPositionUpdater) {
        this.setState({ popoverPositionUpdater });
      }
    }

    public handleColumnSelection: ViewProps['handleColumnSelection'] = column => {
      const { setOperation, setPickedVariables } = this.props;

      this.setState({ column });

      setPickedVariables(null);
      setOperation(getDefaultOperation(column.lastColumn));
    }

    public handleMutateButtonClick: ViewProps['handleMutateButtonClick'] = () => {
      const {
        operation,
        action,
        filter,
        pickedVariables,
        onClose
      } = this.props;

      const { column } = this.state;

      action(
        new Filter(filter ? filter : {}, {
          column,
          operation,
          variables: pickedVariables
        })
      );

      onClose();
    }

    public handleBackClick: ViewProps['handleBackClick'] = () => {
      this.state.popoverPositionUpdater && this.state.popoverPositionUpdater();
      this.setState({ column: undefined });
    }

    public render() {
      return (
        <View
          {...this.state}
          {...this.props}
          popoverPositionUpdater={this.state.popoverPositionUpdater}
          positionUpdaterCallback={this.positionUpdaterCallback}
          handleColumnSelection={this.handleColumnSelection}
          handleMutateButtonClick={this.handleMutateButtonClick}
          handleBackClick={this.handleBackClick}
        />
      );
    }
  }
);
