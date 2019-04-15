import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';

import Button from './Button';

afterEach(cleanup);

test('should render primary button', () => {
  const { container, getByText, getByTestId } = render(
    <Button primary small disabled>
      The Button
    </Button>
  );
  expect(container.firstChild).toHaveAttribute('disabled');
  expect(container.firstChild).toHaveClass('primaryMedium small');
  expect(container.firstChild).toHaveStyle(`
    backgroundColor: '#008380',
    color: '#ffffff',
  `);
});

test('should render primaryAlt button', () => {
  const { container } = render(
    <Button primaryAlt small>
      The Button
    </Button>
  );
  expect(container.firstChild).toHaveClass('primaryAltMedium small');
  expect(container.firstChild).toHaveStyle(`
    backgroundColor: '#FD5C63',
    color: '#ffffff',
  `);
});

test('should render primaryAlt properly when hovered', () => {
  const { container } = render(
    <Button primaryAlt small>
      The Button
    </Button>
  );
  fireEvent.mouseEnter(container.firstChild);
  expect(container.firstChild).toHaveStyle(`
    backgroundColor: '#D43242',
    color: '#ffffff',
  `);
});
