import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import {ILoginState} from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import Background from 'app/components/Background';
import Images from 'app/theme/images';
import RoundButton from 'app/components/RoundButton';

interface IState {
  loginReducer: ILoginState;
}

const GetStarted: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  return (
    <Background mode="splash">
      <View style={styles.container}>
        <Image source={Images.avatar} style={styles.avatar} />
        <RoundButton
          onPress={() => NavigationService.navigate('Auth')}
          title="Swipe"
        />
      </View>
    </Background>
  );
};

export default GetStarted;
