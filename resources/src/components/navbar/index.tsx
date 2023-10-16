import React from 'react';
import {Navbar as NavbarUI} from 'etendo-ui-library';
import {SafeAreaView} from 'react-native';
import {styles} from './style';
import {BackIcon} from 'etendo-ui-library';
import locale from '../../localization/locale';
interface NavbarProps {
  username: string;
  title: string;
  onOptionSelected?: (route: any) => void;
}

const Navbar = ({username, title, onOptionSelected}: NavbarProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavbarUI
        title={title}
        name={username}
        profileOptions={
          onOptionSelected && [
            {
              title: locale.t('Common.goBack'),
              image: <BackIcon />,
              route: 'Home',
            },
          ]
        }
        onOptionSelectedProfile={onOptionSelected}
      />
    </SafeAreaView>
  );
};

export default Navbar;
