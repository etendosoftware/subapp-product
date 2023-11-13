import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Navbar from '../../components/navbar';

import {
  Button as ButtonUI,
  Input as InputUI,
  CancelIcon,
  CheckIcon,
  CameraIcon,
} from 'etendo-ui-library';
import {styles} from './style';
import {NavigationProp} from '@react-navigation/native';
import {isTablet} from '../../utils';
import Camera from '../../components/camera';
import locale from '../../localization/locale';

interface ProductDetailProps {
  navigation: NavigationProp<any>;
  route: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({navigation, route}) => {
  const [product, setProduct] = useState('');
  const [barcode, setBarcode] = useState('');
  const [title, setTitle] = useState('');
  const [show, setShow] = useState(false);
  const {dataUser, productItem} = route.params;

  useEffect(() => {
    if (productItem) {
      setProduct(productItem.name);
      setBarcode(productItem.barcode);
      setTitle(locale.t('ProductDetail.editProduct'));
    } else {
      setTitle(locale.t('ProductDetail.newProduct'));
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
          title={'ProductDetail.welcome'}
          username={dataUser?.username}
          onOptionSelected={(route: any) => {
            navigation?.navigate(route!);
          }}
        />

        <View style={styles.topSection}>
          <View
            style={{
              width: isTablet ? '50%' : '100%',
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
                text={locale.t('Common.cancel')}
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
                text={locale.t('Common.save')}
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
              placeholder={locale.t('ProductDetail.productExample')}
              titleLabel={locale.t('ProductDetail.products')}
              typeField="textInput"
              value={product}
              onChangeText={(value: React.SetStateAction<string>) =>
                setProduct(value)
              }
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              width: isTablet ? '42%' : '100%',
            }}>
            <View
              style={{
                width: isTablet ? '88%' : '80%',
              }}>
              <InputUI
                backgroundColor=""
                helperText=""
                maxLength={100}
                height={50}
                placeholder={locale.t('ProductDetail.barcodePlaceholder')}
                titleLabel={locale.t('ProductDetail.barcode')}
                typeField="textInput"
                value={barcode}
                onChangeText={(value: React.SetStateAction<string>) =>
                  setBarcode(value)
                }
              />
            </View>
            <View
              style={{
                marginBottom: 5,
                display: 'flex',
                justifyContent: 'flex-end',
                alignContent: 'center',
              }}>
              <ButtonUI
                height={50}
                width={50}
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
