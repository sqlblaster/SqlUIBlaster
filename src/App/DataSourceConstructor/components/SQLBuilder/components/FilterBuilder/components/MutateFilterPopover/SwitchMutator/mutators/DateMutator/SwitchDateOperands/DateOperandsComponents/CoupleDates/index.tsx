import { clone } from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { FixedDateOperands } from '../../DatePickerByOperandsType/components/FixedDatePicker/model';
import { SingleDateOperands } from '../SingleDate/model';
import { CoupleDateOperation } from './model';
import {
  CDMapDispatchToProps,
  CoupleDateDispatchProps,
  CoupleDateOwnProps,
  CoupleDateProps,
  CoupleDateStateProps,
  CoupleDateViewProps as ViewProps,
  ICoupleDateHandlers
} from './props';
import { CoupleDate as View } from './view';

export const CoupleDate = connect<
  CoupleDateStateProps,
  CoupleDateDispatchProps,
  CoupleDateOwnProps,
  State
>(
  ({ operation, pickedVariables }) => {
    const coupleDatesOperation =
      operation.type === 'Date' && operation.operator === 'Between'
        ? new CoupleDateOperation(operation)
        : new CoupleDateOperation();
    const { operands } = coupleDatesOperation;

    return {
      operands: !(operands instanceof Array)
        ? [new FixedDateOperands(), new FixedDateOperands()]
        : operands,
      operation: coupleDatesOperation,
      pickedVariables:
        pickedVariables && pickedVariables instanceof Array
          ? pickedVariables
          : [null, null]
    };
  },
  CDMapDispatchToProps
)(
  class extends React.Component<CoupleDateProps>
    implements ICoupleDateHandlers {
    public componentDidMount() {
      const {
        operation,
        setOperation,
        pickedVariables,
        setPickedVariables
      } = this.props;

      setOperation(operation);
      setPickedVariables(pickedVariables);
    }

    public handleOperandsChange: ViewProps['handleOperandsChange'] = index => singleDateOperands => {
      const { operation, operands, setOperation } = this.props;
      const newOperands: [SingleDateOperands, SingleDateOperands] = [
        operands[0],
        operands[1]
      ];
      newOperands[index] = singleDateOperands;
      setOperation(
        new CoupleDateOperation(operation, {
          operands: newOperands
        })
      );
    }

    public handleVariablePick: ViewProps['handleVariablePick'] = index => variable => {
      const { pickedVariables, setPickedVariables } = this.props;

      const newPickedVariables = clone(pickedVariables);
      newPickedVariables[index] = variable;
      setPickedVariables(newPickedVariables);
    }

    public render() {
      return (
        <View
          handleVariablePick={this.handleVariablePick}
          handleOperandsChange={this.handleOperandsChange}
          {...this.props}
        />
      );
    }
  }
);
