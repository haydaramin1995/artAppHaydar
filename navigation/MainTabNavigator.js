import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ClientScreen from '../screens/ClientScreen';
import UserScreen from '../screens/UserScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// Home screen
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// Client screen
const ClientPageStack = createStackNavigator(
  {
    Links: ClientScreen,
  },
  config
);

ClientPageStack.navigationOptions = {
  tabBarLabel: 'Client',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-' : 'md-'} />
  )
};

// User screen
const UserPageStack = createStackNavigator(
  {
    Links: UserScreen,
  },
  config
);

UserPageStack.navigationOptions = {
  tabBarLabel: 'User',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-' : 'md-'} />
  )
};


// paths for Screens
ClientPageStack.path = '';
HomeStack.path = '';
UserPageStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ClientPageStack,
  UserPageStack,
});

tabNavigator.path = '';

export default tabNavigator;
