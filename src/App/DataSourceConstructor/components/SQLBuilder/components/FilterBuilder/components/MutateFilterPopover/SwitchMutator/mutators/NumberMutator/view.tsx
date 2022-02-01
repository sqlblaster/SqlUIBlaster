import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { CheckedSelect } from '../../CheckedSelect';
import { NumberOperator, numberOperators } from './operators';
import { NumberMutatorViewProps } from './props';
import { numberMutatorStyles } from './styles';
import { SwitchNumberMutatorOperands } from './SwitchNumberMutatorOperands';

export const NumberMutator = withStyles(numberMutatorStyles)(
  class extends React.Component<NumberMutatorViewProps> {
    public render() {
      const {
        operator,
        handleSelect,
        titleComponent,
        classes,
        submitMutationComponent
      } = this.props;

      return (
        <div className={classes.root}>
          <div
            className={`${classes['title-and-operator']} ${
              classes['common-padding']
            }`}
          >
            <div className={classes.title}>{titleComponent}</div>
            <div className={classes.operator}>
              <CheckedSelect<NumberOperator>
                selectedItem={operator}
                items={numberOperators}
                onSelect={handleSelect}
              />
            </div>
          </div>
          <hr className={classes.hr} />
          <SwitchNumberMutatorOperands />
          <hr className={classes.hr} />
          <div
            className={`${classes['mutator-action']} ${
              classes['common-padding']
            }`}
          >
            {submitMutationComponent}
          </div>
        </div>
      );
    }
  }
);
