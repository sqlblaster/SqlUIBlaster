import * as React from 'react';
import { PopoverPaperProps } from '../../../common/PopoverPaper';
import { Aggregation, ColumnFilterType } from '../AggregationItem/model';
import {
  MutateAggregationPopoverProps,
  MutateAggregationPopoverState,
  MutateAggregationPopoverViewProps as ViewProps
} from './props';
import { MutateAggregationPopover as View } from './view';

type PropsType = MutateAggregationPopoverProps;
type StateType = MutateAggregationPopoverState;

export class MutateAggregationPopover extends React.Component<
  PropsType,
  StateType
> {
  constructor(props: PropsType) {
    super(props);

    const aggregation = props.aggregation;
    this.state = {
      popoverPositionUpdater: undefined,
      ...(aggregation ? { operator: aggregation.operator } : {})
    };
  }

  public positionUpdaterCallback: PopoverPaperProps['positionUpdaterCallback'] = popoverPositionUpdater => {
    if (!this.state.popoverPositionUpdater) {
      this.setState({ popoverPositionUpdater });
    }
  }

  public handleOperatorSelection: ViewProps['onOperatorSelected'] = operator => () => {
    const { aggregation, action, onClose } = this.props;

    if (!Aggregation.getExpectedColumnsTypeFrom(operator).length) {
      action(
        new Aggregation(aggregation ? aggregation : {}, {
          operator
        })
      );
      onClose();
    } else {
      this.state.popoverPositionUpdater && this.state.popoverPositionUpdater();
      this.setState({ operator });
    }
  }

  public handleColumnSelection: ViewProps['onColumnSelected'] = column => {
    const { action, aggregation, onClose } = this.props;
    const { operator } = this.state;

    action(
      new Aggregation(aggregation ? aggregation : {}, { operator, column })
    );

    onClose();
  }

  public handleBackClick: ViewProps['onBackClicked'] = () => {
    this.state.popoverPositionUpdater && this.state.popoverPositionUpdater();
    this.setState({ operator: undefined });
  }

  public canShowColumnBranch: ViewProps['canShowColumnBranch'] = ({
    lastColumn: { type }
  }) => {
    const { operator } = this.state;
    const types = new Set<ColumnFilterType>(
      operator ? Aggregation.getExpectedColumnsTypeFrom(operator) : []
    );

    return types.has('all') || types.has(type);
  }

  public render() {
    return (
      <View
        {...this.state}
        onColumnSelected={this.handleColumnSelection}
        onOperatorSelected={this.handleOperatorSelection}
        popoverPositionUpdater={this.state.popoverPositionUpdater}
        positionUpdaterCallback={this.positionUpdaterCallback}
        onBackClicked={this.handleBackClick}
        canShowColumnBranch={this.canShowColumnBranch}
        {...this.props}
      />
    );
  }
}
