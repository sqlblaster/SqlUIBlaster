export const getCalledProps = <TProps>(
  mockedComponent: jest.Mock,
  callNumber = 0
): TProps => {
  const calls = mockedComponent.mock.calls;

  if (!calls || (calls && !calls.length)) {
    throw Error('the mocked component haven\'t been rendered yet');
  }
  const lastCall = calls[callNumber];

  return lastCall[0];
};

export const getLastCalledProps = <TProps>(mockedComponent: jest.Mock): TProps =>
  getCalledProps<TProps>(mockedComponent, mockedComponent.mock.calls.length - 1);

export const getFirstCalledProps = <TProps>(mockedComponent: jest.Mock): TProps =>
  getCalledProps<TProps>(mockedComponent, 0);

export const getCertainCalledProps = <TProps>(
  mockedComponent: jest.Mock,
  somePropsKeys: (keyof TProps)[],
  propsGetter: typeof getLastCalledProps = getLastCalledProps
): TProps => {
  const props = propsGetter<TProps>(mockedComponent);

  const someProps: Partial<TProps> = {};
  somePropsKeys.forEach((prop) => {
    someProps[prop] = props[prop];
  });

  return someProps as TProps;
};
