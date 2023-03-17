import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  chatContainer: {
    padding: 10,
    borderRadius: 10,
  },
  chatText: {fontSize: 16, marginVertical: 5},
  chatTopSide: {flexDirection: 'row', justifyContent: 'space-between'},
  chatBBContainer: {flexDirection: 'row', justifyContent: 'flex-end'},
  commentContainer: {
    flex: 1,
    marginVertical: 5,
  },
});

export default styles;
