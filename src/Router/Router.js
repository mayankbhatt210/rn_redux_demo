import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const RouterComponent = ({isAuthed}) => {
  const theme = useColorScheme();

  useEffect(() => {
    console.log('Authentication Status:', isAuthed);
  }, [isAuthed]); // Added isAuthed as a dependency

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      {isAuthed ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RouterComponent;
