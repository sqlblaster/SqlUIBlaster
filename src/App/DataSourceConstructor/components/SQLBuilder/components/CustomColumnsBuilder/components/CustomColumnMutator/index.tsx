import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { CustomColumn } from '../CustomColumnItem/model';
import {
  CustomColumnMutatorOwnProps,
  CustomColumnMutatorProps,
  CustomColumnMutatorState,
  CustomColumnMutatorStateProps,
  CustomColumnMutatorViewProps as ViewProps
} from './props';
import { filterCustomColumn } from './utils';
import { CustomColumnMutator as View } from './view';

export const CustomColumnMutator = connect<
  CustomColumnMutatorStateProps,
  {},
  CustomColumnMutatorOwnProps,
  State
>(({ customColumns }) => ({ customColumns }))(
  class extends React.Component<
    CustomColumnMutatorProps,
    CustomColumnMutatorState
  > {
    public state = { popoverPositionUpdater: undefined };

    public positionUpdaterCallback: ViewProps['positionUpdaterCallback'] = popoverPositionUpdater => {
      if (!this.state.popoverPositionUpdater) {
        this.setState({ popoverPositionUpdater });
      }
    }

    public handleCustomColumnSelection: ViewProps['onCustomColumnSelected'] = column => {
      const { action, customColumn, onClose } = this.props;

      action(new CustomColumn(customColumn ? customColumn : {}, { column }));

      onClose();
    }

    public canShowColumnBranch: ViewProps['canShowColumnBranch'] = customColumnBranch => {
      const { customColumns } = this.props;

      return filterCustomColumn(customColumnBranch, customColumns);
    }

    public render() {
      return (
        <View
          {...this.props}
          popoverPositionUpdater={this.state.popoverPositionUpdater}
          positionUpdaterCallback={this.positionUpdaterCallback}
          onCustomColumnSelected={this.handleCustomColumnSelection}
          canShowColumnBranch={this.canShowColumnBranch}
        />
      );
    }
  }
);
