import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  contentContainer: {alignItems: 'flex-start', padding: 10},
  description: {color: 'white', marginVertical: 3},
  readAllContainer: {alignItems: 'flex-end', width: '100%', marginVertical: 5},
  readAll: {color: '#BA4DF9'},
  splitter: {
    borderTopWidth: 1,
    borderTopColor: '#575353',
    width: '100%',
    marginVertical: 3,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerElement: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerElementText: {
    marginLeft: 3,
    color: '#B9C1D9',
  },
});

export default styles;
