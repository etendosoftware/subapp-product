import React, {useEffect} from 'react';
import {Navbar as NavbarUI} from 'etendo-ui-library';
import {SafeAreaView} from 'react-native';
import {styles} from './style';
import {BackIcon} from 'etendo-ui-library';
import {NavigationProp} from '@react-navigation/native';
import locale from '../../localization/locale';
interface NavbarProps {
  username: string;
  title: string;
  navigation?: NavigationProp<any>;
}

const Navbar = ({username, title, navigation}: NavbarProps) => {
  useEffect(() => {
    console.log('navigation', navigation);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavbarUI
        title={title}
        name={username}
        profileOptions={
          navigation && [
            {
              title: locale.t('Common.goBack'),
              image: <BackIcon />,
              route: 'Home',
            },
          ]
        }
        onOptionSelectedProfile={(route: any) => {
          navigation?.navigate(route!);
        }}
      />
    </SafeAreaView>
  );
};

export default Navbar;
