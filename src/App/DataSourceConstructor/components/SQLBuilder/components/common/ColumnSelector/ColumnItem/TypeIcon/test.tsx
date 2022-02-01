import * as React from 'react';
import { getConfiguredRender } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/configured-render';
import { TypeIcon, TypeIconProps } from '.';

const render = getConfiguredRender<TypeIconProps>(<TypeIcon type='number'/>);

describe('TypeIcon', () => {

  it('should render sharp symbol for number type', () => {
    const { componentNode } = render({ type: 'number' });

    expect(componentNode).toHaveTextContent('#');
  });

  it('should render Aa string for string type', () => {
    const { componentNode } = render({ type: 'string' });

    expect(componentNode).toHaveTextContent('Aa');
  });

  it('should render calendar icon for Date type', () => {
    const { container } = render({ type: 'Date' });

    expect(container).toHaveTextContent(/calendar/i);
  });

  it('should render check cirle icon for boolean type', () => {
    const { container } = render({ type: 'boolean' });

    expect(container).toHaveTextContent(/check/i);
  });

  it('should render share icon for foreign column type', () => {
    const { container } = render({ type: 'foreign-column' });

    expect(container).toHaveTextContent(/share/i);
  });
});
