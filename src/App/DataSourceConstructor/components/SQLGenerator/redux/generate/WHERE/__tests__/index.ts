import { generateWhere } from '..';
import { complexBracketsFilters } from './utils/complex-brackets-filters';
import { doubleBracketsFilter } from './utils/double-brackets-filter';
import { singleBracketsFilter } from './utils/single-brackets-filter';

describe('WHERE clause', () => {
  it('should render nothing when there are no filters', () => {
    expect(generateWhere([])).toMatchSnapshot();
  });

  it('should render open bracket and closing bracket', () => {
    expect(generateWhere(singleBracketsFilter)).toMatchSnapshot();
  });

  it('should render both open and closing brackets', () => {
    expect(generateWhere(doubleBracketsFilter)).toMatchSnapshot();
  });

  it('should render complex brackets', () => {
    expect(generateWhere(complexBracketsFilters)).toMatchSnapshot();
  });
});
