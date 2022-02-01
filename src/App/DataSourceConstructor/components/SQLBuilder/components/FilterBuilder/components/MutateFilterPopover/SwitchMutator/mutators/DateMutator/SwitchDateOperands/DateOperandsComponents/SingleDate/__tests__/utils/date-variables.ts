import { Variable, VariableType } from 'src/schema';

export const dateVariablesMock: Variable[] = [
  {
    id: '1',
    order: 1,
    name: 'First date variable',
    type: VariableType.Date,
    widgets: []
  },
  {
    id: '2',
    order: 2,
    name: 'Second date variable',
    type: VariableType.Date,
    widgets: []
  }
];
