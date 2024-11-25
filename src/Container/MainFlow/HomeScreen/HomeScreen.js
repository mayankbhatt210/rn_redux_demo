import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, Constant, Images, Responsive, ScreenName} from '../../../Theme';

import {
  LogoImage,
  styles,
  ScreenContainer,
  HeaderContainer,
  TextContent,
} from './HomeScreenStyles';
import {useIsFocused} from '@react-navigation/native';
import {
  RegisterBtn,
  RegisterText,
} from '../../LoginFlow/Signin/SigninScreenStyles';
import LoginScreen from '../../../../Screens/Login';
import {useDispatch, useSelector} from 'react-redux';
import {postListAction} from '../../../redux/Auth/action';
import Screen from '../../../../Screens/screen';

const HomeScreen = ({routes, navigation}) => {
  const [latestSound, setlatestSound] = useState(0);
  const [totalSound, setTotalSound] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  useEffect(() => {
    getPostList();
  }, []);

  const getPostList = async () => {
    const objParam = new FormData();
    objParam.append('page', 1);
    objParam.append('limit', 10);
    try {
      const {payload: res} = await dispatch(postListAction(objParam));

      const {data, status, message} = res;
      if (status) {
        console.log('status--->', status);
        console.log('data--->', data);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log('Error', error);
    }
  };

  const logoutAction = () => {
    Constant.commonConstant.emitter.emit(Constant.eventListenerKeys.Logout);
  };

  function HeaderViewFunc() {
    return (
      <HeaderContainer>
        <LogoImage resizeMode="contain" source={Images.MainLogo} />
        <RegisterBtn onPress={() => logoutAction()}>
          <RegisterText>Logout</RegisterText>
        </RegisterBtn>
      </HeaderContainer>
    );
  }

  return (
    <ScreenContainer>
      {HeaderViewFunc()}
      <TextContent>Hello Login</TextContent>
    </ScreenContainer>
  );
};

export default HomeScreen;
