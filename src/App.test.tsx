import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders congressional district setup page', () => {
  render(<App />);
  const titleElement = screen.getByText(/Congressional District Impact Analysis/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders demo mode banner', () => {
  render(<App />);
  const demoElement = screen.getByText(/DEMO MODE/i);
  expect(demoElement).toBeInTheDocument();
});
