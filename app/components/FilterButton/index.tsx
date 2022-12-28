import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './styles';

interface FilterButtonProps {
  title: string;
  onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
