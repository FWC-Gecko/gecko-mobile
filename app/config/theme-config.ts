import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

export const CombinedDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    background: '#ffffff',
    itembackground: '#EFEFEF',
    subitembackground: '#FFFFFF',
    itemcolor: '#9E9E9E',
    textcolor: '#000000',
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
    card: '#222222',
    text: '#ffffff',
  },
};
