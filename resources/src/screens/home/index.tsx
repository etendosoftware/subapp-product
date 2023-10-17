import React from 'react';
import {Text, View} from 'react-native';
import Navbar from '../../components/navbar';

import {Button as ButtonUI, MoreIcon} from 'etendo-ui-library';

import Search from '../../components/search';
import Table from '../../components/table';
import {styles} from './style';
import {NavigationProp} from '@react-navigation/native';
import {isTablet} from '../../utils';
import locale from '../../localization/locale';

interface NavigationContainerProps {
  navigate: (screenName: string, params?: any) => void;
}
interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
  navigationContainer: NavigationContainerProps;
}

const Home = ({navigation, route, navigationContainer}: HomeProps) => {
  const {dataUser} = route.params;
  return (
    <View style={styles.container}>
      <Navbar
        title={locale.t('Home.welcome')}
        username={dataUser?.username}
        onOptionSelected={() => {
          navigationContainer.navigate('Home');
        }}
      />
      <View style={styles.topView}>
        <Text style={styles.title}>{locale.t('Home.productList')}</Text>
        <View style={styles.buttonContainer}>
          <ButtonUI
            width={isTablet ? '100%' : '60%'}
            height={50}
            typeStyle="secondary"
            onPress={() => {
              navigation.navigate('ProductDetail');
            }}
            text={locale.t('Home.newProduct')}
            iconLeft={<MoreIcon style={styles.icon} />}
          />
        </View>
      </View>
      <Search />
      <Table navigation={navigation} />
    </View>
  );
};

export default Home;
