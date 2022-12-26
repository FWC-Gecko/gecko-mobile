import React from 'react';
import {View} from 'react-native';

import Coins from 'app/screens/Coins';
import Watchlists from 'app/screens/Watchlists';
import Chains from 'app/screens/Chains';

import Background from 'app/components/Background';
import Header from 'app/components/Header';
import TopNavigation from 'app/components/TopNavigation';

import styles from './styles';

const Markets: React.FC = () => {
  return (
    <Background mode="default">
      <View style={styles.container}>
        <Header mode="profile" />
        <TopNavigation
          pages={[
            {
              title: 'Coins',
              component: () => <Coins />,
            },
            {
              title: 'Watchlists',
              component: () => <Watchlists />,
            },
            {
              title: 'Chains',
              component: () => <Chains />,
            },
          ]}
        />
      </View>
    </Background>
  );
};

export default Markets;
