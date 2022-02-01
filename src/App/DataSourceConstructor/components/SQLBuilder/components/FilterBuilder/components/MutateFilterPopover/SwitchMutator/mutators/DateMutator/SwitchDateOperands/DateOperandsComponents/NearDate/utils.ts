import { PluralDateComponent } from './plural-date-components';

export const getThisDateComponentNotation = (
  dateComponent: PluralDateComponent
) => {
  const singularForm = dateComponent.substr(0, dateComponent.length - 1);

  const thisDateNotation =
    singularForm === 'Day' ? 'Today' : `This ${singularForm}`;

  return thisDateNotation.toLowerCase();
};
