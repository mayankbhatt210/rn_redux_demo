import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import store from './src/redux/store';
import {Provider} from 'react-redux';

import RouterComponent from './src/Router/Router';
import SplashScreen from './src/Container/LoginFlow/SplashScreen/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {commonConstant} from './src/Theme/Constants';
import {Constant} from './src/Theme';

import Axios from 'axios';
import ApiConfig from './src/ApiConfig';
function App() {
  const [loader, setLoader] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await AsyncStorage.getItem(Constant.asyncStorageKeys.LoginDetails)
      .then(async res => {
        if (res) {
          const newRes = JSON.parse(res);
          const headers = ApiConfig.headers;
          headers.Authorization = `Bearer ${newRes.token}`;
          Axios.defaults.headers = headers;
          ApiConfig.headers = headers;
          commonConstant.isLoggedIn = true;
          setLoader(false); // Stop the loader after 2 seconds
          setIsAuth(true); // Simulate authentication state
        } else {
          setLoader(false);
          setIsAuth(false);
          commonConstant.isLoggedIn = false;
          console.log('======== isLoggedIn False ===========');
        }
        // setLoader(false);
      })
      .catch(err => {
        console.log('Error==', err);
        commonConstant.isLoggedIn = false;
        setLoader(false);
      });
  };

  useEffect(() => {
    Constant.commonConstant.emitter.addListener(
      Constant.eventListenerKeys.Login,
      async () => {
        console.log('======== Login ===========');
        getData();
      },
    );

    Constant.commonConstant.emitter.addListener(
      Constant.eventListenerKeys.Logout,
      async () => {
        Constant.commonConstant.isLoggedIn = false;
        AsyncStorage.removeItem(Constant.asyncStorageKeys.UserData);
        AsyncStorage.removeItem(Constant.asyncStorageKeys.UserToken);
        AsyncStorage.removeItem(Constant.asyncStorageKeys.LoginDetails);
        await AsyncStorage.clear();

        let headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
        Axios.defaults.headers = headers;
        setIsAuth(false);
      },
    );
  });

  return loader ? (
    <SplashScreen isAuth={isAuth} />
  ) : (
    // <Provider store={store}>
    <SafeAreaView style={[{flex: 1}, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RouterComponent isAuthed={isAuth} isLoader={loader} />
    </SafeAreaView>
    // </Provider>
  );
}

export default App;
