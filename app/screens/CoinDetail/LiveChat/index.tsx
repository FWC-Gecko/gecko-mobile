import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ILoginState} from 'app/models/reducers/login';

import CustomAvatar from 'app/components/CustomAvatar';
import BBButton from 'app/components/BBButton';
import RoundInput from 'app/components/RoundInput';
import Comment from 'app/components/Comment';

import ThemeContext from 'app/context/ThemeContext';

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
    <ThemeContext.Consumer>
      {theme => (
        <View style={styles.container}>
          {/* Chat Box */}
          <View
            style={[
              styles.chatContainer,
              {backgroundColor: theme.colors.elementbackground},
            ]}>
            <Text style={[styles.chatText, {color: theme.colors.textcolor}]}>
              Live Tether Chat
            </Text>
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
                onSubmitEditing={() => {}}
              />
            </View>
          </View>
          {/* Comment */}
          <View style={styles.commentContainer}>
            <FlatList data={['1', '2']} renderItem={() => <Comment />} />
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default LiveChat;
