import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap'},
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  selectRadio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#BA4DF9',
    borderColor: '#54555A',
    borderWidth: 2,
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#54555A',
  },
  label: {
    color: '#D0D0DD',
    marginLeft: 5,
    fontSize: 12,
  },
});

export default styles;
