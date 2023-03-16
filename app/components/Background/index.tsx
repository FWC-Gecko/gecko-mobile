import React from 'react';
import {View} from 'react-native';

import ThemeContext from 'app/context/ThemeContext';

import styles from './styles';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({children}) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View
          style={[
            styles.container,
            {backgroundColor: theme.colors.background},
          ]}>
          {children}
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Background;
