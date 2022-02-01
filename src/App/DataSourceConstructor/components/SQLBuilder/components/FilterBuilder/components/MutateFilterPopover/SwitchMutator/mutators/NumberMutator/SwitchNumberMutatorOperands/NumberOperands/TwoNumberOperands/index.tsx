import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { NumberOperation } from '../../../NumberOperation';
import {
  TNOMapDispatchToProps,
  TwoNumberOperand,
  TwoNumberOperandsDispatchProps,
  TwoNumberOperandsProps,
  TwoNumberOperandsStateProps,
  TwoNumberOperandsViewProps as ViewProps
} from './props';
import { TwoNumberOperands as View } from './view';

export const TwoNumberOperands = connect<
  TwoNumberOperandsStateProps,
  TwoNumberOperandsDispatchProps,
  {},
  State
>(
  ({ operation }) => {
    const { operands } = operation as NumberOperation;

    return {
      operands: operands as TwoNumberOperand,
      operation: operation as NumberOperation
    };
  },
  TNOMapDispatchToProps
)(
  class extends React.Component<TwoNumberOperandsProps> {
    public handleOperandChange: ViewProps['handleOperandChange'] = index => ({
      floatValue = 0
    }) => {
      const { setOperation, operation, operands } = this.props;

      const newOperands: [number, number] =
        operands && (operands as [number, number]).length === 2
          ? ((operands as [number, number]).slice(0) as [number, number])
          : [0, 0];

      newOperands[index] = floatValue;

      setOperation(new NumberOperation(operation, { operands: newOperands }));
    }

    public render() {
      return (
        <View
          operands={this.props.operands}
          handleOperandChange={this.handleOperandChange}
        />
      );
    }
  }
);
