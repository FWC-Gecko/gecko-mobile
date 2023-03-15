import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Login from 'app/screens/Login';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = require('react-native').ScrollView;
  return {KeyboardAwareScrollView};
});

jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});

describe('Login Screen', () => {
  //  Components Test
  it('Render the correct label', () => {
    const page = render(<Login />);
    //  Sign In Label
    const signInLabel = page.getByTestId('signInLabel');
    expect(signInLabel.children[0]).toBe('Sign In');
    //  Forgot Password Label
    const forgotPasswordLabel = page.getByTestId('forgotPasswordLabel');
    expect(forgotPasswordLabel.children[0]).toBe('Forgot password?');
    //  Sign Up Label
    const signUpLabel = page.getByTestId('signUpLabel');
    expect(signUpLabel.children[0]).toBe('Sign Up');
    //  Sign Up Title
    const signUpTitle = page.getByTestId('signUpTitle');
    expect(signUpTitle.children[0]).toBe("You don't have an account?");
  });

  // it('Should redirect to the home screen after clicking the login button', () => {
  //   const navigation = {navigate: () => {}};
  //   jest.spyOn(navigation, 'navigate');
  //   console.log(navigation);
  //   const page = render(<Login navigation={navigation} />);

  //   const loginButton = page.getByTestId('loginButton');

  //   fireEvent.press(loginButton);

  //   expect(navigation.navigate).toHaveBeenCalledWith('Home');
  // });
});
