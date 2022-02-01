import * as casual from 'casual';
import { testInitialAndCurrentState } from 'src/App/DataSourceConstructor/test-utils/store/reducers';
import { resetRowLimit, RowLimitActions, setRowLimit } from '../action';
import { defaultRowLimitValue, rowLimit as reducer } from '../reducer';

describe('rowLimit reducer', () => {
  testInitialAndCurrentState(reducer, defaultRowLimitValue, casual.integer(1));

  it('should set given row limit if appropriate action is given', () => {
    const rowLimit = casual.integer(1);

    expect(reducer(undefined, setRowLimit(rowLimit))).toBe(rowLimit);
  });

  it('should set row limit to undefind if undefined is given', () => {
    expect(reducer(undefined, setRowLimit(null))).toBe(null);
  });

  it('should reset the value to the default value if reset action is given', () => {
    expect(reducer(undefined, resetRowLimit())).toBe(defaultRowLimitValue);
  });
});
