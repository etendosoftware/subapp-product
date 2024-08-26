import { View } from 'react-native';
import { TableDetailStyle } from './detail.style';
import React from 'react';
import { isTablet } from '../../utils';
import { Input as InputUI } from 'etendo-ui-library';
import { NEUTRAL_100 } from '../../styles/colors';

export type FieldProp = {
  key: string;
  visible?: boolean;
  setValue: (searchKey: React.SetStateAction<string>) => void;
  getValue: string;
  labels: {
    placeholder: string;
    title: string;
  };
};

const Field = ({ setValue, getValue, labels }: FieldProp) => {
  return (
    <View style={[TableDetailStyle.inputSection]}>
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
          placeholder={labels?.placeholder}
          titleLabel={labels?.title}
          typeField="textInput"
          value={getValue}
          onChangeText={(searchKey: React.SetStateAction<string>) =>
            setValue(searchKey)
          }
        />
      </View>
    </View>
  );
};

export default Field;
