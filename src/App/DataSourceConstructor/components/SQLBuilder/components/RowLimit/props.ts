import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { PickActionCreators } from 'src/components/query-builder/store/action-creators';
import { PickStates } from 'src/components/query-builder/store/models/State';
import { RowLimitProps } from './RowLimit';
import { RowLimitBuilderClassKeys } from './styles';

export type RowLimitBuilderStateProps = PickStates<'rowLimit'>;
export type RowLimitBuilderDispatchProps = PickActionCreators<'setRowLimit'>;

export type RowLimitBuilderProps = RowLimitBuilderStateProps &
  RowLimitBuilderDispatchProps;

export type RowLimitBuilderViewProps = RowLimitBuilderStateProps & {
  onRowLimitChange: RowLimitProps['onRowLimitChange'];
} & ClassesProp<RowLimitBuilderClassKeys>;
