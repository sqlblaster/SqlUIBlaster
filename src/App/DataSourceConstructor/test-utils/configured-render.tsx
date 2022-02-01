import * as React from 'react';
import { render, RenderOptions } from 'react-testing-library';

export type ContextProviderApplicator = (
  children: React.ReactElement
) => React.ReactElement;

export type Options = RenderOptions & {
  contextProviderApplicators?: ContextProviderApplicator[];
};

export function getConfiguredRender<TProps>(
  ui: React.ReactElement<TProps>,
  contextProviderApplicators?: ContextProviderApplicator[]
) {
  return (props?: Partial<TProps & React.Props<any>>, options?: Options) => {
    const applicators =
      (options && options.contextProviderApplicators) ||
      contextProviderApplicators ||
      [];

    const utils = render(
      applyContextProviders(applicators)(React.cloneElement(ui, props)),
      options
    );

    const rerender = (
      rerenderProps?: Partial<TProps & React.Props<any>>,
      rerenderOptionApplicators?: ContextProviderApplicator[]
    ) => {
      const rerenderApplicators = rerenderOptionApplicators || applicators;

      utils.rerender(
        applyContextProviders(rerenderApplicators)(
          React.cloneElement(ui, rerenderProps)
        )
      );
    };

    return {
      ...utils,
      rerender,
      componentNode: utils.container.firstChild as HTMLElement
    };
  };
}

export const applyContextProviders = (
  contextProviderApplicators: ContextProviderApplicator[]
) => (children: React.ReactElement): React.ReactElement => {
  let result = children;

  contextProviderApplicators.forEach((applicator) => {
    result = applicator(result);
  });

  return result;
};
