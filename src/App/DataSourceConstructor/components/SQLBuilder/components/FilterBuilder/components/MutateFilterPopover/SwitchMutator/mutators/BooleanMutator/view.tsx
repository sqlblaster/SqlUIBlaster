import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { CheckedSelect } from '../../CheckedSelect';
import { BooleanOperator, booleanOperators } from './operators';
import { BooleanMutatorViewProps } from './props';
import { booleanMutatorStyles } from './styles';

export const BooleanMutator = withStyles(booleanMutatorStyles)(
  class extends React.Component<BooleanMutatorViewProps> {
    public render() {
      const {
        operator,
        handleOperatorSelect,
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
            <div className={classes.operator}>
              <CheckedSelect<BooleanOperator>
                selectedItem={operator}
                items={booleanOperators}
                onSelect={handleOperatorSelect}
              />
            </div>
          </div>
          <hr className={classes.hr} />
          <div
            className={ `${classes['mutator-action']} ${
              classes['common-padding']
            }` }
          >
            {submitMutationComponent}
          </div>
        </div>
      );
    }
  }
);
