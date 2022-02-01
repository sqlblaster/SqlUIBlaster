import { ClassesProp } from 'src/App/utils/classes-prop';
import { PickActionCreators } from 'src/store/action-creators';
import { PickStates } from 'src/store/models/State';
import { RowLimitProps } from './RowLimit';
import { RowLimitBuilderClassKeys } from './styles';

export type RowLimitBuilderStateProps = PickStates<'rowLimit'>;
export type RowLimitBuilderDispatchProps = PickActionCreators<'setRowLimit'>;

export type RowLimitBuilderProps = RowLimitBuilderStateProps &
  RowLimitBuilderDispatchProps;

export type RowLimitBuilderViewProps = RowLimitBuilderStateProps & {
  onRowLimitChange: RowLimitProps['onRowLimitChange'];
} & ClassesProp<RowLimitBuilderClassKeys>;
