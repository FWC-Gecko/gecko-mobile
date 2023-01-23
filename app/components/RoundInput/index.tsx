import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  EyeIcon,
  EyeWithLineIcon,
  DownIcon,
  CalendarIcon,
} from 'app/theme/icons';

import styles from './styles';

interface RoundInputProps {
  label?: string;
  data?: string[]; //  Select Box
  defaultButtonText?: string; //  Select Box
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'date'
    | 'number'
    | 'select'
    | 'calendar';
  placeholder: string;
  onChangeText: (text: string) => void;
  comment?: string;
}

const RoundInput: React.FC<RoundInputProps> = ({
  label,
  defaultButtonText = 'Select One',
  data = [],
  type,
  comment,
  placeholder,
  onChangeText,
}) => {
  const [showCalender, setShowCalender] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.container}>
      {label && label.length && <Text style={styles.label}>{label}</Text>}
      <View
        style={
          type !== 'select' ? styles.inputContainer : styles.selectContainer
        }>
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
        {type === 'number' && (
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#9E9E9E"
            keyboardType="number-pad"
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
                <EyeIcon color="#9E9E9EB2" size={16} />
              ) : (
                <EyeWithLineIcon color="#9E9E9EB2" size={16} />
              )}
            </TouchableOpacity>
          </View>
        )}
        {type === 'calendar' && (
          <View style={styles.inputContainerWithIcon}>
            <TextInput
              value={formattedDate(date)}
              style={[styles.input, styles.flex]}
              editable={false}
              placeholder={placeholder}
              placeholderTextColor="#9E9E9E"
            />
            <TouchableOpacity
              onPress={() => {
                setShowCalender(true);
              }}>
              <CalendarIcon color="#9E9E9EB2" size={16} />
            </TouchableOpacity>
            {showCalender && (
              <DateTimePicker
                value={date}
                onChange={(event, selectedDate) => {
                  setShowCalender(false);
                  setDate(selectedDate ? selectedDate : new Date());
                  onChangeText(
                    selectedDate
                      ? formattedDate(selectedDate)
                      : formattedDate(new Date()),
                  );
                }}
              />
            )}
          </View>
        )}
        {type === 'select' && (
          <SelectDropdown
            data={data}
            defaultButtonText={defaultButtonText}
            onSelect={selectedItem => {
              onChangeText(selectedItem);
            }}
            buttonStyle={styles.selectButtonStyle}
            buttonTextStyle={styles.selectButtonTextStyle}
            renderDropdownIcon={() => <DownIcon color="white" size={16} />}
            onChangeSearchInputText={() => {}}
            dropdownStyle={styles.selectDropdownStyle}
            rowStyle={styles.selectRowStyle}
            rowTextStyle={styles.selectRowTextStyle}
          />
        )}
      </View>
      {comment && comment.length && (
        <Text style={styles.comment}>{comment}</Text>
      )}
    </View>
  );
};

const formattedDate = (date: Date) => date.toISOString().split('T')[0];

export default RoundInput;
