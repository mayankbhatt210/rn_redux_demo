import { Platform, StyleSheet } from "react-native";
import { Colors, Responsive, Fonts } from "../../Theme";
import styled from "styled-components/native";

export const MessageText = styled.Text`
  font-family: ${Fonts.fonts.Medium};
  /* font-size: ${Responsive.convertFontScale("16")}px; */
`;

export const TitleText = styled.Text`
  font-family: ${Fonts.fonts.Medium};
  color: ${Colors.themeText};
  font-size: ${Responsive.convertFontScale("20")}px;
  text-align: center;
`;

export const ConfirmMessageText = styled.Text`
  font-size: ${Responsive.convertFontScale("17")}px;
  font-family: ${Fonts.fonts.Medium};
  color: ${Colors.themeText};
`;
export const MessageView = styled.View`
  align-items: center;
  flex-direction: column;
  width: ${Responsive.widthPercentageToDP("90%")}px;
  min-height: ${Responsive.widthPercentageToDP("20%")}px;
  padding-top: ${Responsive.widthPercentageToDP("1%")}px;
  margin-top: ${Responsive.widthPercentageToDP("4%")}px;
  /* border-width: 1px; */
`;
export const ButtonView = styled.View`
  /* flex: 0.4; */
  flex-direction: row;
  justify-content: space-around;
  width: ${Responsive.widthPercentageToDP("90%")}px;
  margin-top: ${Responsive.widthPercentageToDP("0%")}px;
  background-color: ${Colors.white};
  border-radius: ${Responsive.widthPercentageToDP("4%")}px;
`;
export const TitleView = styled.View`
  /* border-width: 1px; */
   align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  /* height: ${Responsive.widthPercentageToDP("20%")}px; */
  width: ${Responsive.widthPercentageToDP("68%")}px;
`;
export const ConfirmButtonView = styled.TouchableOpacity`
  height: ${Responsive.widthPercentageToDP("11%")}px;
  width: ${Responsive.widthPercentageToDP("50%")}px;
  padding-left: ${Responsive.widthPercentageToDP("4%")}px;
  padding-right:${Responsive.widthPercentageToDP("4%")}px;
  /* margin-left:${Responsive.widthPercentageToDP("4%")}px; */
  align-items: center;
  justify-content: center;
  /* border-width: 1px; */
  background-color: ${Colors.themeYellowColor};
  /* border-color: ${Colors.loginButton}; */
  border-radius: ${Responsive.widthPercentageToDP("3%")}px;
`;

export const CancelButtonView = styled.TouchableOpacity`
  height: ${Responsive.widthPercentageToDP("11%")}px;
  width: ${Responsive.widthPercentageToDP("30%")}px;
  align-items: center;
  justify-content: center;
`;
export const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    backgroundColor: Colors.imageOpacity,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: Responsive.widthPercentageToDP("66%"),
  },
  modalInnerView: {
    width: Responsive.widthPercentageToDP("90%"),
    minHeight: Responsive.widthPercentageToDP("66%"),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: Responsive.widthPercentageToDP("6%"),
    // padding: Responsive.widthPercentageToDP("6%"),
    shadowOffset: { width: 2, height: 2 },
    shadowColor: Colors.viewShadowColor,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: Colors.white,
    height: Responsive.heightPercentageToDP("12%"),
    width: Responsive.widthPercentageToDP("80%"),
  },
  TitleStyleText: {
    fontfamily: Fonts.fonts.Bold,
    // fontSize: 12,
  },
  msgText: {
    fontfamily: Fonts.fonts.Bold,
  },
  msgYellowText: {
    fontfamily: Fonts.fonts.Bold,
    color: Colors.themeYellowColor,
  },
  centerMessageView: {
    height: Responsive.widthPercentageToDP("30%"),
    backgroundColor: "red",
  },
  alignCenter: { alignItems: "center", justifyContent: "center" },
  buttonView: { flex: 0.4, backgroundColor: "yellow" },

  centerView: {
    justifyContent: "center",
    paddingLeft: Responsive.widthPercentageToDP("3"),
  },
  imgSize: {
    height: Responsive.widthPercentageToDP("5%"),
    width: Responsive.widthPercentageToDP("5%"),
  },
  leftIconView: {
    alignItems: "center",
    backgroundColor: Colors.black,
    borderRadius: Responsive.heightPercentageToDP("1%"),
    height: "80%",
    justifyContent: "center",
    marginHorizontal: "20%",
  },
});
