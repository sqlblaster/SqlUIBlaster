import * as casual from 'casual';
import * as React from 'react';
import { render } from 'react-testing-library';
import { getCertainCalledProps } from 'src/components/query-builder/App/DataSourceConstructor/test-utils/react-utils';
import { PopoverManagerProps, WithPopoverManagement } from '.';

describe('WithPopoverManagement', () => {
  it('should delegate all props to PopoverManagerUser wrapped component', () => {
    const PopoverManagerUserMock = jest.fn(() => null);

    const UserWithPopoverManagement = WithPopoverManagement(
      PopoverManagerUserMock
    );

    const someProps = {
      someHandler: jest.fn(),
      someProp: casual.title
    };

    render(<UserWithPopoverManagement {...someProps} />);

    const calledProps = getCertainCalledProps<typeof someProps>(
      PopoverManagerUserMock,
      ['someHandler', 'someProp']
    );
    expect(someProps).toEqual(calledProps);
  });

  it(`should recall PopoverManagerUser with prop isOpen is set to true
    when handleOpen method prop is called,
    and recall with prop isOpen is set to false,
    when handleClose method prop is called`, () => {
    const PopoverManagerUserMock = jest.fn(() => null);

    const UserWithPopoverManagement = WithPopoverManagement(
      PopoverManagerUserMock
    );

    render(<UserWithPopoverManagement />);

    const { handleOpen, handleClose } = getCertainCalledProps<
      PopoverManagerProps
    >(PopoverManagerUserMock, ['handleClose', 'handleOpen']);

    expect(PopoverManagerUserMock).toHaveBeenLastCalledWith(
      { handleOpen, handleClose, isOpen: false },
      {}
    );

    handleOpen();

    expect(PopoverManagerUserMock).toHaveBeenLastCalledWith(
      { handleOpen, handleClose, isOpen: true },
      {}
    );

    handleClose();

    expect(PopoverManagerUserMock).toHaveBeenLastCalledWith(
      { handleOpen, handleClose, isOpen: false },
      {}
    );
  });
});
