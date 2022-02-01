import * as React from 'react';
import { VariableType } from 'src/schema';
import {
  EnumsPickerProps,
  EnumsPickerState,
  EnumsPickerViewProps as ViewProps,
  IEnumsPickerHandlers
} from './props';
import { EnumsPicker as View } from './view';

export class EnumsPicker
  extends React.Component<EnumsPickerProps, EnumsPickerState>
  implements IEnumsPickerHandlers {
  public state: EnumsPickerState = { selectIsOpen: false };

  public handleEnumChange: ViewProps['handleEnumChange'] = event => {
    this.props.onEnumSelect(event.target.value);
  }

  public handleVariablePick: ViewProps['handleVariablePick'] = variable => {
    this.props.onVariableSelect(variable);
  }

  public filterVariables: ViewProps['filterVariables'] = variable => {
    const { columnName, modelName } = this.props.column;

    return (
      variable.type === VariableType.Enum &&
      variable.model === modelName &&
      variable.field === columnName
    );
  }

  public handleSelectOpen: ViewProps['handleSelectOpen'] = () => {
    this.setState({ selectIsOpen: true });
  }

  public handleSelectClose: ViewProps['handleSelectClose'] = () => {
    this.setState({ selectIsOpen: false });
  }

  public handleVariableItemClick: ViewProps['handleVariableItemClick'] = () => () => {
    this.setState({ selectIsOpen: true });
  }

  public render() {
    return (
      <View
        selectIsOpen={this.state.selectIsOpen}
        handleEnumChange={this.handleEnumChange}
        handleVariablePick={this.handleVariablePick}
        handleVariableItemClick={this.handleVariableItemClick}
        handleSelectOpen={this.handleSelectOpen}
        handleSelectClose={this.handleSelectClose}
        filterVariables={this.filterVariables}
        {...this.props}
      />
    );
  }
}
