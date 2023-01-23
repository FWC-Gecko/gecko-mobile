import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Background from 'app/components/Background';

import RoundInput from 'app/components/RoundInput';
import RoundButton from 'app/components/RoundButton';

import styles from './styles';

const Other: React.FC = () => {
  //  Input Event
  const onSelectChange = (blockchain: string) => {
    console.log(blockchain);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.positionContainer}>
        <Background mode="gradient">
          <View style={styles.positionSmallContainer}>
            <RoundInput
              type="select"
              data={['bitcoin', 'ethereum', 'binance smart chain']}
              defaultButtonText="Select Blockchain"
              placeholder="Enter Token Ticker"
              onChangeText={onSelectChange}
            />
            <RoundInput
              type="text"
              label="Project Name"
              placeholder="Enter Answer"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="Football World Community Url"
              placeholder="Enter Football World Community Url"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="Twitter"
              placeholder="Enter Twitter"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="Telegram"
              placeholder="Enter Telegram"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="Discord"
              placeholder="Enter Discord"
              onChangeText={() => {}}
            />
          </View>
        </Background>
        <View style={styles.buttonContainer}>
          <RoundButton title="Submit" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Other;
