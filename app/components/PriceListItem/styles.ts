import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    marginVertical: 3,
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
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  leftSide: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  leftRightSide: {marginLeft: 5},
  middleSide: {flex: 1},
  rightSide: {flex: 1, alignItems: 'flex-end'},
  icon: {width: 24, height: 24, borderRadius: 12},
  price: {color: 'white', fontSize: 12},
  marketcap: {color: '#A7A7A7', fontSize: 12},
  dayPercent: {color: '#DF2040', fontSize: 12},
});

export default styles;
