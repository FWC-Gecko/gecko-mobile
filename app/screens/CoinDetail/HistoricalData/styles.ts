import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  periodContainer: {marginVertical: 8, borderRadius: 10},
  periodSmallContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  selectPeriod: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginHorizontal: 3,
    borderRadius: 8,
  },
  unSelectPeriod: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginHorizontal: 3,
  },
  dateContainer: {
    marginVertical: 5,
    borderRadius: 10,
  },
  dateText: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  tilesContainer: {flexDirection: 'row', marginVertical: 8},
  tileLeftContainer: {flex: 1, marginRight: 8, borderRadius: 10},
  tileRightContainer: {flex: 1, marginLeft: 8, borderRadius: 10},
  tileSmallContainer: {padding: 5, alignItems: 'center'},
  tileTitle: {fontSize: 16, marginVertical: 2},
  tileSubTitle: {color: '#ABABAB', fontSize: 12, marginVertical: 2},
});

export default styles;
