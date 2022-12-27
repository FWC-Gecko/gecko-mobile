import React from 'react';
import {View, FlatList} from 'react-native';

import PriceListItem from 'app/components/PriceListItem';

import styles from './styles';

interface PriceListProps {}

const data = [
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    name: 'BTC',
    marketCap: '323.83Bn',
    price: 16827.25,
    dayPercent: 1245.23,
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    name: 'ETH',
    marketCap: '148.64Bn',
    price: 1214.68,
    dayPercent: 245.23,
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
    name: 'USDT',
    marketCap: '148.64Bn',
    price: 1.0,
    dayPercent: 245.23,
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
    name: 'USD Coin',
    marketCap: '148.64Bn',
    price: 0.99,
    dayPercent: 245.23,
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    name: 'BNB',
    marketCap: '148.64Bn',
    price: 214.9,
    dayPercent: 245.23,
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
    name: 'XRP',
    marketCap: '148.64Bn',
    price: 1214.68,
    dayPercent: 245.23,
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
    name: 'Binance USD',
    marketCap: '148.64Bn',
    price: 1214.68,
    dayPercent: 245.23,
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
    name: 'Dogecoin',
    marketCap: '148.64Bn',
    price: 1214.68,
    dayPercent: 245.23,
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
    name: 'Cardano',
    marketCap: '148.64Bn',
    price: 1214.68,
    dayPercent: 245.23,
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png',
    name: 'Polygon',
    marketCap: '148.64Bn',
    price: 1214.68,
    dayPercent: 245.23,
  },
];

const PriceList: React.FC<PriceListProps> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PriceListItem
            icon={item.icon}
            name={item.name}
            marketCap={item.marketCap}
            price={item.price}
            dayPercent={item.dayPercent}
            onPress={() => {}}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default PriceList;
