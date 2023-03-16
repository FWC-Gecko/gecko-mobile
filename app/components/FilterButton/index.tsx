import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import ThemeContext from 'app/context/ThemeContext';

import styles from './styles';

interface FilterButtonProps {
  title: string;
  onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({title, onPress}) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <TouchableOpacity onPress={onPress}>
          <Text
            style={[
              styles.title,
              {backgroundColor: theme.colors.itembackground},
              {color: theme.colors.textcolor},
            ]}>
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </ThemeContext.Consumer>
  );
};

export default FilterButton;
