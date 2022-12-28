import React from 'react';
import {View, Text} from 'react-native';

import {UpIcon, DownIcon} from 'app/theme/icons';

import styles from './styles';

interface PercentPadProps {
  value: number;
}

const PercentPad: React.FC<PercentPadProps> = ({value}) => {
  return value >= 0 ? (
    <View style={[styles.container, styles.upBg]}>
      <UpIcon color="white" />
      <Text style={styles.value}>{`${value}%`}</Text>
    </View>
  ) : (
    <View style={[styles.container, styles.downBg]}>
      <DownIcon color="white" />
      <Text style={styles.value}>{`${value}%`}</Text>
    </View>
  );
};

export default PercentPad;
