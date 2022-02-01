import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { GraphNode } from 'src/schema';
import { getEnums } from '../utils';
import { ForeignColumnOperation } from './ForeignColumnOperation';
import {
  FCMMapDispatchToProps,
  ForeignColumnMutatorDispatchProps,
  ForeignColumnMutatorOwnProps,
  ForeignColumnMutatorProps,
  ForeignColumnMutatorStateProps,
  ForeignColumnMutatorViewProps as ViewProps,
  IForeignColumnMutatorHandlers
} from './props';
import { getModels } from './utils';
import { ForeignColumnMutator as View } from './view';

export const ForeignColumnMutator = connect<
  ForeignColumnMutatorStateProps,
  ForeignColumnMutatorDispatchProps,
  ForeignColumnMutatorOwnProps,
  State
>(
  ({ operation, canSaveFilter, pickedVariables, tables }, { column }) => {
    const foreignColumnOpertion =
      operation.type === 'Foreign'
        ? new ForeignColumnOperation(operation)
        : new ForeignColumnOperation();

    return {
      record: foreignColumnOpertion.operands,
      canSaveFilter,
      pickedVariables,
      enums: getEnums(tables, column)
    };
  },
  FCMMapDispatchToProps
)(
  class extends React.Component<ForeignColumnMutatorProps>
    implements IForeignColumnMutatorHandlers {
    public componentDidMount() {
      const { record, setOperation, changeCanSaveFilterState } = this.props;
      setOperation(new ForeignColumnOperation({ operands: record }));
      changeCanSaveFilterState(!!record);
    }

    public componentWillUnmount() {
      this.props.changeCanSaveFilterState(true);
    }

    public handleOperandChange: ViewProps['handleOperandChange'] = record => {
      const {
        setOperation,
        setPickedVariables,
        changeCanSaveFilterState
      } = this.props;

      changeCanSaveFilterState(!!record);
      setOperation(
        new ForeignColumnOperation({ operands: record as GraphNode })
      );
      setPickedVariables(null);
    }

    public handleVariablePick: ViewProps['handleVariablePick'] = variable => {
      const { setPickedVariables, changeCanSaveFilterState } = this.props;
      setPickedVariables(variable);
      changeCanSaveFilterState(true);
    }

    public filter: ViewProps['filter'] = variable => {
      const models = getModels(this.props);

      return !models || models.some(model => model === variable.model);
    }

    public render() {
      return (
        <View
          handleOperandChange={this.handleOperandChange}
          handleVariablePick={this.handleVariablePick}
          filter={this.filter}
          {...this.props}
        />
      );
    }
  }
);
