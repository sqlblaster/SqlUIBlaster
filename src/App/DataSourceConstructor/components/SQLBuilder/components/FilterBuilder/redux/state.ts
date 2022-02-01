import { Filter } from '../components/FilterItem/model';
import { MutateFilterPopoverState } from '../components/MutateFilterPopover/redux/state';

export type FilterBuilderState = {
  filters: Filter[];
} & MutateFilterPopoverState;
