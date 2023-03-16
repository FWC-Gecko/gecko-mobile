import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import FilterButton from 'app/components/FilterButton';
import PriceList from 'app/components/PriceList';

import {PlusIcon, EllipsisIcon} from 'app/theme/icons';

import ThemeContext from 'app/context/ThemeContext';

import styles from './styles';

interface WatchlistsProps {}

const Watchlists: React.FC<WatchlistsProps> = () => {
  const onUSD = () => {};
  const on24Percent = () => {};
  const onAdd = () => {};
  const onEllipsis = () => {};
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.filterContainer}>
              <FilterButton title="USD" onPress={onUSD} />
              <FilterButton title="24%" onPress={on24Percent} />
            </View>
            <View style={styles.filterContainer}>
              <TouchableOpacity onPress={onAdd}>
                <View
                  style={[
                    styles.button,
                    {backgroundColor: theme.colors.itembackground},
                  ]}>
                  <PlusIcon color={theme.colors.textcolor} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onEllipsis}>
                <View
                  style={[
                    styles.button,
                    {backgroundColor: theme.colors.itembackground},
                  ]}>
                  <EllipsisIcon color={theme.colors.textcolor} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <PriceList />
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Watchlists;
