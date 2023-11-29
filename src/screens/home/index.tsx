import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Navbar from '../../components/navbar';

import {Button as ButtonUI, MoreIcon} from 'etendo-ui-library';

import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import Search from '../../components/search';
import Table from '../../components/table';
import {INavigationContainerProps} from '../../interfaces';
import locale from '../../localization/locale';
import {isTablet} from '../../utils';
import {styles} from './style';
import useProduct from '../../hooks/useProduct';

interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
  navigationContainer: INavigationContainerProps;
}

const Home = ({navigation, route, navigationContainer}: HomeProps) => {
  const [inputValue] = useState<string | undefined>('');
  const {dataUser} = route.params;
  const {loading, data, doSearch, columns} = useProduct();

  useFocusEffect(
    React.useCallback(() => {
      doSearch(inputValue);
    }, [inputValue]),
  );

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      if (navigation.isFocused()) {
        doSearch(inputValue);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [inputValue, navigation]);

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
      <Search onSubmit={doSearch} />
      <Table
        navigation={navigation}
        data={data}
        columns={columns}
        isLoading={loading}
        pagination={20}
      />
    </View>
  );
};

export default Home;
