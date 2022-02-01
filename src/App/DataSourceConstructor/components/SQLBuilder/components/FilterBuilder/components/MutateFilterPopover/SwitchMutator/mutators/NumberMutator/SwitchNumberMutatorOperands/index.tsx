import { connect } from 'react-redux';
import { State } from 'src/components/query-builder/store/models/State';
import { NumberOperation } from '../NumberOperation';
import { SwitchNumberMutatorOperandsStateProps } from './props';
import { SwitchNumberMutatorOperands as View } from './view';

export const SwitchNumberMutatorOperands = connect<
  SwitchNumberMutatorOperandsStateProps,
  {},
  {},
  State
>(({ operation }) => {
  const { operator } = operation as NumberOperation;

  return { operator };
})(View);
