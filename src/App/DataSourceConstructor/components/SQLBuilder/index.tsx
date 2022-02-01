import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { ClassesProp } from 'src/components/query-builder/App/utils/classes-prop';
import {
  PickStates,
  State
} from 'src/components/query-builder/store/models/State';
import { AggregationsBuilder } from './components/AggregationsBuilder';
import { FeaturedField } from './components/common/FieldLabel';
import { CustomColumnsBuilder } from './components/CustomColumnsBuilder';
import { FilterBuilder } from './components/FilterBuilder';
import { GroupingsBuilder } from './components/GroupingsBuilder';
import { OrdersBuilder } from './components/OrdersBuilder';
import { RowLimitBuilder } from './components/RowLimit';
import { TableSelector } from './components/TableSelector';
import {
  aggregationsBuilderLabel,
  customColumnsBuilderLabel,
  filtersBuilderLabel,
  groupingsBuilderLabel,
  ordersBuilderLabel,
  rowLimitBuilderLabel,
  tableSelectorLabel
} from './labels';
import { SQLBuilderClassKeys, sqlBuilderStyles } from './styles';

export type SQLBuilderStateProps = PickStates<'selectedTable'>;

export type SQLBuilderProps = SQLBuilderStateProps &
  ClassesProp<SQLBuilderClassKeys>;

export const SQLBuilder = connect<SQLBuilderStateProps, {}, {}, State>(
  ({ selectedTable }) => ({ selectedTable })
)(
  withStyles(sqlBuilderStyles)((({ selectedTable, classes: { root } }) => {
    return (
      <div className={root}>
        <FeaturedField label={tableSelectorLabel}>
          <TableSelector />
        </FeaturedField>
        <FeaturedField label={filtersBuilderLabel} disabled={!selectedTable}>
          <FilterBuilder />
        </FeaturedField>
        <FeaturedField
          label={aggregationsBuilderLabel}
          disabled={!selectedTable}
        >
          <AggregationsBuilder />
        </FeaturedField>
        <FeaturedField label={groupingsBuilderLabel} disabled={!selectedTable}>
          <GroupingsBuilder />
        </FeaturedField>
        <FeaturedField
          label={customColumnsBuilderLabel}
          disabled={!selectedTable}
        >
          <CustomColumnsBuilder />
        </FeaturedField>
        <FeaturedField label={ordersBuilderLabel} disabled={!selectedTable}>
          <OrdersBuilder />
        </FeaturedField>
        <FeaturedField label={rowLimitBuilderLabel} disabled={!selectedTable}>
          <RowLimitBuilder />
        </FeaturedField>
      </div>
    );
  }) as React.FC<SQLBuilderProps>)
);
