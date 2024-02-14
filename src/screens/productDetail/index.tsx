import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import Navbar from '../../components/navbar';

import {
  Button as ButtonUI,
  Input as InputUI,
  CancelIcon,
  CheckIcon,
  CameraIcon,
  TitleContainer,
} from 'etendo-ui-library';
import { styles } from './style';
import { NavigationProp } from '@react-navigation/native';
import { isTablet } from '../../utils';
import locale from '../../localization/locale';
import useProduct from '../../hooks/useProduct';
import { show as showAlert } from 'etendo-ui-library';

interface ProductDetailProps {
  navigation: NavigationProp<any>;
  route: any;
  Camera: FC<any>;
}
const ProductDetail: React.FC<ProductDetailProps> = ({
  navigation,
  route,
  Camera,
}) => {
  const [product, setProduct] = useState<string>('');
  const [barcode, setBarcode] = useState<string>('');
  const [active, setActive] = useState<boolean>(true);
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [errorProduct, setErrorProduct] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { dataUser, productItem } = route.params;

  const { createItem, updateItem } = useProduct();

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
        await updateItem({
          id,
          name: product,
          uPCEAN: barcode,
          active,
        });
        showAlert(locale.t('Success.updateProduct'), 'success');
      } else {
        await createItem({
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
          title={'ProductDetail.welcome'}
          username={dataUser?.username}
          onOptionSelected={(route: any) => {
            navigation?.navigate(route);
          }}
        />
        <TitleContainer
          title={title}
          style={styles.topSection}
          buttons={[
            <ButtonUI
              height={50}
              width={141}
              typeStyle="whiteBorder"
              onPress={() => {
                handleCancel();
              }}
              text={locale.t('Common.cancel')}
              iconLeft={<CancelIcon style={styles.icon} />}
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
              iconLeft={<CheckIcon style={styles.icon} />}
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
              backgroundColor=""
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
                backgroundColor=""
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
