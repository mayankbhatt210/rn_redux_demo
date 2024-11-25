import React, {useEffect, useState} from 'react';
import {Images, ScreenName} from '../../../Theme';
import {Container, MainLogoImage, MainLogo} from './SplashScreenStyle';

export default function SplashScreen(props) {
  return (
    <Container>
      <MainLogoImage resizeMode="contain" source={Images.SpleshBackgroundImg}>
        <MainLogo resizeMode="contain" source={Images.MainLogo} />
      </MainLogoImage>
    </Container>
  );
}
