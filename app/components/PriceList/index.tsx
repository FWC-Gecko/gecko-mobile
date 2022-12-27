import React, {useState} from 'react';
import {View, FlatList, Text, Pressable} from 'react-native';

import NavigationService from 'app/navigation/NavigationService';

import PriceListItem from 'app/components/PriceListItem';

import {UpIcon, DownIcon} from 'app/theme/icons';

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
  const [priceSort, setPriceSort] = useState(false);
  const [daySort, setDaySort] = useState(false);
  const onPriceSort = () => {
    setPriceSort(!priceSort);
  };
  const onDayPercentSort = () => {
    setDaySort(!daySort);
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={styles.leftSide}>
          <Text style={styles.text}>Market Cap</Text>
        </View>
        <Pressable style={styles.leftSide} onPress={onPriceSort}>
          <Text style={styles.text}>Price(USD)</Text>
          {priceSort ? (
            <UpIcon color="#A7A7A7" />
          ) : (
            <DownIcon color="#A7A7A7" />
          )}
        </Pressable>
        <Pressable style={styles.rightSide} onPress={onDayPercentSort}>
          <Text style={styles.text}>24h%</Text>
          {daySort ? <UpIcon color="#A7A7A7" /> : <DownIcon color="#A7A7A7" />}
        </Pressable>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PriceListItem
            icon={item.icon}
            name={item.name}
            marketCap={item.marketCap}
            price={item.price}
            dayPercent={item.dayPercent}
            onPress={() => NavigationService.navigate('CoinDetail')}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default PriceList;
