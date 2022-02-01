import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { AddGrouping } from './components/AddGrouping';
import { GroupingItem } from './components/GroupingItem';
import { GroupingsBuilderViewProps } from './props';
import { groupingsBuilderStyles } from './styles';

export const GroupingsBuilder = withStyles(groupingsBuilderStyles)((({
  groupings,
  classes
}) => (
  <div className={classes.root}>
    { groupings && groupings.length ? (
      <div className={classes.groupings}>
        { groupings.map((grouping) => (
          <GroupingItem key={grouping.id} grouping={grouping} />
        )) }
      </div>
    ) : null }
    <AddGrouping />
  </div>
)) as React.FC<GroupingsBuilderViewProps>);
