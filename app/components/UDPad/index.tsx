import React from 'react';
import {View, Text} from 'react-native';

import {UpIcon, DownIcon} from 'app/theme/icons';

import styles from './styles';

interface UDPadProps {
  value: number;
  size?: number; //  font size
  prefix?: string;
  suffix?: string;
}

const COLOR = {UP: '#14C881', DOWN: '#DF2040'};

const UDPad: React.FC<UDPadProps> = ({
  value,
  size = 12,
  prefix = '',
  suffix = '',
}) => {
  return (
    <View style={styles.container}>
      {value > 0 ? (
        <>
          <UpIcon color={COLOR.UP} size={size} />
          <Text style={[styles.text, {color: COLOR.UP, fontSize: size}]}>
            {prefix + value + suffix}
          </Text>
        </>
      ) : (
        <>
          <DownIcon color={COLOR.DOWN} size={size} />
          <Text style={[styles.text, {color: COLOR.DOWN, fontSize: size}]}>
            {prefix + value + suffix}
          </Text>
        </>
      )}
    </View>
  );
};

export default UDPad;
