import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import Background from 'app/components/Background';
import Header from 'app/components/Header';
import RoundInput from 'app/components/RoundInput';

import Images from 'app/theme/images';

import styles from './styles';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const onAvatar = async () => {
    await launchImageLibrary({mediaType: 'photo'});
  };
  //  Input Event
  const onDateChange = (date: string) => {
    console.log(date);
  };
  return (
    <Background mode="default">
      <Header mode="profile" />
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={onAvatar}>
          <Image source={Images.profile_default_avatar} style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.name}>Jazhe</Text>
        <Text style={styles.smallName}>Sutfgp2ymgqj</Text>
      </View>
      <View style={styles.contentContainer}>
        <Background mode="gradient2">
          <ScrollView style={styles.contentSmallContainer}>
            <RoundInput
              type="text"
              label="Display Name"
              placeholder="Name"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="User Name"
              placeholder="User Name"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="Biography"
              placeholder="A brief introduction about yourself"
              onChangeText={() => {}}
            />
            <RoundInput
              type="calendar"
              label="Birthday"
              placeholder="YYYY/MM/DD"
              onChangeText={onDateChange}
            />
            <RoundInput
              type="text"
              label="Website"
              placeholder="Add your website"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="Coinmarketcap Url"
              placeholder="Enter coinmarketcap url"
              onChangeText={() => {}}
            />
            <RoundInput
              type="text"
              label="Referral Code"
              placeholder="Enter Referral Code"
              onChangeText={() => {}}
            />
          </ScrollView>
        </Background>
      </View>
    </Background>
  );
};

export default Profile;
