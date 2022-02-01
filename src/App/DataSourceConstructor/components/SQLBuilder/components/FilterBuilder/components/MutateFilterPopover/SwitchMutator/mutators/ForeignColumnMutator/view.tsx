import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { ForeignField } from 'src/process/startnew/ForeignField';
import { VariableType } from 'src/schema';
import { VariableItem } from '../../VariableItem';
import { VariablesPicker } from '../../VariablesPicker';
import { ForeignColumnMutatorViewProps } from './props';
import { foreignColumnMutatorStyles } from './styles';
import { getModels } from './utils';

export const ForeignColumnMutator = withStyles(foreignColumnMutatorStyles)(
  class extends React.Component<ForeignColumnMutatorViewProps> {
    public render() {
      const {
        record,
        pickedVariables,
        titleComponent,
        classes,
        submitMutationComponent,
        filter,
        handleOperandChange,
        handleVariablePick
      } = this.props;

      return (
        <div className={classes.root}>
          <div
            className={`${classes['title-and-operator']} ${classes['common-padding']}`}
          >
            <div className={classes.title}>{titleComponent}</div>
          </div>
          <hr className={classes.hr} />
          <div className={classes['common-padding']}>
            <ForeignField
              handleChange={handleOperandChange}
              id={record ? record.id : ''}
              parent={
                pickedVariables && !(pickedVariables instanceof Array)
                  ? { title: '', type: pickedVariables.model as string }
                  : record
              }
              label={''}
              models={getModels(this.props)}
              endAdornment={
                <VariablesPicker
                  type={VariableType.Record}
                  filter={filter}
                  onVariablePicked={handleVariablePick}
                />
              }
              startAdornment={
                pickedVariables &&
                !(pickedVariables instanceof Array) && (
                  <VariableItem variable={pickedVariables} />
                )
              }
            />
          </div>
          <hr className={classes.hr} />
          <div
            className={`${classes['mutator-action']} ${classes['common-padding']}`}
          >
            {submitMutationComponent}
          </div>
        </div>
      );
    }
  }
);
