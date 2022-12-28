import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 35,
    marginVertical: 5,
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default styles;
