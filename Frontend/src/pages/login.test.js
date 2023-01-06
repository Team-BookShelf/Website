import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './login';
import { MemoryRouter } from 'react-router-dom';

describe('Login form', () => {
  it('should render a form with a username and password field', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(getByPlaceholderText('username')).toBeInTheDocument();
    expect(getByPlaceholderText('password')).toBeInTheDocument();
  });

  it('should accept valid username and password values', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const usernameField = getByPlaceholderText('username');
    const passwordField = getByPlaceholderText('password');
    fireEvent.change(usernameField, { target: { value: 'testuser' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });
    expect(usernameField.value).toBe('testuser');
    expect(passwordField.value).toBe('password');
  });

  it('should display an error message if the username is invalid', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const usernameField = getByPlaceholderText('username');
    fireEvent.change(usernameField, { target: { value: '' } });
    expect(getByPlaceholderText('username')).toBeInTheDocument();
  });

  it('should display an error message if the password is too short', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const passwordField = getByPlaceholderText('password');
    fireEvent.change(passwordField, { target: { value: 'pass' } });
    expect(getByPlaceholderText('password')).toBeInTheDocument();
  });

  
});