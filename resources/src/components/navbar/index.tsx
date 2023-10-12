import React, {useEffect} from 'react';
import NavbarUI from 'etendo-ui-library/dist-native/components/navbar/Navbar';
import {SafeAreaView} from 'react-native';
import {styles} from './style';
import {BackIcon} from 'etendo-ui-library/dist-native/assets/images/icons/BackIcon';
import {NavigationProp} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
interface NavbarProps {
  username: string;
  title: string;
  navigation?: NavigationProp<any>;
}

const Navbar = ({username, title, navigation}: NavbarProps) => {
  const {t} = useTranslation();
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
              title: t('Common.goBack'),
              image: <BackIcon />,
              route: 'Home',
            },
          ]
        }
        onOptionSelectedProfile={route => {
          navigation?.navigate(route!);
        }}
      />
    </SafeAreaView>
  );
};

export default Navbar;
