import { Table } from 'src/components/query-builder/App/DataSourceConstructor/schemas';

export class TableSelectorState {
  public selectedTable: Table | null = new Table();
}
