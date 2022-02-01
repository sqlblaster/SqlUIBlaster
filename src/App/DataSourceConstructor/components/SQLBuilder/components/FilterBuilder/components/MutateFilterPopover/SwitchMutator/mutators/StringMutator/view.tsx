import {
  Checkbox,
  FormControlLabel,
  Input,
  withStyles
} from '@material-ui/core';
import * as React from 'react';

import { VariableType } from 'src/schema';
import { CheckedSelect } from '../../CheckedSelect';
import { VariableItem } from '../../VariableItem';
import { VariablesPicker } from '../../VariablesPicker';
import { EnumsPicker } from './EnumsPicker';
import { StringOperator, stringOperators } from './operators';
import { StringMutatorViewProps } from './props';
import { stringMutatorStyles } from './styles';
import { hasCaseSensivity } from './utils';

export const stringMutatorPlaceholder = 'type desired text';
export const caseSensitivityText = 'Case sensitive';

export const StringMutator = withStyles(stringMutatorStyles)(
  class extends React.Component<StringMutatorViewProps> {
    public render() {
      const {
        operator,
        operands,
        caseSensitive,
        enums,
        column,
        pickedVariables,
        titleComponent,
        classes,
        submitMutationComponent,
        handleOperatorSelect: handleSelect,
        handleOperandChange,
        handleTextFieldChange,
        handleCaseSensitivityChange,
        handleVariableSelect,
        handleVariableClick
      } = this.props;

      return (
        <div className={classes.root}>
          <div
            className={`${classes['title-and-operator']} ${classes['common-padding']}`}
          >
            <div className={classes.title}>{titleComponent}</div>
            <div className={classes.operator}>
              <CheckedSelect<StringOperator>
                selectedItem={operator}
                items={stringOperators}
                onSelect={handleSelect}
              />
            </div>
          </div>
          <hr className={classes.hr} />
          {operator !== 'Is empty' && operator !== 'Is not empty' && (
            <>
              {
                <div
                  className={`${classes.operands} ${classes['common-padding']}`}
                >
                  {enums && enums.length ? (
                    <EnumsPicker
                      selectedEnum={operands}
                      selectedVariable={
                        pickedVariables instanceof Array
                          ? null
                          : pickedVariables
                      }
                      enums={enums}
                      column={column}
                      onEnumSelect={handleOperandChange}
                      onVariableSelect={handleVariableSelect}
                    />
                  ) : (
                    <Input
                      fullWidth
                      autoComplete='off'
                      value={operands}
                      placeholder={
                        pickedVariables ? '' : stringMutatorPlaceholder
                      }
                      disabled={!!pickedVariables}
                      startAdornment={
                        pickedVariables &&
                        !(pickedVariables instanceof Array) && (
                          <VariableItem
                            className={classes['variable-item']}
                            variable={pickedVariables}
                            onVariableClick={handleVariableClick}
                          />
                        )
                      }
                      endAdornment={
                        <VariablesPicker
                          type={VariableType.String}
                          onVariablePicked={handleVariableSelect}
                        />
                      }
                      onChange={handleTextFieldChange}
                    />
                  )}
                </div>
              }
            </>
          )}
          <hr className={classes.hr} />
          <div
            className={`${classes['mutator-action']} ${classes['common-padding']}`}
          >
            {hasCaseSensivity(operator) ? (
              <FormControlLabel
                control={
                  <Checkbox
                    id='case-sensitive'
                    checked={caseSensitive}
                    onChange={handleCaseSensitivityChange}
                    color='primary'
                    className={classes.CheckBox}
                  />
                }
                htmlFor='case-sensitive'
                label={caseSensitivityText}
                classes={{
                  root: classes.FormControlLabel,
                  label: classes.label
                }}
              />
            ) : (
              <span />
            )}
            {submitMutationComponent}
          </div>
        </div>
      );
    }
  }
);
