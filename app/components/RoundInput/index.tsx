import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';

interface RoundInputProps {
  label?: string;
  type: 'text' | 'email' | 'password' | 'date' | 'number';
  placeholder: string;
  onChangeText: () => void;
  comment?: string;
}

const RoundInput: React.FC<RoundInputProps> = ({
  label,
  type,
  comment,
  placeholder,
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={styles.container}>
      {label && label.length && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {type === 'text' && (
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#9E9E9E"
          />
        )}
        {type === 'email' && (
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#9E9E9E"
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
        )}
        {type === 'password' && (
          <View style={styles.inputContainerWithIcon}>
            <TextInput
              style={[styles.input, styles.flex]}
              onChangeText={onChangeText}
              placeholder={placeholder}
              placeholderTextColor="#9E9E9E"
              autoComplete="password"
              textContentType="password"
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}>
              {showPassword ? (
                <EntypoIcon name="eye" color="#9E9E9EB2" size={16} />
              ) : (
                <EntypoIcon name="eye-with-line" color="#9E9E9EB2" size={16} />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
      {comment && comment.length && (
        <Text style={styles.comment}>{comment}</Text>
      )}
    </View>
  );
};

export default RoundInput;
