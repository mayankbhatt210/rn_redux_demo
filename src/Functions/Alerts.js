import {Alert, Linking} from 'react-native';
import {commonConstant} from '../Theme/Constants';

export function showAlert(
  message,
  title = commonConstant.appName,
  buttonTitle = 'OK',
) {
  setTimeout(() => {
    Alert.alert(title, message, [{text: buttonTitle}]);
  }, 500);
}

export function showAlertWithYes(message, firstButtonTitle, firstCallback) {
  setTimeout(() => {
    Alert.alert(
      commonConstant.appName,
      message,
      [
        {
          text: firstButtonTitle,
          onPress: () => {
            firstCallback();
          },
        },
      ],
      {cancelable: false},
    );
  }, 500);
}

export function showAlertWithTwoCallback(
  message,
  title = commonConstant.appName,
  firstButtonTitle,
  secondButtonTitle,
  firstCallback,
  secondCallback,
) {
  setTimeout(() => {
    Alert.alert(
      title,
      message,
      [
        {
          text: firstButtonTitle,
          onPress: () => {
            firstCallback();
          },
        },
        {
          text: secondButtonTitle,
          onPress: () => {
            secondCallback();
          },
          style: 'destructive',
        },
      ],

      {cancelable: false},
    );
  }, 500);
}

export function LocationAlert() {
  setTimeout(() => {
    Alert.alert(
      'Sonata',
      'Enable location services on your device inside Settings -> Privacy -> Location Services',
      [
        {
          text: 'OK , GOT IT!',
          // onPress: () => Linking.openURL('app-settings:/location'),
        },
      ],
    );
  }, 500);
}
