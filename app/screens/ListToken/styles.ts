import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: height - 30,
  },
  content: {flex: 1, marginHorizontal: 15, marginTop: 10, marginBottom: 50},
});

export default styles;
