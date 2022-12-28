import React from 'react';
import {View, Pressable, Image, Text} from 'react-native';

import Images from 'app/theme/images';

import styles from './styles';

interface CustomAvatarProps {
  avatar?: string;
  title: string;
  subtitle: string;
  titleSize?: number;
  subtitleSize?: number;
  Stick?: React.FC;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({
  avatar,
  title,
  subtitle,
  titleSize = 16,
  subtitleSize = 12,
  Stick,
}) => {
  const onPress = () => {};
  return (
    <View style={styles.container}>
      {!avatar ? (
        <Pressable onPress={onPress}>
          <Image source={Images.profile_default_avatar} style={styles.avatar} />
        </Pressable>
      ) : (
        <Image source={{uri: avatar}} style={styles.avatar} />
      )}

      <View>
        {Stick ? (
          <View style={styles.container}>
            <Text style={[styles.title, {fontSize: titleSize}]}>{title}</Text>
            <Stick />
          </View>
        ) : (
          <Text style={[styles.title, {fontSize: titleSize}]}>{title}</Text>
        )}
        <Text style={[styles.subtitle, {fontSize: subtitleSize}]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default CustomAvatar;
