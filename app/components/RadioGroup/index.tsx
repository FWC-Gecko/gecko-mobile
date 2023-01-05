import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';

import styles from './styles';

interface RadioProps {
  label: string;
}

interface RadioGroupProps {
  items: RadioProps[];
  onSelect?: (item: number) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({items, onSelect}) => {
  const [item, setItem] = useState(-1);

  const onPress = (index: number) => {
    setItem(index);
    onSelect && onSelect(index);
  };
  return (
    <View style={styles.container}>
      {items.map((i: RadioProps, index: number) => (
        <Pressable key={index} onPress={() => onPress(index)}>
          <View style={styles.radioContainer}>
            {item === index ? (
              <View style={styles.selectRadio} />
            ) : (
              <View style={styles.radio} />
            )}
            <Text style={styles.label}>{i.label}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default RadioGroup;
