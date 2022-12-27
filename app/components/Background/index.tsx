import React from 'react';
import {View, Image} from 'react-native';
import Images from 'app/theme/images';

import styles from './styles';

interface BackgroundProps {
  children: React.ReactNode;
  mode: 'default' | 'splash';
}

const Background: React.FC<BackgroundProps> = ({
  children,
  mode = 'default',
}) => {
  return mode === 'default' ? (
    <View style={styles.container}>
      <Image style={styles.image} source={Images.bg_main} />
      {children}
    </View>
  ) : (
    <View style={styles.container}>
      <Image style={styles.image} source={Images.bg_splash} />
      {children}
    </View>
  );
};

export default Background;
