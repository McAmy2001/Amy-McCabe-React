import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  it('renders', () => {
    render(<About></About>)
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<About></About>);
    expect(asFragment()).toMatchSnapshot();
  });
})