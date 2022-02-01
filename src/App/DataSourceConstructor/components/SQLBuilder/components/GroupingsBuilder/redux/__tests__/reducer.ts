import { testInitialAndCurrentState } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/store/reducers';
import { ColumnBranch } from '../../../common/ColumnSelector/ColumnItem/SelectedColumn.models';
import { Grouping } from '../../components/GroupingItem/model';
import {
  addGrouping,
  clearGroupings,
  removeGrouping,
  updateGrouping
} from '../action';
import { groupings as reducer } from '../reducer';

describe('groupings reducer', () => {
  testInitialAndCurrentState(reducer, [], [new Grouping(), new Grouping()]);

  it('should add new grouping on ADD_GROUPING action', () => {
    expect(
      reducer(
        [],
        addGrouping(
          new Grouping({ id: '1' })
        )
      )
    ).toMatchSnapshot();

    expect(
      reducer(
        [
          new Grouping({ id: '1' }),
          new Grouping({ id: '2' })
        ],
        addGrouping(
          new Grouping({ id: '3' })
        )
      )
    ).toMatchSnapshot();
  });

  it('should update grouping on UPDATE_GROUPING action', () => {
    expect(
      reducer([], updateGrouping(new Grouping({ id: '4' })))
    ).toMatchSnapshot();

    expect(
      reducer(
        [new Grouping({ id: '3' }), new Grouping({ id: '4' })],
        updateGrouping(
          new Grouping({
            id: '4',
            column: new ColumnBranch({ columnName: 'ID' })
          })
        )
      )
    ).toMatchSnapshot();

    expect(
      reducer(
        [new Grouping({ id: '3' }), new Grouping({ id: '5' })],
        updateGrouping(
          new Grouping({
            id: '4',
            column: new ColumnBranch({ columnName: 'ID' })
          })
        )
      )
    ).toMatchSnapshot();
  });

  it('should remove grouping by id on REMOVE_GROUPING action', () => {
    expect(reducer([], removeGrouping('2'))).toMatchSnapshot();

    expect(
      reducer(
        [new Grouping({ id: '1' }), new Grouping({ id: '2' })],
        removeGrouping('4')
      )
    ).toMatchSnapshot();

    expect(
      reducer(
        [new Grouping({ id: '4' }), new Grouping({ id: '2' })],
        removeGrouping('4')
      )
    ).toMatchSnapshot();
  });

  it('should clear all groupings on CLEAR_GROUPINGS action', () => {
    expect(reducer([], clearGroupings())).toMatchSnapshot();

    expect(
      reducer([new Grouping(), new Grouping()], clearGroupings())
    ).toMatchSnapshot();
  });
});
