import * as casual from 'casual';
import { resetRowLimit, ResetRowLimitAction, setRowLimit, SetRowLimitAction } from '../action';

describe('RowLimit action creators should return appropriate actions', () => {
  it('setRowLimit', () => {
    const rowLimit = casual.integer(1);
    const expectedAction: SetRowLimitAction = {
      type: 'SET_ROW_LIMIT',
      rowLimit
    };

    expect(setRowLimit(rowLimit)).toEqual(expectedAction);
  });

  it('resetRowLimit', () => {
    const expectedAction: ResetRowLimitAction = {
      type: 'RESET_ROW_LIMIT'
    };

    expect(resetRowLimit()).toEqual(expectedAction);
  });
});
