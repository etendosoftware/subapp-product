import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Navbar from '../../components/navbar';

import {
  show as showAlert,
  Button as ButtonUI,
  Input as InputUI,
  CheckIcon,
  TitleContainer,
  XIcon,
} from 'etendo-ui-library';
import { styles } from './style';
import { NavigationProp } from '@react-navigation/native';
import Camera from '../../components/camera';
import { TableDetailStyle } from './detail.style';
import Field, { FieldProp } from './field';
import logger from '../../utils/log';

interface TableDetailProps {
  navigation: NavigationProp<any>;
  route: any;
  createData: any;
  updateData: any;
  fields: FieldProp[];
  labels: {
    editTitle: string;
    newTitle: string;
    errorTitle: string;
    successTitle: string;
    successUpdateTitle: string;
    successCreateTitle: string;
    connectionError: string;
    navbarTitle: string;
    cancel: string;
    save: string;
  };
}

const TableDetail: React.FC<TableDetailProps> = ({
  navigation,
  route,
  createData,
  updateData,
  fields,
  labels,
}) => {
  const [title, setTitle] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  /*
  TODO Handle validation
  const [hasError, setHasError] = useState<boolean>(false);
  */
  const [loading, setLoading] = useState<boolean>(false);

  const { dataUser, item } = route.params;

  useEffect(() => {
    if (item) {
      fields.forEach((field: FieldProp) => {
        item[field.key] && field.setValue(item[field.key]);
      });
    } else {
      setTitle(labels.newTitle);
    }
  }, []);

  const handleReadCode = (code: string) => {
    if (code) {
      setShow(false);
    }
  };

  const handleCancel = () => {
    setShow(false);
    navigation.goBack();
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      if (item) {
        await updateData();
        showAlert(labels.successTitle, 'success');
      } else {
        await createData();
        showAlert(labels.successCreateTitle, 'success');
      }
      setLoading(false);
      navigation.goBack();
    } catch (err) {
      logger('handleSave Error', JSON.stringify(err));
      setLoading(false);
      showAlert(labels.connectionError, 'error');
    }
  };

  return (
    <>
      <Camera show={show} setShow={setShow} handleReadCode={handleReadCode} />
      <View style={TableDetailStyle.container}>
        <Navbar
          title={labels.navbarTitle}
          username={dataUser?.username}
          onOptionSelected={(route: any) => {
            navigation?.navigate(route);
          }}
        />
        <TitleContainer
          title={title}
          styleContainer={TableDetailStyle.topSection}
          buttons={[
            <ButtonUI
              key={'cancel'}
              height={50}
              width={141}
              typeStyle="whiteBorder"
              onPress={() => {
                handleCancel();
              }}
              text={labels.cancel}
              iconLeft={<XIcon style={styles.icon} />}
            />,
            <ButtonUI
              key={'save'}
              height={50}
              width={141}
              typeStyle="secondary"
              onPress={async () => {
                await handleSave();
              }}
              loading={loading}
              text={labels.save}
              iconLeft={<CheckIcon style={styles.icon} />}
            />,
          ]}
        />
        {fields.map((field: FieldProp) => {
          return (
            (field.visible ?? true) && (
              <Field
                key={field.key}
                labels={field.labels}
                setValue={field.setValue}
                getValue={field.getValue}
              />
            )
          );
        })}
      </View>
    </>
  );
};

export default TableDetail;
