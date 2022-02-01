import { Button, List, ListItem, ListItemText, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { PopoverPaper } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/PopoverPaper';
import { logicOperators } from './logic-operators';
import { LogicOperatorSwitchViewProps } from './props';

export const LogicOperatorSwitch = withStyles({})(
  class extends React.Component<LogicOperatorSwitchViewProps> {
    private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

    constructor(props: LogicOperatorSwitchViewProps) {
      super(props);

      this.popoverLauncher = React.createRef<HTMLDivElement>();
    }

    public render() {
      const {
        logicOperator,
        handleLogicOperatorChange,
        isOpen,
        handleOpen,
        handleClose
      } = this.props;

      return (
        <>
          <div style={{ marginLeft: 15 }} ref={this.popoverLauncher} onClick={handleOpen}>
            <Button size='small' style={{ minWidth: 0 }}>
              <Typography color='primary'>{logicOperator}</Typography>
            </Button>
          </div>
          <PopoverPaper
            isOpen={isOpen}
            onClose={handleClose}
            anchorEl={this.popoverLauncher.current}
          >
            <List component='nav' disablePadding={true}>
              {logicOperators.map(lo => (
                <ListItem
                  button={true}
                  key={lo}
                  onClick={handleLogicOperatorChange(lo, handleClose)}
                >
                  <ListItemText inset={true} primary={lo} style={{ padding: 0 }} />
                </ListItem>
              ))}
            </List>
          </PopoverPaper>
        </>
      );
    }
  }
);
