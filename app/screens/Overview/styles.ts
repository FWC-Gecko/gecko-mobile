import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  priceTextOne: {color: '#C2C2C2', marginHorizontal: 5},
  priceTextThree: {color: 'white', fontSize: 18},
  priceLeftSide: {
    flex: 1,
  },
  priceLeftSmallSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceRightSmallSide: {
    backgroundColor: '#212126',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  priceRightSide: {flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},
  chartContainer: {
    marginVertical: 10,
  },
  periodContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  selectPeriod: {
    color: '#131316',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
  },
  unSelectPeriod: {color: 'white', padding: 5},
  chart: {
    width: '100%',
    marginVertical: 10,
  },
  chartSmall: {
    paddingVertical: 10,
  },
  customChartLabel: {
    color: 'white',
    marginLeft: 30,
    fontSize: 12,
  },
  chartYAxis: {
    color: '#EFEFEF',
  },
  bottomRightSide: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default styles;
