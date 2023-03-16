import React, {useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  Image,
  AppState,
  AppStateStatus,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import {ILoginState} from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import RoundInput from 'app/components/RoundInput';
import RoundButton from 'app/components/RoundButton';
import Background from 'app/components/Background';

import ThemeContext from 'app/context/ThemeContext';

import Images from 'app/theme/images';

interface IState {
  loginReducer: ILoginState;
}

type Focusable = {
  focus(): void;
} | null;

const Login: React.FC = () => {
  // const id = useSelector((state: IState) => state.loginReducer.id);
  // const dispatch = useDispatch();
  // const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onLogin = () => NavigationService.navigate('Home');
  const onSignUp = () => NavigationService.navigate('SignUp');
  const onForgot = () => NavigationService.navigate('ForgotPassword');

  const emailInput = useRef<Focusable>(null);
  const passwordInput = useRef<Focusable>(null);

  const onEmailChange = (email: string) => {
    console.log(email);
  };
  const onPasswordChange = (password: string) => {
    console.log(password);
  };

  const onAppStateChange = useCallback((nextAppState: AppStateStatus) => {
    if (nextAppState !== 'active') {
      SplashScreen.show(); // <--- not working
    } else {
      SplashScreen.hide();
    }
  }, []);

  useEffect(() => {
    SplashScreen.hide();
    emailInput.current?.focus();

    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Background>
      <KeyboardAwareScrollView>
        <ThemeContext.Consumer>
          {theme => (
            <View style={styles.container}>
              <View style={styles.avatarBackground}>
                <Image source={Images.avatar} style={styles.avatar} />
              </View>
              <View style={styles.content}>
                <Text
                  style={[styles.title, {color: theme.colors.textcolor}]}
                  testID="signInLabel">
                  Sign In
                </Text>
                <RoundInput
                  type="email"
                  label="Email Address"
                  placeholder="Enter Email Address"
                  onChangeText={onEmailChange}
                  onRefInput={ref => {
                    emailInput.current = ref;
                  }}
                  onSubmitEditing={() => {
                    // console.log('1');
                    passwordInput.current?.focus();
                  }}
                  testID="emailInput"
                />
                <RoundInput
                  type="password"
                  label="Password"
                  placeholder="Enter Password"
                  onChangeText={onPasswordChange}
                  comment="Minimum Length Of 8 Characters"
                  onRefInput={ref => {
                    passwordInput.current = ref;
                  }}
                  onSubmitEditing={onLogin}
                  testID="passwordInput"
                />
                <TouchableOpacity onPress={onForgot}>
                  <Text style={styles.forgot} testID="forgotPasswordLabel">
                    Forgot password?
                  </Text>
                </TouchableOpacity>
                <RoundButton
                  title="Sign In"
                  onPress={onLogin}
                  testID="loginButton"
                />
                <View style={styles.signupContainer}>
                  <Text style={styles.signupTitle} testID="signUpTitle">
                    You don't have an account?{' '}
                  </Text>
                  <TouchableOpacity onPress={onSignUp}>
                    <Text style={styles.signup} testID="signUpLabel">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </ThemeContext.Consumer>
      </KeyboardAwareScrollView>
    </Background>
  );
};

export default Login;
