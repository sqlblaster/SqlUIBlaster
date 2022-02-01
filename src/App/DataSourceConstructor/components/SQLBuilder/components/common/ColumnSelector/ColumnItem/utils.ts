import { clone } from 'ramda';
import { ColumnBranch } from './SelectedColumn.models';

export const getNewTableBranch = (
  parentColumnBranch: ColumnBranch,
  foreignTableName: ColumnBranch['foreignTableName'],
  foreignModelName: ColumnBranch['foreignModelName']
) => {
  const newTableBranch = clone(parentColumnBranch);

  newTableBranch.lastColumn.foreignColumn = new ColumnBranch({
    tableName: foreignTableName,
    modelName: foreignModelName
  });

  newTableBranch.lastColumn = newTableBranch.lastColumn.foreignColumn;

  return newTableBranch;
};

export const listItemOwnPaddingLeft: number = 16;
export const paddingShiftAmountByLevel: number = 15;
export const calcPaddingAccordingTo = (level: number) => {
  return listItemOwnPaddingLeft + level * paddingShiftAmountByLevel;
};
