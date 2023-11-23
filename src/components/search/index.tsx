import React, {useEffect, useState} from 'react';
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
  value?: string;
}

const Search = ({onSubmit, value}: SearchProps) => {
  const [text, setText] = useState<string>('');
  const [show, setShow] = useState(false);

  const handleReadCode = (text: string) => {
    if (text) {
      setText(text);
      setShow(false);
      onSubmit(text);
    }
  };

  useEffect(() => {
    setText(value ?? '');
  }, [value]);

  return (
    <>
      <Camera show={show} setShow={setShow} handleReadCode={handleReadCode} />
      <View style={styles.container}>
        <View style={styles.searchInput}>
          <InputUI
            value={text}
            onChangeText={(value: React.SetStateAction<string>) => {
              setText(value);
            }}
            onSubmit={() => onSubmit(text)}
            placeholder={locale.t('Home.typeProduct')}
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
            text={locale.t('Home.searchBarcode')}
          />
        </View>
      </View>
    </>
  );
};

export default Search;
