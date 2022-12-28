import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ILoginState} from 'app/models/reducers/login';

import Overview from 'app/screens/Overview';
import LiveChat from 'app/screens/LiveChat';
import HistoricalData from 'app/screens/HistoricalData';

import Background from 'app/components/Background';
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
    <Background mode="default">
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
    </Background>
  );
};

export default CoinDetail;
