import { withStyles } from '@material-ui/core';
import * as React from 'react';
import { RemoveButton } from 'src/App/DataSourceConstructor/components/SQLBuilder/components/common/Icons/RemoveButton';
import { SequentialColumnItem } from '../../../common/SequentialColumnView';
import { MutateFilterPopover } from '../MutateFilterPopover';
import { Brackets } from './components/Brackets';
import { FilterOperandsView } from './components/FilterOperandsView';
import { LogicOperatorSwitch } from './components/LogicOperatorSwitch';
import { operatorSuffixMap } from './operator-suffix-map';
import { FilterItemViewProps } from './props';
import { filterItemStyles } from './styles';

export const FilterItem = withStyles(filterItemStyles)(
  class extends React.Component<FilterItemViewProps> {
    private readonly popoverLauncher: React.RefObject<HTMLDivElement>;

    constructor(props: FilterItemViewProps) {
      super(props);

      this.popoverLauncher = React.createRef<HTMLDivElement>();
    }

    public render() {
      const {
        filter,
        index,
        updateFilter,
        classes,
        isOpen,
        handleOpen,
        handleClose,
        handleFilterRemoval,
        handleLogicOperatorSwitch,
        handleBracketsCountChange
      } = this.props;

      const {
        id,
        column,
        operation,
        variables,
        logicOperator,
        openingBracketsCount,
        closingBracketsCount
      } = filter;

      return (
        <>
          <div className={classes.root + (isOpen ? ` ${classes.open}` : '')}>
            {index !== 0 && (
              <LogicOperatorSwitch
                logicOperator={logicOperator}
                onLogicOperatorSwitch={handleLogicOperatorSwitch}
              />
            )}
            <div className={classes.expression}>
              <Brackets
                bracketsCount={openingBracketsCount}
                onChange={handleBracketsCountChange}
                openBracket={true}
              />
              <div
                className={classes.operation}
                onClick={handleOpen}
                ref={this.popoverLauncher}
              >
                <SequentialColumnItem
                  {...column}
                  suffix={operatorSuffixMap[operation.operator]}
                />
                <FilterOperandsView
                  operation={operation}
                  variables={variables}
                />
              </div>
              <RemoveButton onClick={handleFilterRemoval(id)} />
              <Brackets
                bracketsCount={closingBracketsCount}
                onChange={handleBracketsCountChange}
                openBracket={false}
              />
            </div>
          </div>
          {isOpen && (
            <MutateFilterPopover
              isOpen={isOpen}
              anchorEl={this.popoverLauncher.current}
              action={updateFilter}
              onClose={handleClose}
              filter={filter}
            />
          )}
        </>
      );
    }
  }
);
