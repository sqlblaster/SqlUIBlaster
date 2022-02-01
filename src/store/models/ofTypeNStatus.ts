import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AsyncAction, Status } from './action-types';

/**
 * pipable rxjs operator for filtering actions of type ActionAsync
 */
export function ofTypeNStatus<A extends AsyncAction>(
  type: A['type'],
  status: Status
) {
  return pipe(
    filter((action: A) => action.type === type && action.status === status)
  );
}
