import React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Images from 'app/theme/images';

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
      <Image source={Images.bg_price_list_item} style={styles.bg} />
      <View style={styles.content}>
        <View style={styles.leftSide}>
          <Image
            source={{
              uri: icon,
            }}
            style={styles.icon}
          />
          <View style={styles.leftRightSide}>
            <Text style={styles.price}>{name}</Text>
            <Text style={styles.marketcap}>{marketCap}</Text>
          </View>
        </View>
        <View style={styles.middleSide}>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.dayPercent}>{dayPercent}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PriceListItem;
