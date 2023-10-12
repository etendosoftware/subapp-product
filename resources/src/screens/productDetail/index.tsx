import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Navbar from '../../components/navbar';

import ButtonUI from 'etendo-ui-library/dist-native/components/button/Button';
import InputUI from 'etendo-ui-library/dist-native/components/input/Input';
import {CancelIcon} from 'etendo-ui-library/dist-native/assets/images/icons/CancelIcon';
import {CheckIcon} from 'etendo-ui-library/dist-native/assets/images/icons/CheckIcon';
import {styles} from './style';
import {NavigationProp} from '@react-navigation/native';
import {isTablet} from '../../utils';
import {CameraIcon} from 'etendo-ui-library/dist-native/assets/images/icons/CameraIcon';
import Camera from '../../components/camera';
import {useTranslation} from 'react-i18next';

interface ProductDetailProps {
  navigation: NavigationProp<any>;
  route: any;
}

const ProductDetail = ({navigation, route}: ProductDetailProps) => {
  const [product, setProduct] = useState('');
  const [barcode, setBarcode] = useState('');
  const [title, setTitle] = useState('');
  const [show, setShow] = useState(false);
  const {t} = useTranslation();
  const {dataUser, productItem} = route.params;

  useEffect(() => {
    if (productItem) {
      setProduct(productItem.name);
      setBarcode(productItem.barcode);
      setTitle(t('ProductDetail.editProduct'));
    } else {
      setTitle(t('ProductDetail.newProduct'));
    }
  }, []);

  const handleReadCode = (code: string) => {
    if (code) {
      setBarcode(code);
      setShow(false);
    }
  };

  const handleCancel = () => {
    setProduct('');
    setBarcode('');
    setShow(false);
    navigation.goBack();
  };

  const handleSave = () => {
    // TODO: add logic to save product
    navigation.goBack();
  };

  return (
    <>
      <Camera show={show} setShow={setShow} handleReadCode={handleReadCode} />
      <View style={styles.container}>
        <Navbar
          title={t('ProductDetail.welcome')}
          username={dataUser?.username}
          navigation={navigation}
        />

        <View style={styles.topSection}>
          <View
            style={{
              width: isTablet ? '50%' : '100%',
              // marginLeft: isTablet ? 26 : 0,
            }}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={[styles.buttonSection]}>
            <View style={styles.buttonContainer}>
              <ButtonUI
                width="100%"
                height={50}
                typeStyle="whiteBorder"
                onPress={() => {
                  handleCancel();
                }}
                text={t('Common.cancel')}
                iconLeft={<CancelIcon style={styles.icon} />}
              />
            </View>
            <View style={styles.buttonContainer}>
              <ButtonUI
                width="100%"
                height={50}
                typeStyle="secondary"
                onPress={() => {
                  handleSave();
                }}
                text={t('Common.save')}
                iconLeft={<CheckIcon style={styles.icon} />}
              />
            </View>
          </View>
        </View>
        <View style={[styles.inputSection]}>
          <View
            style={{
              width: isTablet ? '55%' : '100%',
              marginRight: isTablet ? 28 : 0,
            }}>
            <InputUI
              backgroundColor=""
              helperText=""
              maxLength={100}
              height={50}
              placeholder={t('ProductDetail.productExample')}
              titleLabel={t('ProductDetail.products')}
              typeField="textInput"
              value={product}
              onChangeText={value => setProduct(value)}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
              width: isTablet ? '42%' : '100%',
            }}>
            <View
              style={{
                width: isTablet ? '90%' : '80%',
              }}>
              <InputUI
                backgroundColor=""
                helperText=""
                maxLength={100}
                height={50}
                placeholder={t('ProductDetail.barcodePlaceholder')}
                titleLabel={t('ProductDetail.barcode')}
                typeField="textInput"
                value={barcode}
                onChangeText={value => setBarcode(value)}
              />
            </View>
            <View
              style={{
                width: 50,
                marginBottom: 5,
                marginLeft: 10,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
              }}>
              <ButtonUI
                width="100%"
                height={50}
                typeStyle="terciary"
                onPress={() => {
                  setShow(true);
                }}
                text=""
                iconLeft={<CameraIcon style={styles.icon} />}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductDetail;
