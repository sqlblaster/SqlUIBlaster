import { Reducer } from 'redux';
import { Action } from 'src/store/models/action-types';

const unknownAction: Action = { type: 'UNKNOWN_ACTION' };

export function testInitialAndCurrentState<S, A extends Action>(
  reducer: Reducer<S, A>,
  initialState: S,
  previousState: S
) {
  it('should return appropriate initial state if empty state and unknown action is given', async () => {
    expect(reducer(undefined, unknownAction as A)).toEqual(
      initialState
    );
  });

  it('should return previous state if unknown action is given', async () => {
    expect(reducer(previousState, unknownAction as A)).toBe(
      previousState
    );
  });
}
