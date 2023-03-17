import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ILoginState} from 'app/models/reducers/login';

import Overview from './Overview';
import LiveChat from './LiveChat';
import HistoricalData from './HistoricalData';

import Header from 'app/components/Header';
import TopNavigation from 'app/components/TopNavigation';

import styles from './styles';

interface IState {
  loginReducer: ILoginState;
}

const CoinDetail: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header mode="detail" />
      <View style={styles.content}>
        <TopNavigation
          pages={[
            {
              title: 'Overview',
              component: () => <Overview />,
            },
            {
              title: 'Live Chat',
              component: () => <LiveChat />,
            },
            {
              title: 'Historical Data',
              component: () => <HistoricalData />,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default CoinDetail;
