import styled from 'styled-components/native';
import {Colors, Responsive, Fonts} from '../../../Theme';
import {Platform, StyleSheet} from 'react-native';

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${Colors.whiteClr};
`;

// Header container styles
export const HeaderContainer = styled.View`
  width: 100%;
  height: ${Responsive.heightPercentageToDP('7.5%')}px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.headerBgColor}; /* Example Header Background */
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.borderColor};
  flex-direction: row;
  justify-content: space-between;
`;

// Logo image styling
export const LogoImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('40%')}px;
  height: ${Responsive.heightPercentageToDP('8%')}px;
`;

export const TextContent = styled.Text`
  color: ${Colors.textClr};
  font-size: ${Responsive.convertFontScale('2%')}px;
  text-align: center;
  margin-top: 20px;
`;

export const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});
