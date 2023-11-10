import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Navbar from '../../components/navbar';

import {Button as ButtonUI, MoreIcon} from 'etendo-ui-library';

import Search from '../../components/search';
import Table from '../../components/table';
import {styles} from './style';
import {NavigationProp} from '@react-navigation/native';
import {isTablet} from '../../utils';
import locale from '../../localization/locale';
import {INavigationContainerProps} from '../../interfaces';
import useProduct from '../../hooks/useProduct';
import {ProductList} from '../../../lib/data_gen/product.types';
import {PassDataToParentTable} from '../../components/table/types';

interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
  navigationContainer: INavigationContainerProps;
}

const Home = ({navigation, route, navigationContainer}: HomeProps) => {
  const {getFilteredProducts} = useProduct();
  const [products, setProducts] = useState<ProductList>([]);
  const {dataUser} = route.params;

  const handleData = async (nameFilter?: string) => {
    const data = await getFilteredProducts(nameFilter);
    setProducts(data);
  };

  const getDataToTable = async ({refresh}: PassDataToParentTable) => {
    if (refresh) {
      await handleData();
    }
  };

  useEffect(() => {
    handleData();
  }, []);

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
      <Search onSubmit={handleData} />
      {products.length > 0 && (
        <Table
          navigation={navigation}
          data={products}
          passDataToParent={getDataToTable}
        />
      )}
    </View>
  );
};

export default Home;
