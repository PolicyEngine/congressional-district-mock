// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock react-plotly.js
jest.mock('react-plotly.js', () => ({
  default: () => null
}));

// Mock window.URL.createObjectURL
global.URL.createObjectURL = jest.fn();
