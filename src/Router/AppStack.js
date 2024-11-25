import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../Container/MainFlow/Profile/ProfileScreen';
import HomeScreen from '../Container/MainFlow/HomeScreen/HomeScreen';
import {ScreenName} from '../Theme';

const AppStackNavigator = createStackNavigator();

const AppStack = () => {
  return (
    <AppStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <AppStackNavigator.Screen
        name={ScreenName.HomeScreen}
        component={HomeScreen}
      />
      <AppStackNavigator.Screen
        name={ScreenName.ProfileScreen}
        component={ProfileScreen}
      />
    </AppStackNavigator.Navigator>
  );
};

export default AppStack;
