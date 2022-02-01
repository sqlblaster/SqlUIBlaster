import { FormControl, MenuItem, Select, withStyles } from '@material-ui/core';
import * as React from 'react';
import { VariableItem } from '../../../VariableItem';
import { VariablesPicker } from '../../../VariablesPicker';
import { EnumsPickerViewProps } from './props';
import { enumsPickerStyles } from './styles';

export const EnumsPicker = withStyles(enumsPickerStyles)((({
  selectedEnum,
  selectedVariable,
  enums,
  classes,
  selectIsOpen,
  filterVariables,
  handleEnumChange,
  handleVariablePick,
  handleSelectOpen,
  handleSelectClose,
  handleVariableItemClick
}) => {
  return (
    <FormControl className={classes['form-control']}>
      <Select
        value={selectedVariable ? '' : selectedEnum}
        onChange={handleEnumChange}
        open={selectIsOpen}
        onOpen={handleSelectOpen}
        onClose={handleSelectClose}
        classes={{ select: classes.select }}
        endAdornment={
          <VariablesPicker
            onVariablePicked={handleVariablePick}
            filter={filterVariables}
          />
        }
        startAdornment={
          <>
            {selectedVariable && (
              <VariableItem
                className={classes['variable-item']}
                variable={selectedVariable}
                onVariableClick={handleVariableItemClick}
              />
            )}
          </>
        }
      >
        {enums.map(enumuration => (
          <MenuItem key={enumuration} value={enumuration}>
            {enumuration}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}) as React.FC<EnumsPickerViewProps>);
