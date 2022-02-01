import { Typography, withStyles } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMore from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import { PopoverPaper } from '../../../../../common/PopoverPaper';
import { CheckedSelectViewProps } from './props';
import { checkedSelectStyles } from './styles';

class View<TItem extends string = string> extends React.Component<
  CheckedSelectViewProps<TItem>
> {
  private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

  constructor(props: CheckedSelectViewProps<TItem>) {
    super(props);

    this.popoverLauncher = React.createRef<HTMLDivElement>();
  }

  public render() {
    const {
      selectedItem,
      items,
      classes,
      isOpen,
      handleItemSelect,
      showItems,
      handlePopoverClose,
      hasBorder = true
    } = this.props;

    return (
      <>
        <div
          className={`${classes && classes['checked-select']} ${
            hasBorder ? classes && classes['has-border'] : ''
          }`}
          ref={this.popoverLauncher}
          onClick={showItems}
        >
          <Typography className={classes && classes['selected-item-value']}>
            {selectedItem}
          </Typography>
          {hasBorder && <ExpandMore fontSize='small' />}
        </div>
        <PopoverPaper
          isOpen={isOpen}
          onClose={handlePopoverClose}
          anchorEl={this.popoverLauncher.current}
        >
          <div className={classes && classes['select-items']}>
            {items &&
              items.map(item => {
                const selected = item === selectedItem;

                return (
                  <div
                    className={`${classes && classes.item}${
                      selected ? ` ${classes && classes['selected-item']}` : ''
                    }`}
                    key={item}
                    onClick={handleItemSelect(item)}
                  >
                    <CheckIcon
                      fontSize='small'
                      className={classes && classes['check-icon']}
                      style={{
                        ...(!selected ? { color: 'transparent' } : {})
                      }}
                    />
                    <Typography className={classes && classes['item-text']}>
                      {item}
                    </Typography>
                  </div>
                );
              })}
          </div>
        </PopoverPaper>
      </>
    );
  }
}

/**
 * This type casting was necessary to do,
 * cuz wrapping generic component to HOC
 * eliminates generic part as an outcome
 */
export const CheckedSelect: typeof View = withStyles(checkedSelectStyles)(
  View
) as any;
