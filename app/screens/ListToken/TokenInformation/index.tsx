import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Background from 'app/components/Background';

import RoundInput from 'app/components/RoundInput';
import RoundButton from 'app/components/RoundButton';

import styles from './styles';

const TokenInformation: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.positionContainer}>
        <Background mode="gradient">
          <View style={styles.positionSmallContainer}>
            <RoundInput
              type="text"
              label="Token Ticker"
              placeholder="Enter Token Ticker"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="Contract Address"
              placeholder="Enter Contract Address"
              onChangeText={() => {}}
            />
            <RoundInput
              type="number"
              label="Total Supply"
              placeholder="1"
              onChangeText={() => {}}
            />
            <RoundInput
              type="number"
              label="Decimals"
              placeholder="Enter Decimals"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="Project Blockchain"
              placeholder="Enter Project Blockchain"
              onChangeText={() => {}}
            />
          </View>
        </Background>
        <View style={styles.buttonContainer}>
          <RoundButton title="Next Step" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TokenInformation;
