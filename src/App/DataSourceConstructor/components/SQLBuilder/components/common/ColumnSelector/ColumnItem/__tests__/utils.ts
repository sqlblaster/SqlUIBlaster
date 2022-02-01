import { ColumnBranch } from '../SelectedColumn.models';
import { calcPaddingAccordingTo, getNewTableBranch } from '../utils';

describe('getNewTableBranch', () => {
  it('should create new table branch on the basis of a column branch', () => {
    const columnName = 'ProductID';
    const columnBranch = new ColumnBranch({
      columnName
    });
    const foreignTableName = 'Products';

    const tableBranch = getNewTableBranch(
      columnBranch,
      foreignTableName,
      foreignTableName
    );

    expect(tableBranch).toMatchSnapshot();
  });
});

describe('calcPaddingAccordingTo', () => {
  it('should work properly', () => {
    expect(calcPaddingAccordingTo(1)).toBe(31);
    expect(calcPaddingAccordingTo(3)).toBe(61);
  });
});
