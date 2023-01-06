import React from 'react';
import {View, Text} from 'react-native';

import Background from 'app/components/Background';

import RadioGroup from 'app/components/RadioGroup';
import RoundInput from 'app/components/RoundInput';
import RoundButton from 'app/components/RoundButton';

import styles from './styles';

const YourInformation: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.positionContainer}>
        <Background mode="gradient">
          <View style={styles.positionSmallContainer}>
            <Text style={styles.positionLabel}>
              Please Confirm Your Position With The Project.
            </Text>
            <RadioGroup
              items={[
                {label: 'Founder'},
                {label: 'Member of the Leadership Team'},
                {label: 'CEO'},
                {label: 'Admin / Community Manager'},
                {label: 'CMO'},
                {label: 'Administrative Assitant'},
              ]}
              onSelect={index => {
                console.log(index);
              }}
            />
          </View>
        </Background>
      </View>
      <View style={styles.positionContainer}>
        <Background mode="gradient">
          <View style={styles.positionSmallContainer}>
            <RoundInput
              type="text"
              label="Your Name"
              placeholder="Enter Name"
              onChangeText={() => {}}
            />
            <RoundInput
              type="email"
              label="Email Address"
              placeholder="Enter Email Address"
              onChangeText={() => {}}
            />
            <RoundInput
              type="calendar"
              label="Your Telegram @Username"
              placeholder="Enter Telegram Id"
              onChangeText={() => {}}
            />
          </View>
        </Background>
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton title="Next Step" onPress={() => {}} />
      </View>
    </View>
  );
};

export default YourInformation;
