import { Chip } from '@material-ui/core';
import { ChipProps } from '@material-ui/core/Chip';
import VariableIcon from '@material-ui/icons/Code';
import * as React from 'react';
import { Variable } from 'src/schema';

export interface VariableItemProps {
  variable: Variable;
  onVariableClick?: (variable: Variable) => ChipProps['onClick'];
  className?: string;
}

export const VariableItem: React.FC<VariableItemProps> = ({
  variable,
  className,
  onVariableClick
}) => {
  return (
    <Chip
      className={className}
      style={{ height: 20, cursor: 'pointer', marginRight: 5 }}
      icon={<VariableIcon fontSize='small' />}
      label={variable.name}
      color='primary'
      {...(onVariableClick ? { onClick: onVariableClick(variable) } : {})}
    />
  );
};
