import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Button as ButtonUI,
  Input as InputUI,
  CameraIcon,
} from 'etendo-ui-library';
import {styles} from './style';
import Camera from '../camera';
import {isTablet} from '../../utils';
import locale from '../../localization/locale';

interface SearchProps {
  onSubmit: (value?: string) => void;
}

const Search = ({onSubmit}: SearchProps) => {
  const [barcode, setBarcode] = React.useState<string>('');
  const [show, setShow] = useState(false);

  const handleReadCode = (code: string) => {
    if (code) {
      setBarcode(code);
      setShow(false);
      onSubmit(code);
    }
  };

  return (
    <>
      <Camera show={show} setShow={setShow} handleReadCode={handleReadCode} />
      <View style={styles.container}>
        <View style={styles.searchInput}>
          <InputUI
            value={barcode}
            onChangeText={(value: React.SetStateAction<string>) => {
              setBarcode(value);
              onSubmit(value);
            }}
            onSubmit={() => onSubmit(barcode)}
            placeholder={locale.t('Home.typeProduct')}
            typeField="textInputSearch"
            height={50}
            onSubmit={() => onSubmit(barcode)}
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
            text={locale.t('Home.searchBarcode')}
          />
        </View>
      </View>
    </>
  );
};

export default Search;
