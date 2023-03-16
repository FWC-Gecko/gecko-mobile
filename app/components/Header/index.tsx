import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as themeActions from 'app/store/actions/themeActions';
import {IThemeState} from 'app/models/reducers/theme';

interface IState {
  themeReducer: IThemeState;
}

import NavigationService from 'app/navigation/NavigationService';

import CustomAvatar from 'app/components/CustomAvatar';

import ThemeContext from 'app/context/ThemeContext';

import {
  SearchIcon,
  FavoriteIcon,
  ExportIcon,
  BackIcon,
  DiamondIcon,
  SunIcon,
  MoonIcon,
} from 'app/theme/icons';

import styles from './styles';

interface HeaderProps {
  mode: 'profile' | 'detail';
  style?: any;
}

const Header: React.FC<HeaderProps> = ({mode, style}) => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);

  const dispatch = useDispatch();
  const onToggleTheme = () => dispatch(themeActions.setIsDarkTheme(!isDark));

  const onDiamond = () => {};
  const onSearch = () => {};
  const onBack = () => NavigationService.goBack();
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View style={[styles.header, style]}>
          <View style={styles.content}>
            <View style={styles.leftSide}>
              {mode === 'detail' && (
                <>
                  <TouchableOpacity onPress={onBack}>
                    <BackIcon color="#9E9E9E" size={18} />
                  </TouchableOpacity>
                  <CustomAvatar title="USDT" subtitle="#3" />
                </>
              )}
              {mode === 'profile' && (
                <CustomAvatar title="USDT" subtitle="#3" />
              )}
            </View>
            <View style={styles.rightSide}>
              {mode === 'profile' && (
                <>
                  <TouchableOpacity onPress={onToggleTheme}>
                    {isDark ? (
                      <View
                        style={[
                          styles.button,
                          {backgroundColor: theme.colors.itembackground},
                        ]}>
                        <SunIcon size={18} color="#FFFFFF" />
                      </View>
                    ) : (
                      <View
                        style={[
                          styles.button,
                          {backgroundColor: theme.colors.itembackground},
                        ]}>
                        <MoonIcon size={18} color="#000000" />
                      </View>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onDiamond}>
                    <View
                      style={[
                        styles.button,
                        {backgroundColor: theme.colors.itembackground},
                      ]}>
                      <DiamondIcon size={16} />
                    </View>
                  </TouchableOpacity>
                </>
              )}
              {mode === 'detail' && (
                <>
                  <TouchableOpacity onPress={onDiamond}>
                    <View
                      style={[
                        styles.button,
                        {backgroundColor: theme.colors.itembackground},
                      ]}>
                      <ExportIcon color="#9E9E9E" size={18} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onDiamond}>
                    <View
                      style={[
                        styles.button,
                        {backgroundColor: theme.colors.itembackground},
                      ]}>
                      <FavoriteIcon color="#9E9E9E" size={18} />
                    </View>
                  </TouchableOpacity>
                </>
              )}
              <TouchableOpacity onPress={onSearch}>
                <View
                  style={[
                    styles.button,
                    {backgroundColor: theme.colors.itembackground},
                  ]}>
                  <SearchIcon color="#9E9E9E" size={18} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
