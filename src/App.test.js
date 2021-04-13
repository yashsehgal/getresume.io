import { render, screen } from '@testing-library/react';
import App from './App';
import GetResume from './GetResume';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginActivity from './pages/LoginActivity';
import SignupActivity from './pages/SignupActivity';

/// test for App Component
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/// test for GetResume Component
test('renders learn react link', () => {
  render(<GetResume />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/// test for Header Component
test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/// test for Footer Component
test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/// test for LoginActivity Component
test('renders learn react link', () => {
  render(<LoginActivity />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/// test for SignupActivity Component
test('renders learn react link', () => {
  render(<SignupActivity />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});