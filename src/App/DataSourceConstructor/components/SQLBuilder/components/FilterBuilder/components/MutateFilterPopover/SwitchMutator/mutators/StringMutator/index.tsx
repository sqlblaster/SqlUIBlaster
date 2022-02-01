import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { getEnums } from '../utils';
import {
  SMMapDispatchToProps,
  StringMutatorDispatchProps,
  StringMutatorHandlers,
  StringMutatorOwnProps,
  StringMutatorProps,
  StringMutatorStateProps,
  StringMutatorViewProps as ViewProps
} from './props';
import { StringOperation } from './StringOperation';
import { StringMutator as View } from './view';

export const StringMutator = connect<
  StringMutatorStateProps,
  StringMutatorDispatchProps,
  StringMutatorOwnProps,
  State
>(
  ({ operation, tables, pickedVariables }, { column }) => {
    const stringOperation =
      operation.type === 'String'
        ? new StringOperation(operation)
        : new StringOperation();

    const { operator, caseSensitive } = stringOperation;
    const enums = getEnums(tables, column);
    const operands =
      !stringOperation.operands && enums && enums.length
        ? enums[0]
        : stringOperation.operands;

    return {
      operator,
      operands,
      caseSensitive,
      operation: stringOperation,
      enums,
      pickedVariables
    };
  },
  SMMapDispatchToProps
)(
  class extends React.Component<StringMutatorProps>
    implements StringMutatorHandlers {
    public componentDidMount() {
      const { operation, operands, setOperation } = this.props;
      setOperation(new StringOperation(operation, { operands }));
    }

    public handleOperatorSelect: ViewProps['handleOperatorSelect'] = operator => {
      const { setOperation, operation } = this.props;
      setOperation(new StringOperation(operation, { operator }));
    }

    public handleTextFieldChange: ViewProps['handleTextFieldChange'] = event => {
      const operands = event.target.value;

      this.handleOperandChange(operands);
    }

    public handleOperandChange: ViewProps['handleOperandChange'] = operands => {
      const { operation, setOperation, setPickedVariables } = this.props;
      setOperation(new StringOperation(operation, { operands }));
      setPickedVariables(null);
    }

    public handleCaseSensitivityChange: ViewProps['handleCaseSensitivityChange'] = () => {
      const { setOperation, operation, caseSensitive } = this.props;
      setOperation(
        new StringOperation(operation, { caseSensitive: !caseSensitive })
      );
    }

    public handleVariableSelect: ViewProps['handleVariableSelect'] = variable => {
      const { operation, setOperation, setPickedVariables } = this.props;
      setPickedVariables(variable);
      setOperation(new StringOperation(operation, { operands: undefined }));
    }

    public handleVariableClick: ViewProps['handleVariableClick'] = variable => () => {
      this.props.setPickedVariables(null);
    }

    public render() {
      return (
        <View
          handleOperatorSelect={this.handleOperatorSelect}
          handleOperandChange={this.handleOperandChange}
          handleTextFieldChange={this.handleTextFieldChange}
          handleCaseSensitivityChange={this.handleCaseSensitivityChange}
          handleVariableSelect={this.handleVariableSelect}
          handleVariableClick={this.handleVariableClick}
          {...this.props}
        />
      );
    }
  }
);
