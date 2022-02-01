import * as React from 'react';
import { NumberField } from '../NumberField';
import { TwoNumberOperandsViewProps } from './props';

export const TwoNumberOperands: React.FC<TwoNumberOperandsViewProps> = ({
  operands = [0, 0],
  handleOperandChange
}) => (
  // TODO: make proper styling of common styles like padding
  <>
    <div style={{ padding: 10 }}>
      <NumberField
        value={operands[0]}
        onValueChange={handleOperandChange(0)}
      />
      <NumberField
        value={operands[1]}
        onValueChange={handleOperandChange(1)}
      />
    </div>
  </>
);
