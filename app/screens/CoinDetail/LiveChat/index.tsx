import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ILoginState} from 'app/models/reducers/login';

import CustomAvatar from 'app/components/CustomAvatar';
import BBButton from 'app/components/BBButton';
import RoundInput from 'app/components/RoundInput';
import Background from 'app/components/Background';
import Comment from 'app/components/Comment';

import styles from './styles';

interface IState {
  loginReducer: ILoginState;
}

const LiveChat: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onBullish = () => {};
  const onBearish = () => {};
  return (
    <View style={styles.container}>
      {/* Chat Box */}
      <Background mode="gradient">
        <View style={styles.chatContainer}>
          <Text style={styles.chatText}>Live Tether Chat</Text>
          <View>
            <View style={styles.chatTopSide}>
              <CustomAvatar title="Phillip" />
              <View style={styles.chatBBContainer}>
                <BBButton mode="bullish" color="light" onPress={onBullish} />
                <BBButton mode="bearish" color="light" onPress={onBearish} />
              </View>
            </View>
          </View>
          <View>
            <RoundInput
              type="text"
              placeholder="How do you feel about Tether today?"
              onChangeText={() => {}}
            />
          </View>
        </View>
      </Background>
      {/* Comment */}
      <View style={styles.commentContainer}>
        <FlatList data={['1', '2']} renderItem={() => <Comment />} />
      </View>
    </View>
  );
};

export default LiveChat;
