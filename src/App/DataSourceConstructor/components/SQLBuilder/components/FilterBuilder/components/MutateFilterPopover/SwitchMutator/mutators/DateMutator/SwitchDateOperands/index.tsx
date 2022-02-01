import * as React from 'react';
import { DateOperator } from '../operators';
import { CoupleDate } from './DateOperandsComponents/CoupleDates';
import { EmptyDate } from './DateOperandsComponents/EmptyDates';
import { NearDate } from './DateOperandsComponents/NearDate';
import { SingleDate } from './DateOperandsComponents/SingleDate';

export interface OperatorViewProp {
  operatorView: JSX.Element;
}

export interface RenderBottomSectionProp {
  renderBottomSection: (firstComponent: JSX.Element | null) => JSX.Element;
}

export type SwitchDateOperandsProps = {
  operator: DateOperator;
} & OperatorViewProp &
  RenderBottomSectionProp;

export const SwitchDateOperands = class extends React.Component<
  SwitchDateOperandsProps
> {
  public getDateOperandsComponents() {
    const { operator, operatorView, renderBottomSection } = this.props;

    switch (operator) {
      case 'Previous':
      case 'Next':
        return (
          <NearDate
            renderBottomSection={renderBottomSection}
            operatorView={operatorView}
          />
        );
      case 'Before':
      case 'After':
      case 'On':
        return <SingleDate operatorView={operatorView} />;
      case 'Between':
        return <CoupleDate operatorView={operatorView} />;
      case 'Is empty':
      case 'Is not empty':
        return <EmptyDate operatorView={operatorView} />;
      default:
        return null;
    }
  }

  public render() {
    const { renderBottomSection, operator } = this.props;

    return (
      <>
        {this.getDateOperandsComponents()}
        {!(operator === 'Previous' || operator === 'Next') &&
          renderBottomSection(null)}
      </>
    );
  }
};
