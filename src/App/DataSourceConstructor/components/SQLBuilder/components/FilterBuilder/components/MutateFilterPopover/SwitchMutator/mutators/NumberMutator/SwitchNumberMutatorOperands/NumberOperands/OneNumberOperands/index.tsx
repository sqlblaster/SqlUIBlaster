import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { NumberOperation } from '../../../NumberOperation';
import { NumberField, NumberFieldProps } from '../NumberField';
import {
  OneNumberOperandsDispatchProps,
  OneNumberOperandsProps,
  OneNumberOperandsStateProps,
  ONOMapDispatchToProps
} from './props';

export const OneNumberOperands = connect<
  OneNumberOperandsStateProps,
  OneNumberOperandsDispatchProps,
  {},
  State
>(
  ({ operation }) => {
    const { operands } = operation as NumberOperation;

    return { operands, operation: operation as NumberOperation };
  },
  ONOMapDispatchToProps
)(
  class extends React.Component<OneNumberOperandsProps> {
    public handleOperandChange: NumberFieldProps['onValueChange'] = ({
      floatValue = 0
    }) => {
      const { setOperation, operation } = this.props;

      setOperation(new NumberOperation(operation, { operands: floatValue }));
    }

    public render() {
      const { operands } = this.props;

      return (
        <>
          <div style={{ padding: 10 }}>
            <NumberField
              value={operands}
              onValueChange={this.handleOperandChange}
            />
          </div>
        </>
      );
    }
  }
);
