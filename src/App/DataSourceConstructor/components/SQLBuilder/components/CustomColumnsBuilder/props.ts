import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { PickStates } from 'src/components/query-builder/store/models/State';
import { CustomColumnsBuilderClassKeys } from './styles';

export type CustomColumnsBuilderStateProps = PickStates<
  'customColumns' | 'aggregations' | 'groupings'
>;

export type CustomColumnsBuilderProps = CustomColumnsBuilderStateProps;
export type CustomColumnsBuilderViewProps = CustomColumnsBuilderStateProps &
  ClassesProp<CustomColumnsBuilderClassKeys>;
