import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, Constant, Images, Responsive, ScreenName} from '../../../Theme';

import {MainHeaderView, LogoImage, styles} from './ProfileScreenStyles';
import {useIsFocused} from '@react-navigation/native';

const ProfileScreen = ({route, navigation}) => {
  const [latestSound, setlatestSound] = useState(0);
  const [totalSound, setTotalSound] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {}, []);

  function HeaderViewFunc() {
    return (
      <MainHeaderView>
        <LogoImage resizeMode="contain" source={Images.MainLogo} />
      </MainHeaderView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.whiteClr,
      }}>
      {HeaderViewFunc()}
      <Text>Hello Login</Text>
    </View>
  );
};

export default ProfileScreen;
