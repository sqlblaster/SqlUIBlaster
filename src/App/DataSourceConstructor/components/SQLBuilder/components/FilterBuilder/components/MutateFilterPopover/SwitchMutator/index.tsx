import * as React from 'react';
import { Column } from 'src/App/DataSourceConstructor/schemas';
import { BooleanMutator } from './mutators/BooleanMutator';
import { DateMutator } from './mutators/DateMutator';
import { ForeignColumnMutator } from './mutators/ForeignColumnMutator';
import { NumberMutator } from './mutators/NumberMutator';
import { MutatorProps } from './mutators/props';
import { StringMutator } from './mutators/StringMutator';

export type SwitchMutatorProps = {
  type: Column['type'];
} & MutatorProps;

export class SwitchMutator extends React.Component<SwitchMutatorProps> {
  public render() {
    const {
      type,
      column: {
        lastColumn: { foreignTableName }
      }
    } = this.props;

    if (type === 'primary' || foreignTableName || type === 'uuid') {
      return <ForeignColumnMutator {...this.props} />;
    }

    switch (type) {
      case 'number':
        return <NumberMutator {...this.props} />;
      case 'string':
        return <StringMutator {...this.props} />;
      case 'Date':
        return <DateMutator {...this.props} />;
      case 'boolean':
        return <BooleanMutator {...this.props} />;
    }
  }
}
