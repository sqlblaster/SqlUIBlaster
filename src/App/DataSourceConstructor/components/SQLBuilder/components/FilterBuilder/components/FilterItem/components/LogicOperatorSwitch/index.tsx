import * as React from 'react';
import { WithPopoverManagement } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/WithPopoverManagement';
import {
  LogicOperatorSwitchProps,
  LogicOperatorSwitchViewProps as ViewProps
} from './props';
import { LogicOperatorSwitch as View } from './view';

export class LogicOperatorSwitch extends React.Component<
  LogicOperatorSwitchProps
> {
  public static ViewWithPopoverManagement = WithPopoverManagement(View);

  public handleLogicOperatorChange: ViewProps['handleLogicOperatorChange'] = (
    logicOperator,
    handleClose
  ) => () => {
    this.props.onLogicOperatorSwitch(logicOperator);
    handleClose();
  }

  public render() {
    return (
      <LogicOperatorSwitch.ViewWithPopoverManagement
        {...this.props}
        handleLogicOperatorChange={this.handleLogicOperatorChange}
      />
    );
  }
}
