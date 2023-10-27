import React from 'react';
import {Text, View, Modal as ModalRN} from 'react-native';
import {styles} from './style';
import {Button as ButtonUI, CancelIcon, CheckIcon} from 'etendo-ui-library';
import {generalStyles} from '../../../styles';
interface ModalProps {
  textModal: string;
  textConfirm: string;
  textCancel: string;
  visible: boolean;
  setVisible: () => void;
  functionConfirm: () => void;
  functionCancel: () => void;
}

const Modal = ({
  textModal,
  textConfirm,
  visible,
  textCancel,
  setVisible,
  functionConfirm,
  functionCancel,
}: ModalProps) => {
  return (
    <ModalRN
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={setVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.modalText}>{textModal}</Text>
          </View>
          <View style={styles.buttonModalContainer}>
            <View style={[styles.buttonContainer]}>
              <ButtonUI
                width="100%"
                height={50}
                typeStyle="whiteBorder"
                onPress={() => {
                  functionCancel();
                }}
                text={textCancel}
                iconLeft={<CancelIcon style={generalStyles.icon} />}
              />
            </View>

            <View style={[styles.buttonContainer]}>
              <ButtonUI
                width="100%"
                height={50}
                typeStyle="secondary"
                onPress={() => {
                  functionConfirm();
                }}
                text={textConfirm}
                iconLeft={<CheckIcon style={generalStyles.icon} />}
              />
            </View>
          </View>
        </View>
      </View>
    </ModalRN>
  );
};

export default Modal;
