import { Collapse, ListItem, ListItemText } from '@material-ui/core';
import { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemTextProps } from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import * as casual from 'casual';
import * as React from 'react';
import {
  expandLessIconPlaceholder,
  expandMoreIconPlaceholder
} from 'src/__tests__/utils/mock-placeholders';
import { tablesMock } from 'src/components/query-builder/App/DataSourceConstructor/redux/tables/tables.mock';
import { Column } from 'src/components/query-builder/App/DataSourceConstructor/schemas';
import { getConfiguredRender } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/configured-render';
import {
  getCertainCalledProps,
  getFirstCalledProps
} from 'src/components/query-builder/App/DataSourceConstructor/test-utils/react-utils';
import { ColumnItem } from '../';
import { TableColumns } from '../../view';
import { ColumnItemProps } from '../props';
import { ColumnBranch } from '../SelectedColumn.models';
import { TypeIcon, TypeIconProps } from '../TypeIcon';
import { calcPaddingAccordingTo } from '../utils';

jest.mock('../../view', () => ({
  TableColumns: jest.fn(() => 'TableColumns')
}));

jest.mock('../TypeIcon', () => ({
  TypeIcon: jest.fn(() => 'TypeIcon')
}));

jest.mock('../utils', () => ({
  calcPaddingAccordingTo: jest.fn(),
  getNewTableBranch: jest.fn()
}));

const onColumnSelected = jest.fn();
const column = new Column();
const props: ColumnItemProps = {
  ...column,
  foreignTableName: column.foreignTableName,
  level: 0,
  onColumnSelected,
  columnBranch: new ColumnBranch(),
  tables: tablesMock,
  popoverPositionUpdater: undefined
};

const render = getConfiguredRender<ColumnItemProps>(
  <ColumnItem {...props} foreignTableName={column.foreignTableName} />
);

describe('ColumnItem', () => {
  const ListItemMock = ListItem as jest.Mock;
  const TypeIconMock = TypeIcon as jest.Mock;
  const ExpandMoreMock = ExpandMore as jest.Mock;
  const ExpandLessMock = ExpandLess as jest.Mock;
  const CollapseMock = Collapse as jest.Mock;
  const TableColumnsMock = TableColumns as jest.Mock;
  const ListItemTextMock = ListItemText as jest.Mock;

  beforeEach(() => {
    (calcPaddingAccordingTo as jest.Mock).mockClear();
    ListItemMock.mockClear();
    onColumnSelected.mockClear();
    TypeIconMock.mockClear();
    ExpandMoreMock.mockClear();
    ExpandLessMock.mockClear();
    CollapseMock.mockClear();
    TableColumnsMock.mockClear();
  });

  it('View should be collapsed and show Expand more icon by default', () => {
    render();

    expect(TableColumnsMock).not.toHaveBeenCalled();
  });

  it(`should expand and show Expand Less icon on Expand more click
      and do return to the previous state on Expand less click`, () => {
    const { container, queryByText } = render({
      foreignTableName: 'users'
    });

    expect(container).toHaveTextContent(expandMoreIconPlaceholder);
    expect(container).not.toHaveTextContent(expandLessIconPlaceholder);
    expect(container).not.toHaveTextContent(/TableColumns/);

    const expandButton = queryByText(expandMoreIconPlaceholder);
    expandButton && expandButton.click();

    expect(container).not.toHaveTextContent(expandMoreIconPlaceholder);
    expect(container).toHaveTextContent(expandLessIconPlaceholder);
    expect(container).toHaveTextContent(/TableColumns/);

    const collapseButton = queryByText(expandLessIconPlaceholder);
    collapseButton && collapseButton.click();

    expect(container).toHaveTextContent(expandMoreIconPlaceholder);
    expect(container).not.toHaveTextContent(expandLessIconPlaceholder);
    expect(container).not.toHaveTextContent(/TableColumns/);
  });

  it('should call onColumnSelected on click', () => {
    render();

    const { onClick } = getCertainCalledProps<ListItemProps>(
      ListItemMock,
      ['onClick'],
      getFirstCalledProps
    );

    onClick && onClick({} as any);

    expect(onColumnSelected).toHaveBeenCalled();
  });

  it('should be unclickable when it is disabled foreign column', () => {
    render({ canShowColumnBranch: () => false, foreignTableName: 'users' });

    const { onClick } = getCertainCalledProps<ListItemProps>(
      ListItemMock,
      ['onClick'],
      getFirstCalledProps
    );

    onClick && onClick({} as any);

    expect(onColumnSelected).not.toHaveBeenCalled();
  });

  it('should calculate padding properly according to the level', () => {
    render();

    expect(calcPaddingAccordingTo).toHaveBeenCalled();
  });

  it('should pass type prop properly for TypeIcon component', () => {
    render({ type: 'string' });

    const { type } = getCertainCalledProps<TypeIconProps>(TypeIconMock, [
      'type'
    ]);

    expect(type).toBe('string');
  });

  it(`should pass 'foreign-column' type prop to the TypeIcon
      component when column is foregn column`, () => {
    render({ type: 'number', foreignTableName: 'users' });

    const { type } = getCertainCalledProps<TypeIconProps>(TypeIconMock, [
      'type'
    ]);

    expect(type).toBe('foreign-column');
  });

  it('should pass name prop to ListItemText component properly', () => {
    const name = casual.title;
    render({ ...new Column({ name }) });

    const { primary } = getCertainCalledProps<ListItemTextProps>(
      ListItemTextMock,
      ['primary']
    );

    expect(primary).toBe(name);
  });
});
