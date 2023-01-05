import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import FilterButton from 'app/components/FilterButton';
import PriceList from 'app/components/PriceList';

import {PlusIcon, EllipsisIcon} from 'app/theme/icons';

import styles from './styles';

interface WatchlistsProps {}

const Watchlists: React.FC<WatchlistsProps> = () => {
  const onUSD = () => {};
  const on24Percent = () => {};
  const onAdd = () => {};
  const onEllipsis = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.filterContainer}>
          <FilterButton title="USD" onPress={onUSD} />
          <FilterButton title="24%" onPress={on24Percent} />
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={onAdd}>
            <View style={styles.button}>
              <PlusIcon color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onEllipsis}>
            <View style={styles.button}>
              <EllipsisIcon color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <PriceList />
      </View>
    </View>
  );
};

export default Watchlists;
