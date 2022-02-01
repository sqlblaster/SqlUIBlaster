import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { NearDateOperands, NearDateOperation } from './model';
import {
  NDMapDispatchToProps,
  NearDateDispatchProps,
  NearDateOwnProps,
  NearDateProps,
  NearDateStateProps,
  NearDateViewProps
} from './props';
import { NearDate as View } from './view';

export const NearDate = connect<
  NearDateStateProps,
  NearDateDispatchProps,
  NearDateOwnProps,
  State
>(
  ({ operation }) => {
    const nearDateOperation =
      operation.type === 'Date' &&
      (operation.operator === 'Previous' || operation.operator === 'Next')
        ? new NearDateOperation(operation)
        : new NearDateOperation();
    const { operands } = nearDateOperation;

    return {
      operands: operands,
      operation: nearDateOperation
    };
  },
  NDMapDispatchToProps
)(
  class extends React.Component<NearDateProps> {

    public componentDidMount() {
      const { operation, setOperation } = this.props;
      setOperation(operation);
    }

    public handleOperandChange: <
      OperandsName extends keyof NearDateOperands = keyof NearDateOperands
    >(
      name: OperandsName,
      value: NearDateOperands[OperandsName]
    ) => void = (name, value) => {
      const { operation, operands, setOperation } = this.props;
      setOperation(
        new NearDateOperation(operation, {
          operands: new NearDateOperands(operands, {
            [name]: value
          })
        })
      );
    }

    public handleShiftAmountChange: NearDateViewProps['handleShiftAmountChange'] = event => {
      this.handleOperandChange('shiftAmount', Number(event.target.value));
    }

    public handleDateComponentTypeChange: NearDateViewProps['handleDateComponentTypeChange'] = value => {
      this.handleOperandChange('dateComponentType', value);
    }

    public handleIncludeCurrentDateChange = () => {
      this.handleOperandChange(
        'includeCurrentDate',
        !this.props.operands.includeCurrentDate
      );
    }

    public render() {
      return (
        <View
          handleShiftAmountChange={this.handleShiftAmountChange}
          handleDateComponentTypeChange={this.handleDateComponentTypeChange}
          handleIncludeCurrentDateChange={this.handleIncludeCurrentDateChange}
          {...this.props}
        />
      );
    }
  }
);
