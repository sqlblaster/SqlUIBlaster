import * as casual from 'casual';
import * as React from 'react';
import { getConfiguredRender } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/configured-render';
import { AddEntity, AddEntityProps } from '.';

const render = getConfiguredRender<AddEntityProps>(
  <AddEntity onClick={() => null} reference={null} />
);

describe('AddEntity', () => {
  const children = casual.text;

  it('should call onClick event on click on it', () => {
    const onClick = jest.fn();

    const { componentNode } = render({
      onClick
    });

    componentNode.click();

    expect(onClick).toHaveBeenCalled();
  });

  it('should show text by default', () => {
    const { componentNode } = render({
      children
    });

    expect(componentNode).toHaveTextContent(children);
  });

  it('should hide text if showText prop is set to false', () => {
    const { componentNode } = render({
      children,
      showText: false
    });

    expect(componentNode).not.toHaveTextContent(children);
  });

});
