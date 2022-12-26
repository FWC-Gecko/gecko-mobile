import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width,
    height: width,
  },
});

export default styles;
