import {
  actionCreators,
  PickActionCreators
} from 'src/store/action-creators';
import { PickStates } from 'src/store/models/State';
import { PopoverManagerProps } from '../../../common/WithPopoverManagement';

export type AddOrderOwnProps = PopoverManagerProps;

export type AddOrderStateProps = PickStates<'orders'>;

export type AddOrderDispatchProps = PickActionCreators<'addOrder'>;

export const AGMapDispatchToProps: AddOrderDispatchProps = {
  addOrder: actionCreators.addOrder
};

export type AddOrderProps = AddOrderDispatchProps & AddOrderStateProps;

export type AddOrderViewProps = AddOrderOwnProps & AddOrderDispatchProps & AddOrderStateProps;
