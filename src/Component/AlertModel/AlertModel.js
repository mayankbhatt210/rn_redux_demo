import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image, Modal} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, Fonts, Images, Responsive} from '../../Theme';
import {
  styles,
  ModelView,
  ConfirmButtonView,
  MessageView,
  ButtonView,
  CancelButtonView,
  MessageText,
  ConfirmMessageText,
  TitleView,
  TitleText,
} from './AlertModelStyle';
import {showAlert} from '../../Functions/Alerts';

export default function AlertModel(props) {
  const [isMessage] = useState(props.isMessage);
  const [confirmButton] = useState(props.isConfirmButton);
  const [confirmText] = useState(props.confirmText);
  const [cancelButton] = useState(props.isCancelButton);
  const [cancelText] = useState(props.cancelText);
  const [titleText] = useState(props.titleText);
  const [messageColor] = useState(props.messageColor);
  const [buttonColor] = useState(props.buttonColor);
  const [modalVisible, setModalVisible] = useState(props.isShowModal);

  // console.log('height==', height);

  function onConfirmPress() {
    setModalVisible(false);
    props.confirmButton();
  }

  function onCancelPress() {
    setModalVisible(false);
    props.cancelButton();
  }

  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalMainView}>
        <View style={styles.modalInnerView}>
          <TitleView>
            <TitleText>{titleText}</TitleText>
          </TitleView>
          <MessageView>
            <View>
              <Text
                style={
                  (styles.msgText,
                  {
                    fontSize: Responsive.convertFontScale('18'),
                    color: messageColor,
                  })
                }>
                {isMessage}
              </Text>
            </View>
          </MessageView>
          <ButtonView>
            {cancelText !== '' ? (
              <CancelButtonView onPress={() => onCancelPress()}>
                <ConfirmMessageText>{cancelText}</ConfirmMessageText>
              </CancelButtonView>
            ) : null}

            <ConfirmButtonView
              style={{backgroundColor: buttonColor}}
              onPress={() => onConfirmPress()}>
              <MessageText
                style={{
                  color: Colors.white,
                  fontSize: Responsive.convertFontScale('16'),
                }}>
                {confirmText}
              </MessageText>
            </ConfirmButtonView>
          </ButtonView>
        </View>
      </View>
    </Modal>
  );
}

AlertModel.propTypes = {
  isMessage: PropTypes.string,
  confirmButton: PropTypes.func,
  confirmText: PropTypes.string,
  cancelButton: PropTypes.func,
  cancelText: PropTypes.string,
  titleText: PropTypes.string,
  messageColor: PropTypes.string,
  buttonColor: PropTypes.string,
  messageColor: PropTypes.string,
  buttonColor: PropTypes.string,
};

AlertModel.defaultProps = {
  confirmButton: () => {},
  cancelButton: () => {},
};
