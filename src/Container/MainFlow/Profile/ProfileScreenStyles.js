import styled from 'styled-components/native';
import {Colors, Responsive, Fonts} from '../../../Theme';
import {Platform, StyleSheet} from 'react-native';

export const MainHeaderView = styled.View`
  padding-top: ${Responsive.heightPercentageToDP('10%')}px;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.Image`
  height: ${Responsive.heightPercentageToDP('10%')}px;
  width: ${Responsive.widthPercentageToDP('65%')}px;
`;
export const MainComponentView = styled.View`
  flex: 1;
  /* justify-content: center; */
  padding-top: ${Responsive.heightPercentageToDP('10%')}px;
  align-items: center;
`;
export const MainBorderView = styled.View`
  height: ${Responsive.heightPercentageToDP('36.6')}px;
  width: ${Responsive.widthPercentageToDP('90')}px;
  border-width: 1px;
  border-radius: 20px;
  border-color: ${Colors.borderShadedClr};
  padding-top: ${Responsive.heightPercentageToDP('2%')}px;
  padding-bottom: ${Responsive.heightPercentageToDP('2%')}px;
  background: ${Colors.whiteClr};
`;
export const TotalSountView = styled.View`
  flex-direction: row;
  width: ${Responsive.widthPercentageToDP('75%')}px;
  align-self: center;
  justify-content: space-between;
`;
export const TotalSountText = styled.Text`
  font-size: ${Responsive.convertFontScale('20')}px;
  font-family: ${Fonts.fonts.SourceSansProSemibold};
  color: ${Colors.textClr};
`;
export const TotalCount = styled.Text`
  color: ${Colors.textClr};
  font-size: ${Responsive.convertFontScale('20')}px;
  font-family: ${Fonts.fonts.SourceSansProSemibold};
`;
export const LastSountView = styled.View`
  flex-direction: row;
  width: ${Responsive.widthPercentageToDP('75%')}px;
  align-self: center;
  justify-content: space-between;
  margin-top: ${Responsive.heightPercentageToDP('3%')}px;
`;

export const CreateMySountView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const CreateSountButton = styled.TouchableOpacity``;
export const CreateSountText = styled.Text`
  color: ${Colors.whiteClr};
  font-size: ${Responsive.convertFontScale('18')}px;
  font-family: ${Fonts.fonts.SourceSansProSemibold};
`;
export const AlreadyCreateSoundView = styled.View`
  flex: 0.3;
  flex-direction: row;
  width: ${Responsive.widthPercentageToDP('75%')}px;
  align-self: center;
  justify-content: space-between;
  align-items: center;
`;
export const AllSoundsText = styled.Text`
  font-size: ${Responsive.convertFontScale('20')}px;
  font-family: ${Fonts.fonts.SourceSansProSemibold};
  color: ${Colors.textClr};
`;
export const ViewAllBtn = styled.TouchableOpacity`
  /* border-width: 1px; */
  justify-content: center;
  align-items: center;
`;
export const ViewAllText = styled.Text`
  color: ${Colors.blueClr};
  font-size: ${Responsive.convertFontScale('18')}px;
  font-family: ${Fonts.fonts.SourceSansProSemibold};
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
