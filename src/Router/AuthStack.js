import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ScreenName} from '../Theme';
import SigninScreen from '../Container/LoginFlow/Signin/SigninScreen';
import SignupScreen from '../Container/LoginFlow/Signup/SignupScreen';

const AuthStackNavigator = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <AuthStackNavigator.Screen
        name={ScreenName.SigninScreen}
        component={SigninScreen}
      />
      <AuthStackNavigator.Screen
        name={ScreenName.SignupScreen}
        component={SignupScreen}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;
