import { ClassesProp } from 'src/App/utils/classes-prop';
import { PickStates } from 'src/store/models/State';
import { CustomColumnsBuilderClassKeys } from './styles';

export type CustomColumnsBuilderStateProps = PickStates<
  'customColumns' | 'aggregations' | 'groupings'
>;

export type CustomColumnsBuilderProps = CustomColumnsBuilderStateProps;
export type CustomColumnsBuilderViewProps = CustomColumnsBuilderStateProps &
  ClassesProp<CustomColumnsBuilderClassKeys>;
