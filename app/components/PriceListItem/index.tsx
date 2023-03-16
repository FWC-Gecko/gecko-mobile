import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import ThemeContext from 'app/context/ThemeContext';

import styles from './styles';

interface PriceListItemProps {
  icon: string;
  name: string;
  marketCap: string;
  price: number;
  dayPercent: number;
  onPress: () => void;
}

const PriceListItem: React.FC<PriceListItemProps> = ({
  icon,
  name,
  marketCap,
  price,
  dayPercent,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ThemeContext.Consumer>
        {theme => (
          <View
            style={[
              styles.content,
              {backgroundColor: theme.colors.itembackground},
            ]}>
            <View style={styles.leftSide}>
              <Image
                source={{
                  uri: icon,
                }}
                style={styles.icon}
              />
              <View style={styles.leftRightSide}>
                <Text style={[styles.price, {color: theme.colors.textcolor}]}>
                  {name}
                </Text>
                <Text style={styles.marketcap}>{marketCap}</Text>
              </View>
            </View>
            <View style={styles.middleSide}>
              <Text style={[styles.price, {color: theme.colors.textcolor}]}>
                {price}
              </Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.dayPercent}>{dayPercent}</Text>
            </View>
          </View>
        )}
      </ThemeContext.Consumer>
    </TouchableOpacity>
  );
};

export default PriceListItem;
