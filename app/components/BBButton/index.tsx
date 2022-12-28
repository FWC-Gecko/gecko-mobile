import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {UpIcon, DownIcon} from 'app/theme/icons';

import styles from './styles';

interface BBButtonProps {
  mode: 'bullish' | 'bearish';
  color: 'light' | 'dark';
  onPress: () => void;
}

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const BBButton: React.FC<BBButtonProps> = ({mode, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {mode === 'bullish' && color === 'light' && (
        <View style={[styles.container, styles.light]}>
          <UpIcon color="#14C881" />
          <Text style={styles.text}>{capitalizeFirstLetter(mode)}</Text>
        </View>
      )}
      {mode === 'bullish' && color === 'dark' && (
        <View style={[styles.container, styles.bullishDark]}>
          <UpIcon color="white" />
          <Text style={styles.text}>{capitalizeFirstLetter(mode)}</Text>
        </View>
      )}
      {mode === 'bearish' && color === 'light' && (
        <View style={[styles.container, styles.light]}>
          <DownIcon color="#DF2040" />
          <Text style={styles.text}>{capitalizeFirstLetter(mode)}</Text>
        </View>
      )}
      {mode === 'bearish' && color === 'dark' && (
        <View style={[styles.container, styles.bearishDark]}>
          <DownIcon color="white" />
          <Text style={styles.text}>{capitalizeFirstLetter(mode)}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default BBButton;
