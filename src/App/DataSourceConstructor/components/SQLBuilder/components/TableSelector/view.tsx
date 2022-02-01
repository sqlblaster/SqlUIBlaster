import { MenuItem, Select, Typography } from '@material-ui/core';
import * as React from 'react';
import { TableSelectorViewProps } from './props';

export const tablePickerPlaceholder = 'Choose a type of record';

export const TableSelector: React.FC<TableSelectorViewProps> = ({
  selectedTable,
  tables,
  handleTableSelection
}) => {
  return (
    <Select
      value={selectedTable ? selectedTable.modelName : tablePickerPlaceholder}
      onChange={handleTableSelection}
    >
      {!selectedTable && (
        <MenuItem
          disabled
          key={tablePickerPlaceholder}
          value={tablePickerPlaceholder}
        >
          <Typography variant='subtitle1'>{tablePickerPlaceholder}</Typography>
        </MenuItem>
      )}
      {tables &&
        tables.map(({ modelName }) => (
          <MenuItem button={true} value={modelName} key={modelName}>
            <Typography variant='subtitle1'>{modelName}</Typography>
          </MenuItem>
        ))}
    </Select>
  );
};
