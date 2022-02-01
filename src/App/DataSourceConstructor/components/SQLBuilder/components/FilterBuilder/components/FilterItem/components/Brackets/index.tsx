import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { Bracket, BracketProps } from './Bracket';
import { BracketsProps } from './props';
import { bracketsStyles } from './styles';

export const Brackets = withStyles(bracketsStyles)(
  class extends React.Component<BracketsProps> {
    public onClickHandler: BracketProps['onClick'] = (dashed) => {
      const { bracketsCount, openBracket, onChange } = this.props;

      onChange(dashed ? bracketsCount - 1 : bracketsCount + 1, openBracket);
    }

    public getDefaultDashedBracket = () => (
      <Bracket
        key={0}
        dashed={true}
        openBracket={this.props.openBracket}
        onClick={this.onClickHandler}
      />
    )

    public getSolidBrackets = () => {
      const { bracketsCount, openBracket } = this.props;

      const solidBrackets: JSX.Element[] = [];

      for (let i = 0; i < bracketsCount; i++) {
        solidBrackets.push(
          <Bracket
            key={i + 1}
            dashed={false}
            openBracket={openBracket}
            onClick={this.onClickHandler}
          />
        );
      }

      return solidBrackets;
    }

    public render() {
      const { openBracket, classes: { root } } = this.props;

      const bracketElements: JSX.Element[] = [];

      openBracket && bracketElements.push(this.getDefaultDashedBracket());

      bracketElements.push(...this.getSolidBrackets());

      !openBracket && bracketElements.push(this.getDefaultDashedBracket());

      return <div className={root}>{bracketElements}</div>;
    }
  }
);
