import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 32,
    height: 32,
    backgroundColor: '#4E3564',
    margin: 5,
  },
  leftSide: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  rightSide: {flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},
});

export default styles;
