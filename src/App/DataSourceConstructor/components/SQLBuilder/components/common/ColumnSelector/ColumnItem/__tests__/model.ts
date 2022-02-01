import * as casual from 'casual';
import { clone } from 'ramda';
import { ColumnBranch } from '../SelectedColumn.models';

const columnBranchWithForeignColumns = new ColumnBranch({
  tableName: casual.title,
  columnName: casual.title,
  foreignColumn: new ColumnBranch({
    tableName: casual.title,
    columnName: casual.title
  })
});

describe('ColumnBranch', () => {
  it('hasZeroColumnLevel should be true when the columnBranch is root one', () => {
    expect(new ColumnBranch().hasZeroColumnLevel()).toBeTruthy();
  });

  it('areFieldsMatch should conclude to true when fields match', () => {
    const columnName = casual.title;
    const columnBranch = new ColumnBranch({ columnName });
    const comparingColumnBranch = new ColumnBranch({ columnName });

    expect(
      columnBranch.areFieldsMatch('columnName', comparingColumnBranch)
    ).toBeTruthy();
  });

  it('should have properly working isEqual method', () => {
    const originalColumnBranch = columnBranchWithForeignColumns;

    const cloneColumnBranch = clone(originalColumnBranch);

    expect(originalColumnBranch.equals(cloneColumnBranch)).toBeTruthy();
  });

  it(`should properly normlize its lastColumn field
    using its normalizeLastColumn method`, () => {
    const originalColumnBranch = clone(columnBranchWithForeignColumns);

    const expectedColumnBranch = clone(columnBranchWithForeignColumns);
    expectedColumnBranch.lastColumn = expectedColumnBranch.foreignColumn as ColumnBranch;

    expect(originalColumnBranch.normalizeLastColumn()).toEqual(
      expectedColumnBranch
    );
  });
});
