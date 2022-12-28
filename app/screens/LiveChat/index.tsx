import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import {ILoginState} from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import Images from 'app/theme/images';
import RoundButton from 'app/components/RoundButton';

interface IState {
  loginReducer: ILoginState;
}

const LiveChat: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  return <View style={styles.container} />;
};

export default LiveChat;
