import React from 'react';
import {View} from 'react-native';

import FilterButton from 'app/components/FilterButton';
import PriceList from 'app/components/PriceList';

import styles from './styles';

interface CoinsProps {}

const Coins: React.FC<CoinsProps> = () => {
  const onUSD = () => {};
  const on24Percent = () => {};
  const onTop100 = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <FilterButton title="USD" onPress={onUSD} />
        <FilterButton title="24%" onPress={on24Percent} />
        <FilterButton title="Top 100" onPress={onTop100} />
      </View>
      <View style={styles.container}>
        <PriceList />
      </View>
    </View>
  );
};

export default Coins;
