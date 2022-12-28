import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    margin: 3,
  },
  light: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  bullishDark: {
    backgroundColor: '#14C881',
  },
  bearishDark: {
    backgroundColor: '#DF2040',
  },
  text: {
    marginLeft: 3,
    color: 'white',
  },
});

export default styles;
