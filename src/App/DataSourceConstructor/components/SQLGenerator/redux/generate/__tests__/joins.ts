import { tablesMock } from 'src/App/DataSourceConstructor/redux/tables/tables.mock';
import { generateSQLQuery, SQLGeneratorStateProps } from '..';
import { zeroLvlGroupings } from './utils.joins/0-lvl-groupings';
import { oneLvlGroupings } from './utils.joins/1-lvl-groupings';
import { twoLvlGroupings } from './utils.joins/2-lvl-groupings';
import { threeLvlGroupings } from './utils.joins/3-lvl-groupings';
import {
  selfRef1LvlGroupings,
  selfRef2LvlGroupings,
  selfRef3LvlGroupings
} from './utils.joins/self-referencing-groupings';
import { similarForeignGroupings } from './utils.joins/similar-foreign-groupings';

const state: SQLGeneratorStateProps = {
  selectedTable: tablesMock[0],
  customColumns: [],
  filters: [],
  aggregations: [],
  groupings: [],
  orders: [],
  rowLimit: null,
  tables: tablesMock
};

describe('JOINs', () => {
  it('should be rendered nothing when there is only selected table', () => {
    expect(generateSQLQuery(state)).toMatchSnapshot();
  });

  it('should be rendered nothing when there are 0 lvl column', () => {
    expect(
      generateSQLQuery({ ...state, groupings: [zeroLvlGroupings[0]] })
    ).toMatchSnapshot();
  });

  it('should be rendered nothing when there are 0 lvl columns', () => {
    expect(
      generateSQLQuery({ ...state, groupings: zeroLvlGroupings })
    ).toMatchSnapshot();
  });

  it(`should be rendered properly when there are
      two 1 lvl columns on the same foreign table`, () => {
    expect(
      generateSQLQuery({ ...state, groupings: similarForeignGroupings })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 1 lvl column', () => {
    expect(
      generateSQLQuery({ ...state, groupings: [oneLvlGroupings[0]] })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 1 lvl columns', () => {
    expect(
      generateSQLQuery({ ...state, groupings: oneLvlGroupings })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 2 lvl column', () => {
    expect(
      generateSQLQuery({ ...state, groupings: [twoLvlGroupings[0]] })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 2 lvl columns', () => {
    expect(
      generateSQLQuery({ ...state, groupings: twoLvlGroupings })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 1, 2 lvl columns', () => {
    expect(
      generateSQLQuery({
        ...state,
        groupings: [oneLvlGroupings[0], twoLvlGroupings[0]]
      })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 3 lvl column', () => {
    expect(
      generateSQLQuery({ ...state, groupings: [threeLvlGroupings[0]] })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 3 lvl columns', () => {
    expect(
      generateSQLQuery({ ...state, groupings: threeLvlGroupings })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 2, 3 lvl columns', () => {
    expect(
      generateSQLQuery({
        ...state,
        groupings: [twoLvlGroupings[0], threeLvlGroupings[0]]
      })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 1, 2, 3 lvl columns', () => {
    expect(
      generateSQLQuery({
        ...state,
        groupings: [
          oneLvlGroupings[0],
          twoLvlGroupings[0],
          threeLvlGroupings[0]
        ]
      })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 1 lvl self-referencing column', () => {
    expect(
      generateSQLQuery({ ...state, groupings: [selfRef1LvlGroupings[0]] })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 1 lvl self-referencing columns', () => {
    expect(
      generateSQLQuery({ ...state, groupings: selfRef1LvlGroupings })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 2 lvl self-referencing column', () => {
    expect(
      generateSQLQuery({ ...state, groupings: [selfRef2LvlGroupings[0]] })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 2 lvl self-referencing columns', () => {
    expect(
      generateSQLQuery({ ...state, groupings: selfRef2LvlGroupings })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 3 lvl self-referencing column', () => {
    expect(
      generateSQLQuery({ ...state, groupings: [selfRef3LvlGroupings[0]] })
    ).toMatchSnapshot();
  });

  it('should be rendered properly when there are 3 lvl self-referencing columns', () => {
    expect(
      generateSQLQuery({ ...state, groupings: selfRef3LvlGroupings })
    ).toMatchSnapshot();
  });

  it(`should be rendered properly when there are 1, 2, 3 lvl
      and 3 lvl self-referencing column`, () => {
    expect(
      generateSQLQuery({
        ...state,
        groupings: [
          selfRef1LvlGroupings[0],
          selfRef2LvlGroupings[0],
          selfRef3LvlGroupings[0]
        ]
      })
    ).toMatchSnapshot();
  });
});
