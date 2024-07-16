import React from 'react';
import {Button as ButtonUI, Navbar as NavbarUI,CornerLeftUpIcon} from 'etendo-ui-library';
import {SafeAreaView} from 'react-native';
import {styles} from './style';
import locale from '../../localization/locale';
import {isTablet} from '../../utils';
import {generalStyles} from '../../../styles';
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
          onOptionSelected && !isTablet
            ? [
                {
                  title: locale.t('Common.goBack'),
                  image: <CornerLeftUpIcon />,
                  route: 'Home',
                },
              ]
            : undefined
        }
        onOptionSelectedProfile={onOptionSelected}
        navbarComponents={[
          {
            component: (
              <ButtonUI
                typeStyle="primary"
                iconLeft={<CornerLeftUpIcon style={generalStyles.icon} />}
                paddingVertical={16}
                width={120}
                onPress={() => onOptionSelected && onOptionSelected('Home')}
                text={locale.t('Common.goBack')}
              />
            ),
            inOptions: {title: locale.t('Common.goBack')},
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Navbar;
