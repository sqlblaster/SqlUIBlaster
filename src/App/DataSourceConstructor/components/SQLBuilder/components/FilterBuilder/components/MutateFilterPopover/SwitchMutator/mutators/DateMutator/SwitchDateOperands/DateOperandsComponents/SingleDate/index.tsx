import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { FixedDateOperands } from '../../DatePickerByOperandsType/components/FixedDatePicker/model';
import { SingleDateOperation } from './model';
import {
  ISingleDateHandlers,
  SDMapDispatchToProps,
  SingleDateDispatchProps,
  SingleDateOwnProps,
  SingleDateProps,
  SingleDateStateProps,
  SingleDateViewProps as ViewProps
} from './props';
import { SingleDate as View } from './view';

export const SingleDate = connect<
  SingleDateStateProps,
  SingleDateDispatchProps,
  SingleDateOwnProps,
  State
>(
  ({ operation, pickedVariables }) => {
    const singleDateOperation =
      operation.type === 'Date' &&
      (operation.operator === 'Before' ||
        operation.operator === 'After' ||
        operation.operator === 'On')
        ? new SingleDateOperation(operation)
        : new SingleDateOperation();
    const { operands } = singleDateOperation;

    return {
      operands,
      operation: singleDateOperation,
      pickedVariables: !(pickedVariables instanceof Array)
        ? pickedVariables
        : null
    };
  },
  SDMapDispatchToProps
)(
  class extends React.Component<SingleDateProps>
    implements ISingleDateHandlers {
    public static defaultProps: Partial<SingleDateProps> = {
      operands: new FixedDateOperands()
    };

    public componentDidMount() {
      const { operation, setOperation } = this.props;
      setOperation(operation);
    }

    public handleOperandsChange: ViewProps['handleOperandsChange'] = operands => {
      const { operation, setOperation, setPickedVariables } = this.props;

      setOperation(
        new SingleDateOperation(operation, {
          operands
        })
      );
      operands.dateType !== 'Variable date' && setPickedVariables(null);
    }

    public handleVariablePicked: ViewProps['handleVariablePicked'] = variable => {
      this.props.setPickedVariables(variable);
    }

    public render() {
      return (
        <View
          {...this.props}
          handleOperandsChange={this.handleOperandsChange}
          handleVariablePicked={this.handleVariablePicked}
        />
      );
    }
  }
);
