import * as React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import {navigationRef} from './NavigationService';

import Login from 'app/screens/Login';
import SignUp from 'app/screens/SignUp';
import ForgotPassword from 'app/screens/ForgotPassword';
import Markets from 'app/screens/Markets';
import CoinDetail from 'app/screens/CoinDetail';
import Profile from 'app/screens/Profile';

import {ILoginState} from 'app/models/reducers/login';

import ThemeContext from 'app/context/ThemeContext';

import {
  CoinsIcon,
  GraphPieIcon,
  AccessPointIcon,
  SearchIcon,
} from 'app/theme/icons';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const MarketsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const headerOptions = {
  headerShown: false,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <Stack.Screen name="LogIn" component={Login} options={headerOptions} />
      <Stack.Screen name="SignUp" component={SignUp} options={headerOptions} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={headerOptions}
      />
    </AuthStack.Navigator>
  );
};

const MarketsNavigator = () => {
  return (
    <MarketsStack.Navigator>
      <Stack.Screen
        name="MarketsHome"
        component={Markets}
        options={headerOptions}
      />
      <Stack.Screen
        name="CoinDetail"
        component={CoinDetail}
        options={headerOptions}
      />
    </MarketsStack.Navigator>
  );
};

const HomeTab: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View style={styles.container}>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                position: 'absolute',
                borderTopWidth: 0,
                paddingBottom: 3,
              },
              tabBarBackground: () => (
                <View
                  style={[
                    styles.tabBarBackground,
                    {backgroundColor: theme.colors.bottombackground},
                  ]}
                />
              ),
              headerShown: false,
              tabBarActiveTintColor: '#5B7FED',
              tabBarInactiveTintColor: '#B9C1D9',
              tabBarShowLabel: true,
            }}>
            <Tab.Screen
              name="Markets"
              component={MarketsNavigator}
              options={{
                tabBarIcon: ({color}) => (
                  <View style={styles.center}>
                    <CoinsIcon color={color} size={16} />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Explore"
              component={Profile}
              options={{
                tabBarIcon: ({color}) => (
                  <View style={styles.center}>
                    <SearchIcon color={color} size={16} />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Portfolio"
              component={Profile}
              options={{
                tabBarIcon: ({color}) => (
                  <View style={styles.center}>
                    <GraphPieIcon color={color} size={18} />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Community"
              component={Markets}
              options={{
                tabBarIcon: ({color}) => (
                  <View style={styles.center}>
                    <AccessPointIcon color={color} size={20} />
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

const App: React.FC<IProps> = (props: IProps) => {
  const {theme} = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={headerOptions}
        />
        <Stack.Screen name="Home" component={HomeTab} options={headerOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarBackground: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
});

export default App;
