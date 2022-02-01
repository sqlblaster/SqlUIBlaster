import { SelectProps } from '@material-ui/core/Select';
import { ClassesProp } from 'src/App/utils/classes-prop';
import { Variable } from 'src/schema';
import { ColumnBranch } from '../../../../../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { NullableVariable } from '../../../../../FilterItem/model';
import { VariableItemProps } from '../../../VariableItem';
import { VariablesPickerProps } from '../../../VariablesPicker/props';
import { EnumsPickerClassKeys } from './styles';

export type EnumsPickerState = {
  selectIsOpen: boolean;
};

export type EnumsPickerProps = {
  selectedEnum: string;
  selectedVariable: NullableVariable;
  enums: string[];
  column: ColumnBranch;
  onEnumSelect: (enumuration: string) => void;
  onVariableSelect: (variable: Variable) => void;
};

export interface IEnumsPickerHandlers {
  handleEnumChange: SelectProps['onChange'];
  handleVariablePick: VariablesPickerProps['onVariablePicked'];
  filterVariables: VariablesPickerProps['filter'];
  handleSelectClose: SelectProps['onClose'];
  handleSelectOpen: SelectProps['onOpen'];
  handleVariableItemClick: VariableItemProps['onVariableClick'];
}

export type EnumsPickerViewProps = EnumsPickerProps &
  IEnumsPickerHandlers &
  EnumsPickerState &
  ClassesProp<EnumsPickerClassKeys>;
