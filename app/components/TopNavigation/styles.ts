import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    padding: 5,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  activeTitleView: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
  },
});

export default styles;
