import { combineEpics } from 'redux-observable';
import { coupleDatesVariablesValidityWatcherEpic } from '../SwitchMutator/mutators/DateMutator/SwitchDateOperands/DateOperandsComponents/CoupleDates/epic';

export const MutateFilterPopoverEpics = combineEpics(
  coupleDatesVariablesValidityWatcherEpic
);
