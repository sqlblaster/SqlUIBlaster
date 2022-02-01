import {
  Collapse,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import { TableColumnsDelegatedProps } from '../props';
import { TableColumns } from '../view';
import { ColumnItemViewProps } from './props';
import { TypeIcon } from './TypeIcon';
import { calcPaddingAccordingTo, getNewTableBranch } from './utils';

export const ColumnItem = withStyles({})(
  class extends React.Component<ColumnItemViewProps> {
    public render() {
      const {
        name,
        type,
        foreignTableName,
        foreignModelName,
        columnBranch,
        level,
        tables,
        popoverPositionUpdater,
        onColumnSelected,
        canShowColumnBranch,
        collapsed,
        handleColumnClick,
        handleCollapsedStateChange,
        handleCollapseEnter,
        handleCollapseExit
      } = this.props;

      const delegatedProps: TableColumnsDelegatedProps = {
        tables,
        popoverPositionUpdater,
        onColumnSelected,
        canShowColumnBranch
      };

      const disabledForeignColumn = canShowColumnBranch
        ? !canShowColumnBranch(columnBranch) && !!foreignTableName
        : false;

      return (
        <>
          <ListItem
            {...(disabledForeignColumn
              ? {}
              : { button: true, onClick: handleColumnClick })}
            style={{
              paddingLeft: calcPaddingAccordingTo(level),
              ...(disabledForeignColumn ? { cursor: 'default' } : {})
            }}
          >
            <ListItemIcon>
              <TypeIcon type={foreignTableName ? 'foreign-column' : type} />
            </ListItemIcon>
            <ListItemText inset={true} primary={name} />
            {foreignTableName && (
              <>
                {collapsed ? (
                  <IconButton
                    onClick={handleCollapsedStateChange}
                    style={{ padding: 0 }}
                  >
                    <ExpandMore />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={handleCollapsedStateChange}
                    style={{ padding: 0 }}
                  >
                    <ExpandLess />
                  </IconButton>
                )}
              </>
            )}
          </ListItem>

          {foreignTableName && (
            <Collapse
              in={!collapsed}
              timeout='auto'
              unmountOnExit={true}
              onEntered={handleCollapseEnter}
              onExited={handleCollapseExit}
            >
              <TableColumns
                {...delegatedProps}
                level={level + 1}
                tableName={foreignTableName}
                tableBranch={getNewTableBranch(
                  columnBranch,
                  foreignTableName,
                  foreignModelName
                )}
              />
            </Collapse>
          )}
        </>
      );
    }
  }
);
