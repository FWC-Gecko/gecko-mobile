import React from 'react';
import {View, Image} from 'react-native';
import Images from 'app/theme/images';

import styles from './styles';

interface BackgroundProps {
  children: React.ReactNode;
  mode: 'default' | 'gradient';
}

const Background: React.FC<BackgroundProps> = ({
  children,
  mode = 'default',
}) => {
  return mode === 'default' ? (
    <View style={styles.container}>
      <Image style={styles.default} source={Images.bg_main} />
      {children}
    </View>
  ) : (
    <View>
      <Image
        style={[styles.default, styles.gradient]}
        source={Images.bg_gradient}
      />
      {children}
    </View>
  );
};

export default Background;
