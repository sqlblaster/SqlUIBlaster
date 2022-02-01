import { formatColumn } from '../common-formatters';
import { fillJoins } from './fill-joins';
import { Join } from './models/Join';
import { TreeTable } from './models/TreeTable';

export const generateJoins = (treeTable: TreeTable): string => {
  const joins: Join[] = fillJoins(treeTable);

  return drawJoins(joins);
};

export const drawJoins = (joins: Join[]): string => {
  let joinsString = '';

  joins.forEach(({ primaryTable: pt, foreignTable: ft }) => {
    const joinString = `
  LEFT JOIN "${ft.name}" "${ft.alias}"
  ON ${formatColumn(pt.keyColumn, pt.alias)} = ${formatColumn(
      ft.keyColumn,
      ft.alias
    )}`;

    joinsString += joinString;
  });

  return joinsString;
};
