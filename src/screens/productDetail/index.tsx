import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Navbar from '../../components/navbar';

import {
  show as showAlert,
  Button as ButtonUI,
  Input as InputUI,
  CheckIcon,
  CameraIcon,
  TitleContainer,
  XIcon,
} from 'etendo-ui-library';
import { styles } from './style';
import { NavigationProp } from '@react-navigation/native';
import { isTablet } from '../../utils';
import Camera from '../../components/camera';
import locale from '../../localization/locale';
import useProduct from '../../hooks/useProduct';
import { NEUTRAL_100 } from '../../styles/colors';

interface ProductDetailProps {
  navigation: NavigationProp<any>;
  route: any;
}
const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
  const [product, setProduct] = useState<string>('');
  const [barcode, setBarcode] = useState<string>('');
  const [active, setActive] = useState<boolean>(true);
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [errorProduct, setErrorProduct] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { dataUser, productItem } = route.params;

  const { createProduct, updateProduct } = useProduct();

  useEffect(() => {
    if (productItem) {
      setProduct(productItem.name);
      setBarcode(productItem.uPCEAN);
      setId(productItem.id);
      setActive(productItem.active);
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
    setId('');
    setShow(false);
    setActive(true);
    navigation.goBack();
  };

  const handleSave = async () => {
    setLoading(true);
    if (typeof product !== 'string' || product.trim() === '') {
      setErrorProduct(true);
      showAlert(locale.t('Error.product'), 'error');
      setLoading(false);
      return;
    } else {
      setErrorProduct(false);
    }

    try {
      if (id) {
        await updateProduct({
          id,
          name: product,
          uPCEAN: barcode,
          active,
        });
        showAlert(locale.t('Success.updateProduct'), 'success');
      } else {
        await createProduct({
          name: product,
          uPCEAN: barcode,
          active,
        });
        showAlert(locale.t('Success.saveProduct'), 'success');
      }
      setLoading(false);
      navigation.goBack();
    } catch (err) {
      setLoading(false);
      showAlert(locale.t('Error.connection'), 'error');
    }
  };

  return (
    <>
      <Camera show={show} setShow={setShow} handleReadCode={handleReadCode} />
      <View style={styles.container}>
        <Navbar
          title={locale.t('Home.welcome')}
          username={dataUser?.username}
          onOptionSelected={(route: any) => {
            navigation?.navigate(route);
          }}
        />
        <TitleContainer
          title={title}
          styleContainer={styles.topSection}
          buttons={[
            <ButtonUI
              height={50}
              width={141}
              typeStyle="whiteBorder"
              onPress={() => {
                handleCancel();
              }}
              text={locale.t('Common.cancel')}
              iconLeft={<XIcon style={styles.icon}/>}
            />,
            <ButtonUI
              height={50}
              width={141}
              typeStyle="secondary"
              onPress={async () => {
                await handleSave();
              }}
              loading={loading}
              text={locale.t('Common.save')}
              iconLeft={<CheckIcon  style={styles.icon}/>}
            />,
          ]}
        />
        <View style={[styles.inputSection]}>
          <View
            style={{
              width: isTablet ? '55%' : '100%',
              marginRight: isTablet ? 28 : 0,
            }}>
            <InputUI
              backgroundColor={NEUTRAL_100}
              helperText=""
              maxLength={60}
              height={50}
              placeholder={locale.t('ProductDetail.productExample')}
              titleLabel={locale.t('ProductDetail.products')}
              typeField="textInput"
              value={product}
              isError={errorProduct}
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
                backgroundColor={NEUTRAL_100}
                helperText=""
                maxLength={30}
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
                iconLeft={<CameraIcon style={styles.iconCamera}/>}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductDetail;
