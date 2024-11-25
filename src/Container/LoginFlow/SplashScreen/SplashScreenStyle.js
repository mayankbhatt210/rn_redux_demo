import styled from 'styled-components/native';
import {Colors, Fonts, Responsive} from '../../../Theme';

export const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const MainLogoImage = styled.ImageBackground`
  height: ${Responsive.heightPercentageToDP('62%')}px;
  width: ${Responsive.widthPercentageToDP('128%')}px;
  justify-content: center;
  align-items: center;
`;
export const MainLogo = styled.Image`
  height: ${Responsive.heightPercentageToDP('13%')}px;
  width: ${Responsive.widthPercentageToDP('80%')}px;
`;
