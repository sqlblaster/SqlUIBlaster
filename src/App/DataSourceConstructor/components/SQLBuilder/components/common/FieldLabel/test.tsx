import * as casual from 'casual';
import * as React from 'react';
import { getConfiguredRender } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/configured-render';
import { FeaturedField, FeaturedFieldProps } from '.';

const render = getConfiguredRender<FeaturedFieldProps>(<FeaturedField />);

describe('FeaturedField', () => {
  const text = casual.text;
  const children = <span>{text}</span>;

  it(`by default should
        render children,
        should not be disabled,
        should not render label`, () => {
    const { componentNode, queryByTestId } = render({
      children
    });

    expect(componentNode).toHaveTextContent(text);
    expect(queryByTestId('disabled-layer')).toBeNull();
    expect(queryByTestId('label')).toBeNull();
  });

  it('should not show children if children prop is not set', () => {
    const { componentNode } = render();

    expect(componentNode).toHaveTextContent('');
  });

  it('should show label if label prop is set', () => {
    const label = casual.text;

    const { componentNode } = render({
      label
    });

    expect(componentNode).toHaveTextContent(label);
  });

  it('should be disabled if disabled prop is set', () => {
    const { queryByTestId } = render({
      disabled: true
    });

    expect(queryByTestId('disabled-layer')).not.toBeNull();
  });

});
