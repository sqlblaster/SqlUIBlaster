import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { OperatorViewProp } from '../..';
import { EmptyDateClassKeys, emptyDateStyles } from './styles';

export type EmptyDateProps = OperatorViewProp & ClassesProp<EmptyDateClassKeys>;

// TODO: strech selects to the full available width
export const EmptyDate = withStyles(emptyDateStyles)((({
  operatorView,
  classes: { root }
}) => <div className={root}>{operatorView}</div>) as React.FC<EmptyDateProps>);
