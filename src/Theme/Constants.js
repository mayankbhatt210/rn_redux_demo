import {Dimensions} from 'react-native';
import APIConfig from '../ApiConfig/index';
import {name as appName} from '../../app.json';
import {showAlert} from '../Functions/Alerts';
var {EventEmitter} = require('fbemitter');
const axiosDefaults = require('axios/lib/defaults');

export const setUserData = UserData => {
  let headers = APIConfig.headers;
  if (UserData && UserData.token) {
    debugLog('User Data :==> \n' + JSON.stringify(UserData));
    headers.Authorization = UserData.token;
    commonConstant.appUser = UserData.userDetail;
  }
  axiosDefaults.headers = headers;
};

export const commonConstant = {
  /// Screen Width And Height
  appName: 'ReduxDemo',
  scrWidth: Dimensions.get('screen').width,
  scrHeight: Dimensions.get('screen').height,

  /// Other Misc Constants
  emitter: new EventEmitter(),
  timeFormat: 'YYYY-MM-DD HH:mm:ss',
  appUser: null,
  isRemember: '',
  isSubscribe: '',
  appState: '',
  isAdmin: false,
  sportsCategory: [],
  isDarkMode: false,
  isLoggedIn: false,
};

export const asyncStorageKeys = {
  UserData: 'UserData',
  UserToken: 'UserToken',
  LoginDetails: 'LoginDetails',
};

export const eventListenerKeys = {
  Login: 'Login',
  Logout: 'Logout',
  loginEvent: 'loginEvent',
  logoutEvent: 'logoutEvent',
  onTabChange: 'onTabChange',
  killProcess: 'killProcess',
};

export const API = {
  login: '/api/v1/user/auth/login',
  signup: '/api/v1/user/auth/register-user',
};

export const apiResponse = {
  success: 200,
  fail: 500,
};

export function errorHandle(response) {
  if (response && response.data && response.data.message) {
    showAlert(response.data.message);
  } else {
    showAlert('Please try again');
  }
}

export default {
  commonConstant,
  API,
  asyncStorageKeys,
  setUserData,
  eventListenerKeys,
  errorHandle,
  apiResponse,
};
