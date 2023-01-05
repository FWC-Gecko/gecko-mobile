import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    height: height - 30,
  },
  avatarBackground: {
    width,
    height: height / 3,
    backgroundColor: '#C4C4C422',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    width: width / 2,
    height: height / 3,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  content: {
    marginVertical: 10,
    marginHorizontal: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  forgot: {
    color: '#7D7582',
    fontSize: 14,
    textAlign: 'right',
  },
  signupTitle: {
    color: '#ffffffaa',
  },
  signup: {
    color: '#ffffffaa',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
  },
});

export default styles;
