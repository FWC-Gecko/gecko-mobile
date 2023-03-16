/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import {CombinedDefaultTheme, CombinedDarkTheme} from 'app/config/theme-config';
import Navigator from 'app/navigation';
import configureStore from 'app/store';
import {IThemeState} from 'app/models/reducers/theme';

import ThemeContext from 'app/context/ThemeContext';

const {persistor, store} = configureStore();

interface IState {
  themeReducer: IThemeState;
}

const RootNavigation: React.FC = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <ThemeContext.Provider value={combinedTheme}>
      <Navigator theme={combinedTheme} />
    </ThemeContext.Provider>
  );
};

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default EntryPoint;
