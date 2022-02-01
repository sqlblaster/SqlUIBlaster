import * as React from 'react';
import { connect } from 'react-redux';
import { WithPopoverManagement } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/WithPopoverManagement';
import { State } from 'src/components/query-builder/store/models/State';
import {
  IVariablesPickerHandlers,
  VariablesPickerOwnProps,
  VariablesPickerProps,
  VariablesPickerStateProps,
  VariablesPickerViewProps as ViewProps
} from './props';
import { VariablesPicker as View } from './view';

export const VariablesPicker = connect<
  VariablesPickerStateProps,
  {},
  VariablesPickerOwnProps,
  State
>(({ variables }, { type, filter }) => ({
  variables: variables.filter(v => (type ? v.type === type : true) && (filter ? filter(v) : true))
}))(
  class extends React.Component<VariablesPickerProps> implements IVariablesPickerHandlers {
    public static ViewWithPopoverManagement = WithPopoverManagement(View);

    public handleVariablePick: ViewProps['handleVariablePick'] = (variable, handleClose) => () => {
      this.props.onVariablePicked(variable);
      handleClose();
    }

    public render() {
      return (
        <VariablesPicker.ViewWithPopoverManagement
          {...this.props}
          handleVariablePick={this.handleVariablePick}
        />
      );
    }
  }
);
