import {StyleSheet} from 'react-native';
import {Colors} from '../Theme';
import Responsive from './Responsive';

export default StyleSheet.create({
  alignSelfCenter: {alignSelf: 'center'},
  centerView: {alignItems: 'center', justifyContent: 'center'},
  defaultImage: {
  
  },
  fullHeight: {height: '100%'},
  fullWidth: {width: '100%'},
  lineStyle: {
    alignSelf: 'center',
    // backgroundColor: Colors.darkTheme,
    height: Responsive.widthPercentageToDP('0.3%'),
    width: '100%',
  },
  positionCenterAsyncImage: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  rawFlexDirection: {flexDirection: 'row'},
  resizeModeStyle: {
    resizeMode: 'cover',
  },
  shadowStyle: {
    elevation: 5,
    // shadowColor: Colors.OpacityWithBlack,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 5,
    shadowRadius: 10,
  },
});
