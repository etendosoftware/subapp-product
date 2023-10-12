import React, {useState} from 'react';
import {View} from 'react-native';
import ButtonUI from 'etendo-ui-library/dist-native/components/button/Button';
import InputUI from 'etendo-ui-library/dist-native/components/input/Input';
import {CameraIcon} from 'etendo-ui-library/dist-native/assets/images/icons/CameraIcon';
import {styles} from './style';
import Camera from '../camera';
import {useTranslation} from 'react-i18next';
import {isTablet} from '../../utils';

const Search = () => {
  const {t} = useTranslation();
  const [barcode, setBarcode] = React.useState<string>('');
  const [show, setShow] = useState(false);
  const handleReadCode = (code: string) => {
    if (code) {
      setBarcode(code);
      setShow(false);
    }
  };

  return (
    <>
      <Camera show={show} setShow={setShow} handleReadCode={handleReadCode} />
      <View style={styles.container}>
        <View style={styles.searchInput}>
          <InputUI
            value={barcode}
            onChangeText={value => setBarcode(value)}
            placeholder={t('Home.typeProduct')}
            typeField="textInputSearch"
            height={50}
          />
        </View>
        <View style={[styles.buttonContainer]}>
          <ButtonUI
            width={isTablet ? '70%' : '100%'}
            height={50}
            typeStyle="terciary"
            iconLeft={<CameraIcon style={styles.icon} />}
            onPress={() => {
              setShow(true);
            }}
            text={t('Home.searchBarcode')}
          />
        </View>
      </View>
    </>
  );
};

export default Search;
