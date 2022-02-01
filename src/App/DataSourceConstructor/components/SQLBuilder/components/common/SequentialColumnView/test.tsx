import * as casual from 'casual';
import * as React from 'react';
import { getConfiguredRender } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/configured-render';
import { SequentialColumnView } from '.';
import { ColumnBranch } from '../ColumnSelector/ColumnItem/SelectedColumn.models';
import {
  SequentialColumnViewConfigProps,
  SequentialColumnViewProps
} from './props';

const render = getConfiguredRender<SequentialColumnViewProps>(
  <SequentialColumnView {...new ColumnBranch()} />
);

describe('SequentialColumnView', () => {
  const columnName = casual.title;
  const prefix = 'prefix';
  const suffix = 'suffix';

  it(`by default
        should not have any prefix,
        should not have any suffix,
        should have prefix and space after prefix if there is a prefix,
        should have suffix and space before suffix if there is a suffix`, () => {
    const { componentNode, rerender } = render({
      columnName
    });

    expect(componentNode).toHaveTextContent(
      new RegExp(`^${columnName}`, 'gmi')
    );

    rerender({ prefix, columnName, suffix });
    expect(componentNode).toHaveTextContent(
      new RegExp(`^${prefix}${columnName}${suffix}$`, 'gmi')
    );
  });

  it('should remove space after prefix if noSpaceAfterPrefix prop is set', () => {
    const { componentNode } = render({
      columnName,
      prefix,
      noSpaceAfterPrefix: true
    });

    expect(componentNode).toHaveTextContent(
      new RegExp(`^${prefix}${columnName}`, 'gmi')
    );
  });

  it('should remove space before suffix if noSpaceBeforeSuffix prop is set', () => {
    const { componentNode } = render({
      columnName,
      suffix,
      noSpaceBeforeSuffix: true
    });

    expect(componentNode).toHaveTextContent(
      new RegExp(`^${columnName}${suffix}`, 'gmi')
    );
  });

  it(`should render suffix after foreign column rather than immediately after current columnName
    if there is foreign column`, () => {
    const foreignColumnName = casual.title;

    const { componentNode } = render({
      columnName,
      foreignColumn: new ColumnBranch({
        columnName: foreignColumnName
      }),
      suffix
    });

    expect(componentNode).toHaveTextContent(
      new RegExp(
        `^(${columnName})\\w+(${foreignColumnName})(${suffix})$`,
        'gmi'
      )
    );
  });

  it('should render foreign column and share icon before it if there is foreign column', () => {
    const foreignColumnName = casual.title;

    const { componentNode } = render({
      columnName,
      foreignColumn: new ColumnBranch({
        columnName: foreignColumnName
      })
    });

    expect(componentNode).toHaveTextContent(
      new RegExp(`^(${columnName})ShareIcon(${foreignColumnName})$`, 'gmi')
    );
  });

  it('should render foreign columns sequence correctly if there is sequence of foreign columns', () => {
    const foreignColumnName1 = casual.title;
    const foreignColumnName2 = casual.title;
    const foreignColumnName3 = casual.title;

    const { componentNode } = render({
      columnName,
      foreignColumn: new ColumnBranch({
        columnName: foreignColumnName1,
        foreignColumn: new ColumnBranch({
          columnName: foreignColumnName2,
          foreignColumn: new ColumnBranch({
            columnName: foreignColumnName3
          })
        })
      })
    });

    expect(componentNode).toHaveTextContent(
      new RegExp(
        `^(${columnName})ShareIcon(${foreignColumnName1})ShareIcon` +
          `(${foreignColumnName2})ShareIcon(${foreignColumnName3})$`,
        'gmi'
      )
    );
  });
});
