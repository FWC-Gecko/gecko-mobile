import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import ThemeContext from 'app/context/ThemeContext';

import {UpIcon, DownIcon} from 'app/theme/icons';

import styles from './styles';

interface BBButtonProps {
  mode: 'bullish' | 'bearish';
  color: 'light' | 'dark';
  onPress?: () => void;
}

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const BBButton: React.FC<BBButtonProps> = ({mode, color, onPress}) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <>
          {mode === 'bullish' && color === 'light' && (
            <TouchableOpacity onPress={onPress}>
              <View
                style={[
                  styles.container,
                  styles.light,
                  {borderColor: theme.colors.bordercolor},
                ]}>
                <UpIcon color="#14C881" />
                <Text style={[styles.text, {color: theme.colors.textcolor}]}>
                  {capitalizeFirstLetter(mode)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          {mode === 'bullish' && color === 'dark' && (
            <View style={[styles.container, styles.bullishDark]}>
              <UpIcon color="white" />
              <Text style={styles.text}>{capitalizeFirstLetter(mode)}</Text>
            </View>
          )}
          {mode === 'bearish' && color === 'light' && (
            <TouchableOpacity onPress={onPress}>
              <View
                style={[
                  styles.container,
                  styles.light,
                  {borderColor: theme.colors.bordercolor},
                ]}>
                <DownIcon color="#DF2040" />
                <Text style={[styles.text, {color: theme.colors.textcolor}]}>
                  {capitalizeFirstLetter(mode)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          {mode === 'bearish' && color === 'dark' && (
            <View style={[styles.container, styles.bearishDark]}>
              <DownIcon color="white" />
              <Text style={styles.text}>{capitalizeFirstLetter(mode)}</Text>
            </View>
          )}
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export default BBButton;
