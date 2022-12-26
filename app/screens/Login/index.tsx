import React from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onSignUp = () => NavigationService.navigate('SignUp');
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <Background mode="default">
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
            onChangeText={() => {}}
          />
          <RoundInput
            type="password"
            label="Password"
            placeholder="Enter Password"
            onChangeText={() => {}}
            comment="Minimum Length Of 8 Characters"
          />
          <TouchableOpacity onPress={onForgot}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>
          <RoundButton title="Sign In" onPress={onLogin} />
          <View style={styles.signupContainer}>
            <Text style={styles.signupTitle}>You don't have an account? </Text>
            <TouchableOpacity onPress={onSignUp}>
              <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
