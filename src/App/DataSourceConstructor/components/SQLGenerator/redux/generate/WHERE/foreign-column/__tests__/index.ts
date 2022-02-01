import { ForeignColumnOperation } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/FilterBuilder/components/MutateFilterPopover/SwitchMutator/mutators/ForeignColumnMutator/ForeignColumnOperation';
import { Variable, VariableType } from 'src/schema';
import { generateForeignColumnOperation } from '..';
import {
  ColumnBranchAliased,
  FilterAliased
} from '../../../JOIN/models/ColumnAliased';

describe('foreign column filter generator', () => {
  it('should render properly when there is picked record', () => {
    expect(
      generateForeignColumnOperation(
        new FilterAliased({
          column: new ColumnBranchAliased({
            columnName: 'account_id',
            tableName: 'balance',
            type: 'string',
            foreignTableName: 'Account',
            tableAlias: 'balance1'
          }),
          operation: new ForeignColumnOperation({
            operands: {
              id: '59da5627-cb22-4b4e-884c-ad8cf94ebd4e',
              type: 'account',
              glyph: null,
              title: 'Feeney',
              rawId: '',
              through: true
            }
          }),
          id: 'be2651d6-82bd-41ff-b272-bb4288cf3ce3'
        })
      )
    ).toMatchSnapshot();
  });

  it('should render properly when there is picked variable', () => {
    const variables: Variable = {
      id: '584EVVN5j8j6UrP6FXW3zm',
      name: 'Country',
      type: VariableType.Record,
      order: 2,
      model: 'Country',
      widgets: []
    };

    expect(
      generateForeignColumnOperation(
        new FilterAliased({
          column: new ColumnBranchAliased({
            columnName: 'country_id',
            tableName: 'employee',
            type: 'string',
            foreignTableName: 'Country',
            tableAlias: 'employee1'
          }),
          operation: new ForeignColumnOperation({
            operands: {
              id: 'a42791bc-9149-4880-8b26-61aa51278354',
              type: 'country',
              glyph: null,
              title: 'Kazakhstan',
              rawId: '',
              through: true
            }
          }),
          variables,
          id: 'd541c88f-a968-4254-a04d-79b67bfef530'
        })
      )
    ).toMatchSnapshot();
  });
});
