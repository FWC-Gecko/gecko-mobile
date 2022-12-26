import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {navigationRef} from './NavigationService';

import GetStarted from 'app/screens/GetStarted';
import Login from 'app/screens/Login';
import SignUp from 'app/screens/SignUp';
import ForgotPassword from 'app/screens/ForgotPassword';
import HomeTab from './HomeTab';

import {StatusBar} from 'react-native';
import {ILoginState} from 'app/models/reducers/login';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

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

// const LoggedInNavigator = () => (
//   <LoggedInStack.Navigator>
//     <Stack.Screen name="Home" component={Home} options={headerOptions} />
//   </LoggedInStack.Navigator>
// );

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
          name="GetStarted"
          component={GetStarted}
          options={headerOptions}
        />
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={headerOptions}
        />
        <Stack.Screen name="Home" component={HomeTab} options={headerOptions} />
        {/* {isLoggedIn ? (
          <Stack.Screen
            name="Main"
            component={LoggedInNavigator}
            options={headerOptions}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={headerOptions}
          />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
