import { Grouping } from '../../components/GroupingItem/model';
import {
  addGrouping,
  clearGroupings,
  removeGrouping,
  updateGrouping
} from '../action';

describe('GroupingsBuilder action creators should return appropriate actions', () => {
  it('addGrouping', () => {
    expect(
      addGrouping(new Grouping({ id: '566af397-c08b-42b7-b10b-a4548e0a17ba' }))
    ).toMatchSnapshot();
  });

  it('updateGrouping', () => {
    expect(
      updateGrouping(
        new Grouping({ id: 'c3c15257-27e4-49bb-8803-4c9d87e7cd77' })
      )
    ).toMatchSnapshot();
  });

  it('removeGrouping', () => {
    const id = '1';
    expect(removeGrouping(id)).toMatchSnapshot();
  });

  it('clearGroupings', () => {
    expect(clearGroupings()).toMatchSnapshot();
  });
});
