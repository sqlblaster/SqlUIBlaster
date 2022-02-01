import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { CheckedSelect } from '../../CheckedSelect';
import { DateOperator, dateOperators } from './operators';
import { DateMutatorViewProps } from './props';
import { dateMutatorStyles } from './styles';
import { SwitchDateOperands } from './SwitchDateOperands';

export const DateMutator = withStyles(dateMutatorStyles)(
  class extends React.Component<DateMutatorViewProps> {
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
            className={ `${classes['title-and-operator']} ${
              classes['common-padding']
            }` }
          >
            <div className={classes.title}>{titleComponent}</div>
          </div>
          <hr className={classes.hr} />
          <SwitchDateOperands
            operator={operator}
            operatorView={
              <div className={classes.operator}>
                <CheckedSelect<DateOperator>
                  selectedItem={operator}
                  items={dateOperators}
                  onSelect={handleSelect}
                />
              </div>
            }
            renderBottomSection={(firstComponent) => (
              <div
                className={ `${classes['mutator-action']} ${
                  classes['common-padding']
                }` }
              >
                {firstComponent ? firstComponent : <span />}
                {submitMutationComponent}
              </div>
            ) }
          />
        </div>
      );
    }
  }
);
