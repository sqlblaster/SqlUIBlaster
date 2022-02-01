import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { AddFilter } from './components/AddFilter';
import { FilterItem } from './components/FilterItem';
import { FilterBuilderViewProps } from './props';
import { filterBuilderStyles } from './styles';

export const FilterBuilder = withStyles(filterBuilderStyles)((({
  filters,
  classes
}) => (
  <div className={classes.root}>
    { filters && filters.length ? (
      <div className={classes.filters}>
        { filters.map((filter, index) => (
          <FilterItem key={filter.id} index={index} filter={filter} />
        )) }
      </div>
    ) : null }
    <AddFilter />
  </div>
)) as React.FC<FilterBuilderViewProps>);
