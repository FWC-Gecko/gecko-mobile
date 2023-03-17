import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import Header from 'app/components/Header';
import RoundInput from 'app/components/RoundInput';

import Images from 'app/theme/images';

import ThemeContext from 'app/context/ThemeContext';

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
    <ThemeContext.Consumer>
      {theme => (
        <View style={styles.container}>
          <Header mode="profile" />
          <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={onAvatar}>
              <Image
                source={Images.profile_default_avatar}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <Text style={[styles.name, {color: theme.colors.textcolor}]}>
              Jazhe
            </Text>
            <Text style={styles.smallName}>Sutfgp2ymgqj</Text>
          </View>
          <View style={styles.contentContainer}>
            <ScrollView style={styles.contentSmallContainer}>
              <RoundInput
                type="text"
                label="Display Name"
                placeholder="Name"
                onChangeText={() => {}}
                onSubmitEditing={() => {}}
              />
              <RoundInput
                type="text"
                label="User Name"
                placeholder="User Name"
                onChangeText={() => {}}
                onSubmitEditing={() => {}}
              />
              <RoundInput
                type="text"
                label="Biography"
                placeholder="A brief introduction about yourself"
                onChangeText={() => {}}
                onSubmitEditing={() => {}}
              />
              <RoundInput
                type="calendar"
                label="Birthday"
                placeholder="YYYY/MM/DD"
                onChangeText={onDateChange}
                onSubmitEditing={() => {}}
              />
              <RoundInput
                type="text"
                label="Website"
                placeholder="Add your website"
                onChangeText={() => {}}
                onSubmitEditing={() => {}}
              />
              <RoundInput
                type="text"
                label="Coinmarketcap Url"
                placeholder="Enter coinmarketcap url"
                onChangeText={() => {}}
                onSubmitEditing={() => {}}
              />
              <RoundInput
                type="text"
                label="Referral Code"
                placeholder="Enter Referral Code"
                onChangeText={() => {}}
                onSubmitEditing={() => {}}
              />
            </ScrollView>
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Profile;
