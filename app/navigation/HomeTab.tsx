import React from 'react';
import {View, Image} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Markets from 'app/screens/Markets';

const Tab = createBottomTabNavigator();

const HomeTab: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            borderTopWidth: 0,
            paddingBottom: 3,
          },
          tabBarBackground: () => (
            <View style={{flex: 1, backgroundColor: '#212126'}} />
          ),
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: '#5B7FED',
          inactiveTintColor: '#B9C1D9',
          showLabel: true,
        }}>
        <Tab.Screen
          name="Markets"
          component={Markets}
          options={{
            tabBarIcon: ({color, size}) => (
              <View style={{alignItems: 'center'}}>
                {/* <Image
                  style={[
                    styles.image,
                    {tintColor: color, height: 20, width: 20},
                  ]}
                  source={Images.balance}
                /> */}
                <FontAwesomeIcon name="coins" color={color} size={16} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Markets}
          options={{
            tabBarIcon: ({color, size}) => (
              <View style={{alignItems: 'center'}}>
                {/* <Image
                  style={[
                    styles.image,
                    {tintColor: color, height: 20, width: 20},
                  ]}
                  source={Images.balance}
                /> */}
                <FontAwesomeIcon name="search" color={color} size={16} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={Markets}
          options={{
            tabBarIcon: ({color, size}) => (
              <View style={{alignItems: 'center'}}>
                {/* <Image
                  style={[
                    styles.image,
                    {tintColor: color, height: 20, width: 20},
                  ]}
                  source={Images.balance}
                /> */}
                <FoundationIcon name="graph-pie" color={color} size={18} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={Markets}
          options={{
            tabBarIcon: ({color, size}) => (
              <View style={{alignItems: 'center'}}>
                {/* <Image
                  style={[
                    styles.image,
                    {tintColor: color, height: 20, width: 20},
                  ]}
                  source={Images.balance}
                /> */}
                <MaterialCommunityIcon
                  name="access-point"
                  color={color}
                  size={20}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeTab;
