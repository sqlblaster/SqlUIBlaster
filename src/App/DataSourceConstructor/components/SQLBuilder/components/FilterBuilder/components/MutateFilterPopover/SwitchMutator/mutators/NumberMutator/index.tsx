import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { NumberOperation } from './NumberOperation';
import {
  NMMapDispatchToProps,
  NumberMutatorDispatchProps,
  NumberMutatorOwnProps,
  NumberMutatorProps,
  NumberMutatorStateProps,
  NumberMutatorViewProps
} from './props';
import { getDefaultOperands } from './utils';
import { NumberMutator as View } from './view';

export const NumberMutator = connect<
  NumberMutatorStateProps,
  NumberMutatorDispatchProps,
  NumberMutatorOwnProps,
  State
>(
  ({ operation }) => {
    const numberOperation =
      operation.type === 'Number'
        ? new NumberOperation(operation)
        : new NumberOperation();

    const { operator } = numberOperation;

    return {
      operator,
      operation: numberOperation
    };
  },
  NMMapDispatchToProps
)(
  class extends React.Component<NumberMutatorProps> {
    public componentDidMount() {
      const { operation, setOperation } = this.props;
      setOperation(new NumberOperation(operation));
    }

    public handleOperatorSelect: NumberMutatorViewProps['handleSelect'] = operator => {
      const { setOperation, operation } = this.props;
      setOperation(
        new NumberOperation(
          operation,
          { operator },
          { operands: getDefaultOperands(operator) }
        )
      );
    }

    public render() {
      return <View handleSelect={this.handleOperatorSelect} {...this.props} />;
    }
  }
);
