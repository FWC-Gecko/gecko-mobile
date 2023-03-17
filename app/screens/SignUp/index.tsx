import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import {ILoginState} from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

import RoundInput from 'app/components/RoundInput';
import RoundButton from 'app/components/RoundButton';

import ThemeContext from 'app/context/ThemeContext';

import Images from 'app/theme/images';

interface IState {
  loginReducer: ILoginState;
}

const SignUp: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => NavigationService.navigate('LogIn');
  const onTermsOfUse = () => {};
  const onPrivacyPolicy = () => {};
  const onSignUp = () => {};

  const onEmailChange = (email: string) => {
    console.log(email);
  };
  const onPasswordChange = (password: string) => {
    console.log(password);
  };
  const onReferralIDChange = (id: string) => {
    console.log(id);
  };
  return (
    <ThemeContext.Consumer>
      {theme => (
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <View style={styles.avatarBackground}>
              <Image source={Images.avatar} style={styles.avatar} />
            </View>
            <View style={styles.content}>
              <Text style={[styles.title, {color: theme.colors.textcolor}]}>
                Sign Up
              </Text>
              <RoundInput
                type="email"
                label="Email Address"
                placeholder="Enter Email Address"
                onChangeText={onEmailChange}
                onSubmitEditing={() => {}}
              />
              <RoundInput
                type="password"
                label="Password"
                placeholder="Enter Password"
                onChangeText={onPasswordChange}
                comment="Minimum Length Of 8 Characters"
                onSubmitEditing={() => {}}
              />
              <RoundInput
                type="text"
                label="Referral ID(Optional)"
                placeholder="Enter Referral ID"
                onChangeText={onReferralIDChange}
                onSubmitEditing={() => {}}
              />
              <RoundButton title="Sign Up" onPress={onSignUp} />
              <View style={styles.signupContainer}>
                <Text style={styles.signupTitle}>
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity onPress={onLogin}>
                  <Text style={styles.signup}>Log In</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.agreeContainer}>
                <TouchableOpacity onPress={onTermsOfUse}>
                  <Text style={styles.signup}>Terms of Use</Text>
                </TouchableOpacity>
                <Text style={styles.signupTitle}> & </Text>
                <TouchableOpacity onPress={onPrivacyPolicy}>
                  <Text style={styles.signup}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </ThemeContext.Consumer>
  );
};

export default SignUp;
