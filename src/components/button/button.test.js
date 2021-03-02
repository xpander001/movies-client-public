import React from 'react';
import Button from './index';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Button component', () => {
  test('should render a button with content and respond to on click events', () => {
    const onCLickCallback = jest.fn();
    render(<Button onClick={onCLickCallback}>My Button</Button>);
    fireEvent.click(screen.getByText('My Button'));
    expect(onCLickCallback).toHaveBeenCalled();
  });

  test('should not fire an exception if no handler is set', () => {
    render(<Button>My Button</Button>);
    expect(() =>
      fireEvent.click(screen.getByText('My Button')),
    ).not.toThrowError();
  });

  // Most close to implementatio I'd go
  test('should expose api to focus', () => {
    const ref = React.createRef();
    render(<Button ref={ref}>My Button</Button>);
    expect(() => ref.current.focus()).not.toThrowError();
    const btn = screen.getByText('My Button');
    expect(btn).toHaveFocus();
  });
});
