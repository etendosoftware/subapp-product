import React from 'react';
import {Text, View, Modal as ModalRN} from 'react-native';
import {styles} from './style';
import ButtonUI from 'etendo-ui-library/dist-native/components/button/Button';
import {useTranslation} from 'react-i18next';
import {CancelIcon} from 'etendo-ui-library/dist-native/assets/images/icons/CancelIcon';
import {generalStyles} from '../../../styles';
import {CheckIcon} from 'etendo-ui-library/dist-native/assets/images/icons/CheckIcon';
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
  const {t} = useTranslation();
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
