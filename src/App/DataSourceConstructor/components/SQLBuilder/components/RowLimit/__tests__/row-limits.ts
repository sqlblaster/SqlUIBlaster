import { rowLimits } from '../row-limits';

describe('row limits list', () => {
  it('should match snapshot', () => {
    expect(rowLimits).toMatchSnapshot();
  });
});
