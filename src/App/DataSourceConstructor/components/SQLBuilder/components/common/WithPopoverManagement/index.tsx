import * as React from 'react';
import { GetExcludedFieldsOf } from 'src/components/query-builder/App/utils/type-filters';
import { PopoverPaperProps } from '../PopoverPaper';

export interface PopoverManagerState {
  isOpen: boolean;
}

export interface PopoverManagerProps {
  isOpen: boolean;
  handleClose: PopoverPaperProps['onClose'];
  handleOpen: () => void;
}

/**
 * HOC which incapsulates management of popover
 */
export function WithPopoverManagement<TProps extends PopoverManagerProps>(
  PopoverManagementUser: React.FC<TProps> | React.ComponentClass<TProps>
) {
  return class extends React.Component<
    GetExcludedFieldsOf<PopoverManagerProps, TProps>,
    PopoverManagerState
  > {
    public state: PopoverManagerState = {
      isOpen: false
    };

    public handleClose: PopoverManagerProps['handleClose'] = (event) => {
      event && event.stopPropagation();
      this.setState({ isOpen: false });
    }

    public handleOpen: PopoverManagerProps['handleOpen'] = () => {
      this.setState({ isOpen: true });
    }

    public render() {
      const popoverProps: PopoverManagerProps = {
        isOpen: this.state.isOpen,
        handleOpen: this.handleOpen,
        handleClose: this.handleClose
      };

      /**
       * This extra casting was necessary cuz ts didn't know
       * how to properly deal with the type which consists of two parts:
       * ExpectedType & UnexpectedType, which was valuated as UnexpectedType.
       * In this case I had a typing error like
       * ExpectedType is not assignable to UnexpectedType...
       * I recast it to be ExpectedType instead of UnexpectedType.
       * This is ts issue.
       * In this case TProps consists of
       * PopoverManagementProps & WrappedComponentProps,
       * where WrappedComponentProps is UnexpectedType partition.
       */
      const PopoverManagementUserWithExpectedPropsType = (PopoverManagementUser as unknown) as React.FC<
        PopoverManagerProps
      >;

      return (
        <PopoverManagementUserWithExpectedPropsType
          {...popoverProps}
          {...this.props}
        />
      );
    }
  };
}
