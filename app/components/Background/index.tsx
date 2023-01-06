import React from 'react';
import {View, Image} from 'react-native';
import Images from 'app/theme/images';

import styles from './styles';

interface BackgroundProps {
  children: React.ReactNode;
  mode: 'default' | 'gradient' | 'gradient2';
}

const Background: React.FC<BackgroundProps> = ({
  children,
  mode = 'default',
}) => {
  return (
    <>
      {mode === 'default' && (
        <View style={styles.container}>
          <Image style={styles.default} source={Images.bg_main} />
          {children}
        </View>
      )}
      {mode === 'gradient' && (
        <View>
          <Image
            style={[styles.default, styles.gradient]}
            source={Images.bg_gradient}
          />
          {children}
        </View>
      )}
      {mode === 'gradient2' && (
        <View>
          <Image
            style={[styles.default, styles.gradient2]}
            source={Images.bg_gradient}
          />
          {children}
        </View>
      )}
    </>
  );
};

export default Background;
