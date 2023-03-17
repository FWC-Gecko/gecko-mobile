import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    position: 'absolute',
    top: 80,
    width: '100%',
    alignItems: 'center',
    zIndex: 2,
  },
  avatar: {width: 50, height: 50, borderRadius: 4},
  name: {marginVertical: 3, fontSize: 16},
  smallName: {color: '#ADADAD', fontSize: 12},
  contentContainer: {flex: 1, marginVertical: 50},
  contentSmallContainer: {
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 60,
  },
});

export default styles;
