import { IconButton, List, ListItem, withStyles } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
import VariableIcon from '@material-ui/icons/Code';
import * as React from 'react';
import { PopoverPaper } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/PopoverPaper';
import { VariableItem } from '../VariableItem';
import { VariablesPickerViewProps } from './props';
import { variablesPickerStyles } from './styles';

export const VariablesPicker = withStyles(variablesPickerStyles)(
  class extends React.Component<VariablesPickerViewProps> {
    private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

    constructor(props: VariablesPickerViewProps) {
      super(props);

      this.popoverLauncher = React.createRef<HTMLDivElement>();
    }

    public handleOpenWithoutPropagation: IconButtonProps['onClick'] = e => {
      e.stopPropagation();
      this.props.handleOpen();
    }

    public stopPropagation = (e: React.MouseEvent) => {
      e.stopPropagation();
    }

    public render() {
      const { isOpen, handleClose, variables, handleVariablePick, classes } = this.props;

      return (
        <>
          {variables && variables.length ? (
            <>
              <div ref={this.popoverLauncher}>
                <IconButton onClick={this.handleOpenWithoutPropagation} className={classes.button}>
                  <VariableIcon fontSize='small' />
                </IconButton>
              </div>
              <PopoverPaper
                isOpen={isOpen}
                anchorEl={this.popoverLauncher.current}
                onClose={handleClose}
              >
                <div onClick={this.stopPropagation}>
                  <List disablePadding>
                    {variables.map(variable => (
                      <ListItem
                        button
                        key={variable.id}
                        style={{ padding: 5 }}
                        onClick={handleVariablePick(variable, handleClose)}
                      >
                        <VariableItem variable={variable} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </PopoverPaper>
            </>
          ) : null}
        </>
      );
    }
  }
);
