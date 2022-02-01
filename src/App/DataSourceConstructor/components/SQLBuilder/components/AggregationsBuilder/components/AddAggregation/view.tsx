import * as React from 'react';
import { AddEntity } from '../../../common/AddEntity';
import { MutateAggregationPopover } from '../MutateAggregationPopover';
import { AddAggregationViewProps } from './props';

export const addAggregationText = 'Add an aggregation';

// FIXME: make padding clickable too
export class AddAggregation extends React.Component<AddAggregationViewProps, any> {
  private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

  constructor(props: AddAggregationViewProps) {
    super(props);

    this.popoverLauncher = React.createRef<HTMLDivElement>();
  }

  public render() {
    const {
      aggregations,
      addAggregation,
      isOpen,
      handleClose,
      handleOpen
    } = this.props;

    return (
      <>
        <AddEntity
          showText={!(aggregations && aggregations.length)}
          onClick={handleOpen}
          reference={this.popoverLauncher}
        >
          {addAggregationText}
        </AddEntity>
        { isOpen && (// TODO: resolve this problem another way
          <MutateAggregationPopover
            action={addAggregation}
            isOpen={isOpen}
            anchorEl={this.popoverLauncher.current}
            onClose={handleClose}
          />
        ) }
      </>
    );
  }
}
