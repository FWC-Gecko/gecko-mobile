import React, {useEffect, useCallback} from 'react';
import {View, Text, Image, AppState, AppStateStatus} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import {ILoginState} from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import Background from 'app/components/Background';
import RoundInput from 'app/components/RoundInput';
import RoundButton from 'app/components/RoundButton';
import Images from 'app/theme/images';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  // const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onLogin = () => NavigationService.navigate('Home');
  const onSignUp = () => NavigationService.navigate('SignUp');
  const onForgot = () => NavigationService.navigate('ForgotPassword');

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

    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Background mode="default">
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.avatarBackground}>
            <Image source={Images.avatar} style={styles.avatar} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Sign In</Text>
            <RoundInput
              type="email"
              label="Email Address"
              placeholder="Enter Email Address"
              onChangeText={onEmailChange}
            />
            <RoundInput
              type="password"
              label="Password"
              placeholder="Enter Password"
              onChangeText={onPasswordChange}
              comment="Minimum Length Of 8 Characters"
            />
            <TouchableOpacity onPress={onForgot}>
              <Text style={styles.forgot}>Forgot password?</Text>
            </TouchableOpacity>
            <RoundButton title="Sign In" onPress={onLogin} />
            <View style={styles.signupContainer}>
              <Text style={styles.signupTitle}>
                You don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={onSignUp}>
                <Text style={styles.signup}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Background>
  );
};

export default Login;
