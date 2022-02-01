import { withStyles } from '@material-ui/core';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import * as React from 'react';
import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { BackButtonClassKeys, backButtonStyles } from './styles';

type BackButtonProps = {
  onClick: () => void;
} & ClassesProp<BackButtonClassKeys>;

export const BackButton = withStyles(backButtonStyles)((({
  onClick,
  classes: { root }
}) => {
  return <BackIcon className={root} onClick={onClick} />;
}) as React.FC<BackButtonProps>);
