import { fireEvent, getAllByText, getByText } from 'react-testing-library';

export const regex = (expression: string) => new RegExp(expression, 'i');

export const regexWord = (expression: string) =>
  new RegExp(`^${expression}$`, 'i');

// getByText fixed version
export const getByText$: typeof getByText = (container, id, options) =>
  getAllByText(
    container,
    typeof id === 'function'
      ? id
      : (content, element) => {
          if (id instanceof RegExp) {
            return !!element.textContent && id.test(element.textContent);
          } else if (typeof id === 'string') {
            return !!element.textContent && element.textContent === id;
          } else {
            throw new Error('unreachable code when matcher is function');
          }
        },
    options
  ).sort((a, b) => a.innerHTML.length - b.innerHTML.length)[0];

export const getAllByText$: typeof getAllByText = (container, id, options) =>
  getAllByText(
    container,
    typeof id === 'function'
      ? id
      : (content, element) => {
          if (id instanceof RegExp) {
            return !!element.textContent && id.test(element.textContent);
          } else if (typeof id === 'string') {
            return !!element.textContent && element.textContent === id;
          } else {
            throw new Error('unreachable code when matcher is function');
          }
        },
    options
  );

export const fireChangeEvent = (element: HTMLElement, value: string) =>
  fireEvent.change(element, { target: { value } });
