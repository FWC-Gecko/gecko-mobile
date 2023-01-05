import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  label: {
    color: 'white',
  },
  inputContainer: {
    backgroundColor: '#C4C4C422',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  selectContainer: {
    backgroundColor: '#C4C4C422',
    borderRadius: 10,
    marginVertical: 5,
  },
  input: {
    padding: 0,
    color: 'white',
  },
  inputContainerWithIcon: {flexDirection: 'row', alignItems: 'center'},
  flex: {
    flex: 1,
  },
  comment: {
    color: '#7D7582',
    fontSize: 12,
  },
  //  Select Box
  selectButtonStyle: {
    backgroundColor: '#FFFFFF00',
    width: '100%',
    height: 40,
  },
  selectButtonTextStyle: {
    color: 'white',
    fontSize: 16,
  },
  selectDropdownStyle: {backgroundColor: '#212126'},
  selectRowStyle: {borderBottomWidth: 0},
  selectRowTextStyle: {color: 'white'},
});

export default styles;
