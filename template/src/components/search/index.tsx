import React, { useEffect, useState } from 'react';
import {
  Button as ButtonUI,
  CameraIcon,
  SearchContainer,
} from 'etendo-ui-library';
import { styles, widthButton } from './style';
import Camera from '../camera';
import locale from '../../localization/locale';

interface SearchProps {
  onSubmit: (value?: string) => void;
  value?: string;
}

const Search = ({ onSubmit, value }: SearchProps) => {
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
      <SearchContainer
        style={styles.container}
        placeholder={locale.t('Home.typeProduct')}
        onSubmit={onSubmit}
        value={text}
        buttons={[
          <ButtonUI
            width={widthButton}
            height={50}
            typeStyle="terciary"
            iconLeft={<CameraIcon style={styles.iconCamera} />}
            onPress={() => {
              setShow(true);
            }}
            text={locale.t('Home.searchBarcode')}
          />,
        ]}
      />
    </>
  );
};

export default Search;
