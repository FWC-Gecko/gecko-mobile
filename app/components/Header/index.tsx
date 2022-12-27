import React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Images from 'app/theme/images';
import {SearchIcon, FavoriteIcon, ExportIcon, BackIcon} from 'app/theme/icons';

interface HeaderProps {
  mode: 'profile' | 'detail';
  style?: any;
}

const Header: React.FC<HeaderProps> = ({mode, style}) => {
  const onProfileAvatar = () => {};
  const onDiamond = () => {};
  const onSearch = () => {};
  return (
    <View style={[styles.header, style]}>
      <Image source={Images.bg_header} style={styles.bg} />
      <View style={styles.content}>
        <View style={styles.leftSide}>
          {mode === 'detail' && (
            <TouchableOpacity onPress={onDiamond}>
              <BackIcon color="#B9C1D9" size={18} />
            </TouchableOpacity>
          )}
          {mode === 'profile' && (
            <>
              <TouchableOpacity onPress={onProfileAvatar}>
                <Image
                  source={Images.profile_default_avatar}
                  style={styles.profileAvatar}
                />
              </TouchableOpacity>
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'white'}}>ETH Gas</Text>
                <Text style={{color: '#B9C1D9'}}>23 Gwei</Text>
              </View>
            </>
          )}
        </View>
        <View style={styles.rightSide}>
          {mode === 'profile' && (
            <TouchableOpacity onPress={onDiamond}>
              <View style={styles.button}>
                <Image source={Images.diamond} />
              </View>
            </TouchableOpacity>
          )}
          {mode === 'detail' && (
            <>
              <TouchableOpacity onPress={onDiamond}>
                <View style={styles.button}>
                  <ExportIcon color="#B9C1D9" size={18} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onDiamond}>
                <View style={styles.button}>
                  <FavoriteIcon color="#B9C1D9" size={18} />
                </View>
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity onPress={onSearch}>
            <View style={styles.button}>
              <SearchIcon color="#B9C1D9" size={18} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
