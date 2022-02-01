import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { PickStates } from 'src/components/query-builder/store/models/State';
import { GroupingsBuilderClassKeys } from './styles';

export type GroupingsBuilderStateProps = PickStates<'groupings'>;

export type GroupingsBuilderProps = GroupingsBuilderStateProps;
export type GroupingsBuilderViewProps = GroupingsBuilderStateProps &
  ClassesProp<GroupingsBuilderClassKeys>;
