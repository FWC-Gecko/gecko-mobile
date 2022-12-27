import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';

import Images from 'app/theme/images';

import styles from './styles';

interface RoundButtonProps {
  title: string;
  onPress: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Image source={Images.bg_round_button} style={styles.bg} />
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RoundButton;
