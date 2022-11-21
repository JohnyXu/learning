import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import Form, { FormProps } from './form';
import Item from './formItem';
import Input from '../Input';
import Button from '../Button';

const testProps: FormProps = {
  name: 'test-form',
  initialValues: { name: 'viking', password: '12345', confirmPwd: '23456' },
  onFinish: jest.fn(),
  onFinishFailed: jest.fn(),
};
let nameInput: HTMLInputElement,
  pwdInput: HTMLInputElement,
  conPwdInput: HTMLInputElement,
  submitButton: HTMLButtonElement;

describe('testing Form component', () => {
  const setup = () => {
    render(
      <Form {...testProps}>
        <Item
          label="Name"
          name="name"
          rules={[
            { type: 'string', required: true, message: 'name error' },
            { type: 'string', min: 3, message: 'less than 3' },
          ]}
        >
          <Input />
        </Item>
        <Item
          label="Password"
          name="password"
          rules={[
            { type: 'string', required: true, message: 'password error' },
            { type: 'string', min: 4, message: 'less then 4' },
          ]}
        >
          <Input type="password" />
        </Item>
        <Item
          label="Confirm"
          name="confirmPwd"
          rules={[
            { type: 'string', required: true, message: 'confirm password error' },
            { type: 'string', min: 4, message: 'less then 4' },
            ({ getFieldValue }) => ({
              asyncValidator(rule, value) {
                return new Promise((resolve, reject) => {
                  if (value !== getFieldValue('password')) {
                    reject('Do not match!');
                  }
                  resolve();
                });
              },
            }),
          ]}
        >
          <Input type="password" />
        </Item>
        <Button type="submit" btnType="primary">
          Log in
        </Button>
      </Form>,
    );
    nameInput = screen.getByDisplayValue('viking');
    pwdInput = screen.getByDisplayValue('12345');
    conPwdInput = screen.getByDisplayValue('23456');
    submitButton = screen.getByText('Log in');
  };
  beforeEach(() => {
    setup();
  });
  it('should render the correct Form component', () => {
    // should contains two labels
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();

    // should fill in three inputs
    expect(nameInput).toBeInTheDocument();
    expect(pwdInput).toBeInTheDocument();
    expect(conPwdInput).toBeInTheDocument();
    // should render the submit button
    expect(submitButton).toBeInTheDocument();
  });
  it('submit form with invliad values should show the error message', async () => {
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(pwdInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText('name error')).toBeInTheDocument();
      // expect(testProps.onFinishFailed).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(screen.getByText('password error')).toBeInTheDocument();
    });
  });
  it('change single input to invalid values should trigger the validate', async () => {
    // name input, type: string
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.blur(nameInput);
    await (() => {
      expect(screen.getByText('name error')).toBeInTheDocument();
    });
    fireEvent.change(nameInput, { target: { value: '12' } });
    fireEvent.blur(nameInput);
    await waitFor(() => {
      expect(screen.getByText('less than 3')).toBeInTheDocument();
    });
  });
  it('custom rules should work', async () => {
    // change and blur comfirmPwd
    fireEvent.change(conPwdInput, { target: { value: '23456' } });
    fireEvent.blur(conPwdInput);
    await waitFor(() => {
      expect(screen.getByText('Do not match!')).toBeInTheDocument();
    });
    // change to the same
    fireEvent.change(conPwdInput, { target: { value: '12345' } });
    fireEvent.blur(conPwdInput);
    await waitFor(() => {
      expect(screen.queryByText('Do not match!')).not.toBeInTheDocument();
    });
    fireEvent.click(submitButton);
    // submit the form with the right data
    await waitFor(() => {
      expect(testProps.onFinish).toHaveBeenCalled();
    });
  });
});
