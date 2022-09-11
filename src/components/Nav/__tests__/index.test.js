import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav></Nav>)
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav></Nav>);
    expect(asFragment()).toMatchSnapshot();
  });
})