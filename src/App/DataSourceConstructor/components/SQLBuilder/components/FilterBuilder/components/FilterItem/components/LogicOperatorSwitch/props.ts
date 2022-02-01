import { PopoverManagerProps } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/WithPopoverManagement';
import { LogicOperator } from './logic-operators';

export interface LogicOperatorSwitchProps {
  logicOperator: LogicOperator;
  onLogicOperatorSwitch: (logicOperator: LogicOperator) => void;
}

export type LogicOperatorSwitchViewProps = LogicOperatorSwitchProps &
  PopoverManagerProps & {
    handleLogicOperatorChange: (
      logicOperator: LogicOperator,
      handleClose: PopoverManagerProps['handleClose']
    ) => () => void;
  };
