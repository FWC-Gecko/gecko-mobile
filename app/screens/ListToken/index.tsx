import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Background from 'app/components/Background';
import Header from 'app/components/Header';
import TopNavigation from 'app/components/TopNavigation';

import YourInformation from './YourInformation';
import TokenInformation from './TokenInformation';
import Other from './Other';

import styles from './styles';

const ListToken: React.FC = () => {
  return (
    <Background mode="default">
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Header mode="detail" />
          <View style={styles.content}>
            <TopNavigation
              pages={[
                {
                  title: 'Your Information',
                  component: () => <YourInformation />,
                },
                {
                  title: 'Token Information',
                  component: () => <TokenInformation />,
                },
                {
                  title: 'Other',
                  component: () => <Other />,
                },
              ]}
              titleSize={10}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Background>
  );
};

export default ListToken;
