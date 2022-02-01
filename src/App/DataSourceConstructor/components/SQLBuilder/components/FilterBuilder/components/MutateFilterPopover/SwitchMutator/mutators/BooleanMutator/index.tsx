import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/store/models/State';
import { BooleanOperation } from './BooleanOperation';
import {
  BMMapDispatchToProps,
  BooleanMutatorDispatchProps,
  BooleanMutatorOwnProps,
  BooleanMutatorProps,
  BooleanMutatorStateProps,
  BooleanMutatorViewProps
} from './props';
import { BooleanMutator as View } from './view';

export const BooleanMutator = connect<
  BooleanMutatorStateProps,
  BooleanMutatorDispatchProps,
  BooleanMutatorOwnProps,
  State
>(
  ({ operation }) => {
    const booleanOperation =
      operation.type === 'Boolean'
        ? new BooleanOperation(operation)
        : new BooleanOperation();
    const { operator } = booleanOperation;

    return {
      operator,
      operation: booleanOperation
    };
  },
  BMMapDispatchToProps
)(
  class extends React.Component<BooleanMutatorProps> {
    public componentDidMount() {
      const { operation, setOperation } = this.props;
      setOperation(new BooleanOperation(operation));
    }

    public handleOperatorSelect: BooleanMutatorViewProps['handleOperatorSelect'] = operator => {
      const { setOperation, operation } = this.props;
      setOperation(new BooleanOperation(operation, { operator }));
    }

    public render() {
      return (
        <View
          handleOperatorSelect={this.handleOperatorSelect}
          {...this.props}
        />
      );
    }
  }
);
