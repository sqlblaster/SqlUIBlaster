import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { ClassesProp } from 'src/App/utils/classes-prop';
import { BracketClassKeys, bracketStyles } from './styles';

export type BracketProps = {
  openBracket: boolean;
  dashed: boolean;
  onClick: (dashed: boolean) => void;
} & ClassesProp<BracketClassKeys>;

export const onBracketClick = (
  dashed: boolean,
  onClick: BracketProps['onClick']
) => () => onClick(dashed);

export const Bracket = withStyles(bracketStyles)((({
  openBracket,
  dashed,
  classes,
  onClick
}) => (
  <div className={classes.root} onClick={onBracketClick(!dashed, onClick)}>
    <svg viewBox='0 0 15 100' style={{ width: '100%', height: '100%' }}>
      { openBracket ? (
        <path
          className={`${classes.bracket} ${dashed ? classes.dashed : ''}`}
          d={ `M15,0L12.5,8.333333333333334C10,16.666666666666668,5,33.333333333333336,
              5,50C5,66.66666666666667,10,83.33333333333333,12.5,91.66666666666667L15,100` }
        />
      ) : (
        <path
          className={`${classes.bracket} ${dashed ? classes.dashed : ''}`}
          d={ `M0,0L2.5,8.333333333333334C5,16.666666666666668,10,33.333333333333336,10,
              50C10,66.66666666666667,5,83.33333333333333,2.5,91.66666666666667L0,100` }
        />
      ) }
    </svg>
  </div>
)) as React.FC<BracketProps>);
