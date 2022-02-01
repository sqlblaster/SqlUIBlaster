import { combineEpics } from 'redux-observable';
import { MutateFilterPopoverEpics } from '../components/MutateFilterPopover/redux/epics';

export const FilterBuilderEpics = combineEpics(
  MutateFilterPopoverEpics
);
