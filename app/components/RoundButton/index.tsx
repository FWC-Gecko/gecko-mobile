import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';

interface RoundButtonProps {
  title: string;
  onPress: () => void;
  testID?: string;
}

const RoundButton: React.FC<RoundButtonProps> = ({title, onPress, testID}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <View style={styles.container}>
          <Text style={styles.text} testID={testID}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RoundButton;
