import { withStyles } from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';
import ShareIcon from '@material-ui/icons/Share';
import KeyIcon from '@material-ui/icons/VpnKey';
import * as React from 'react';
import { ClassesProp } from 'src/App/utils/classes-prop';
import { ColumnItemViewProps } from '../props';
import { TypeIconClassKeys, typeIconStyles } from './styles';

export type TypeIconProps = {
  type: ColumnItemViewProps['type'] | 'foreign-column';
} & ClassesProp<TypeIconClassKeys>;

export const TypeIcon = withStyles(typeIconStyles)((({ type, classes }) => {
  switch (type) {
    case 'number':
      return <div className={classes.customIconType}>#</div>;
    case 'string':
      return <div className={classes.customIconType}>Aa</div>;
    case 'Date':
      return <CalendarIcon style={{ color: '#C8CED3', fontSize: '12px' }} />;
    case 'boolean':
      return <CheckIcon style={{ color: '#C8CED3', fontSize: '12px' }} />;
    case 'foreign-column':
    case 'uuid':
      return <ShareIcon style={{ color: '#C8CED3', fontSize: '12px' }} />;
    case 'primary':
      return <KeyIcon style={{ color: '#C8CED3', fontSize: '12px' }} />;
    default:
      return null;
  }
}) as React.FC<TypeIconProps>);
