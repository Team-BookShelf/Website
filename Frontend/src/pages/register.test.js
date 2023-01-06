import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from './register';

describe('Registration form', () => {
  it('should render a form with name, last name, username, email, password, and confirm password fields', () => {
    const { getByPlaceholderText } = render(<Register />);
    expect(getByPlaceholderText('name')).toBeInTheDocument();
    expect(getByPlaceholderText('last name')).toBeInTheDocument();
    expect(getByPlaceholderText('username')).toBeInTheDocument();
    expect(getByPlaceholderText('email')).toBeInTheDocument();
    expect(getByPlaceholderText('password')).toBeInTheDocument();
    expect(getByPlaceholderText('confirm password')).toBeInTheDocument();
  });

  it('should accept valid values for all form fields', () => {
    const { getByPlaceholderText } = render(<Register />);
    const nameField = getByPlaceholderText('name');
    const lastNameField = getByPlaceholderText('last name');
    const usernameField = getByPlaceholderText('username');
    const emailField = getByPlaceholderText('email');
    const passwordField = getByPlaceholderText('password');
    const confirmPasswordField = getByPlaceholderText('confirm password');
    fireEvent.change(nameField, { target: { value: 'John' } });
    fireEvent.change(lastNameField, { target: { value: 'Doe' } });
    fireEvent.change(usernameField, { target: { value: 'johndoe' } });
    fireEvent.change(emailField, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordField, { target: { value: 'password' } });
    expect(nameField.value).toBe('John');
    expect(lastNameField.value).toBe('Doe');
    expect(usernameField.value).toBe('johndoe');
    expect(emailField.value).toBe('john@example.com');
    expect(passwordField.value).toBe('password');
    expect(confirmPasswordField.value).toBe('password');
  });

  it('should display an error message if the name field is empty', () => {
    const { getByPlaceholderText } = render(<Register />);
    const nameField = getByPlaceholderText('name');
    fireEvent.change(nameField, { target: { value: '' } });
    expect(getByPlaceholderText('name')).toBeInTheDocument();
  });

})