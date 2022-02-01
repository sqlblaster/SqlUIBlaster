import { MenuItem, Select, Typography } from '@material-ui/core';
import { SelectProps } from '@material-ui/core/Select';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { VariableType } from 'src/schema';
import { VariableItem } from '../../../../../../VariableItem';
import {
  VariableDatePickerDispatchProps,
  VariableDatePickerOwnProps,
  VariableDatePickerProps,
  VariableDatePickerStateProps,
  VDPMapDispatchToProps
} from './props';

export const variablePlaceholder = 'Select a variable';
export const noVariablesText = 'No variables available';

export const VariableDatePicker = connect<
  VariableDatePickerStateProps,
  VariableDatePickerDispatchProps,
  VariableDatePickerOwnProps,
  State
>(
  ({ variables }) => ({
    variables: variables.filter(v => v.type === VariableType.Date)
  }),
  VDPMapDispatchToProps
)(
  class extends React.Component<VariableDatePickerProps> {
    public componentDidMount() {
      const { variable, changeCanSaveFilterState } = this.props;
      !variable && changeCanSaveFilterState(false);
    }

    public componentWillUnmount() {
      this.props.changeCanSaveFilterState(true);
    }

    public handleVariablePick: SelectProps['onChange'] = event => {
      const {
        variables,
        variable,
        onVariablePicked,
        changeCanSaveFilterState
      } = this.props;

      const pickedVariable = variables.find(v => v.name === event.target.value);

      if (
        pickedVariable &&
        ((variable && variable.name !== pickedVariable.name) || !variable)
      ) {
        onVariablePicked(pickedVariable);
        changeCanSaveFilterState(true);
      }
    }

    public render() {
      const { variables, variable } = this.props;

      return (
        <div style={{ marginTop: 10 }}>
          {variables && variables.length ? (
            <Select
              style={{ width: '100%' }}
              value={variable ? variable.name : variablePlaceholder}
              onChange={this.handleVariablePick}
            >
              {!variable && (
                <MenuItem
                  key={variablePlaceholder}
                  value={variablePlaceholder}
                  disabled
                >
                  <Typography variant='subtitle1'>
                    {variablePlaceholder}
                  </Typography>
                </MenuItem>
              )}
              {variables.map(v => (
                <MenuItem key={v.name} value={v.name}>
                  <VariableItem variable={v} />
                </MenuItem>
              ))}
            </Select>
          ) : (
            <Typography variant='subtitle1'>{noVariablesText}</Typography>
          )}
        </div>
      );
    }
  }
);
