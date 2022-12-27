import React from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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

const ForgotPassword: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onSend = () => {};
  const onBack = () => NavigationService.navigate('LogIn');
  return (
    <Background mode="default">
      <View style={styles.container}>
        <View style={styles.avatarBackground}>
          <Image source={Images.avatar} style={styles.avatar} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Forgot Password</Text>
          <View style={styles.element}>
            <RoundInput
              type="email"
              label="Email Address"
              placeholder="Enter Email Address"
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.element}>
            <RoundButton title="Send" onPress={onSend} />
          </View>
          <View style={styles.element}>
            <RoundButton title="Back" onPress={onBack} />
          </View>
        </View>
      </View>
    </Background>
  );
};

export default ForgotPassword;
