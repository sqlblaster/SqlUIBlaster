import { Variable, VariableType } from 'src/schema';

export const enumVariableMock: Variable[] = [
  {
    id: '1',
    name: 'Product details',
    order: 1,
    type: VariableType.Enum,
    model: 'Products',
    field: 'Details',
    widgets: []
  },
  {
    id: '2',
    name: 'Order details',
    order: 2,
    type: VariableType.Enum,
    model: 'Orders',
    field: 'Details',
    widgets: []
  },
  {
    id: '3',
    name: 'Sample Date',
    order: 3,
    type: VariableType.Date,
    widgets: []
  }
];
