import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Operation } from './Operation';
import { BooleanOperation } from './SwitchMutator/mutators/BooleanMutator/BooleanOperation';
import { NearDateOperation } from './SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/NearDate/model';
import { ForeignColumnOperation } from './SwitchMutator/mutators/ForeignColumnMutator/ForeignColumnOperation';
import { NumberOperation } from './SwitchMutator/mutators/NumberMutator/NumberOperation';
import { StringOperation } from './SwitchMutator/mutators/StringMutator/StringOperation';

export const getDefaultOperation = (columnBranch: ColumnBranch): Operation => {
  if (columnBranch.foreignTableName) {
    return new ForeignColumnOperation();
  }

  switch (columnBranch.type) {
    case 'number':
      return new NumberOperation();
    case 'string':
      return new StringOperation();
    case 'boolean':
      return new BooleanOperation();
    case 'Date':
      return new NearDateOperation();
    default:
      return new StringOperation();
  }
};
