import { ClassesProp } from 'src/App/utils/classes-prop';
import { PickStates } from 'src/store/models/State';
import { GroupingsBuilderClassKeys } from './styles';

export type GroupingsBuilderStateProps = PickStates<'groupings'>;

export type GroupingsBuilderProps = GroupingsBuilderStateProps;
export type GroupingsBuilderViewProps = GroupingsBuilderStateProps &
  ClassesProp<GroupingsBuilderClassKeys>;
