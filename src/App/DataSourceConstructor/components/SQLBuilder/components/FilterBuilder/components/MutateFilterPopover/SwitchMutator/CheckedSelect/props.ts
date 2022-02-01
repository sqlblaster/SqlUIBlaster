import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import { CheckedSelectClassKeys } from './styles';

export interface CheckedSelectState {
  isOpen: boolean;
}

export interface CheckedSelectProps<TItem extends string = string> {
  selectedItem: TItem;
  items: TItem[];
  onSelect: (value: TItem) => void;
  hasBorder?: boolean;
}

export type CheckedSelectViewProps<
  TItem extends string = string
> = CheckedSelectProps<TItem> &
  CheckedSelectState & {
    classes?: Record<CheckedSelectClassKeys, string>;
    handleItemSelect: (item: TItem) => () => void;
    handlePopoverClose: () => void;
    showItems: () => void;
  };
