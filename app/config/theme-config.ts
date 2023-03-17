import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

export const CombinedDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    background: '#FFFFFF',
    itembackground: '#EFEFEF',
    subitembackground: '#FFFFFF',
    itemcolor: '#9E9E9E',
    textcolor: '#000000',
    bottombackground: '#FFFFFF',
    elementbackground: '#EFEFEF',
  },
};

export const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#000000',
    itembackground: '#232323',
    subitembackground: '#332C4F',
    itemcolor: '#FFFFFF',
    textcolor: '#FFFFFF',
    bottombackground: '#212126',
    elementbackground: '#C4C4C422',
  },
};
