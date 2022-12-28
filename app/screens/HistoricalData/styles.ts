import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  periodContainer: {marginVertical: 8},
  periodSmallContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  selectPeriod: {
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginHorizontal: 3,
    backgroundColor: '#131316',
    borderRadius: 8,
  },
  unSelectPeriod: {
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginHorizontal: 3,
  },
  dateContainer: {
    marginVertical: 5,
  },
  dateText: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    color: 'white',
  },
  tilesContainer: {flexDirection: 'row', marginVertical: 8},
  tileLeftContainer: {flex: 1, marginRight: 8},
  tileRightContainer: {flex: 1, marginLeft: 8},
  tileSmallContainer: {padding: 5, alignItems: 'center'},
  tileTitle: {color: 'white', fontSize: 16, marginVertical: 2},
  tileSubTitle: {color: '#ABABAB', fontSize: 12, marginVertical: 2},
});

export default styles;
