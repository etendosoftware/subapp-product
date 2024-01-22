import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Navbar from '../../components/navbar';

import {Button as ButtonUI, MoreIcon} from 'etendo-ui-library';

import Search from '../../components/search';
import Table from '../../components/table';
import {styles} from './style';
import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import {isTablet} from '../../utils';
import locale from '../../localization/locale';
import {INavigationContainerProps} from '../../interfaces';
import useProduct from '../../hooks/useProduct';
import {ProductList} from '../../../lib/data_gen/product.types';
import {EntityType} from '../../../lib/base/baseservice.types';

interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
  navigationContainer: INavigationContainerProps;
}

const Home = ({navigation, route, navigationContainer}: HomeProps) => {
  const {getFilteredProducts} = useProduct();
  const [products, setProducts] = useState<EntityType[]>([]);
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const {dataUser} = route.params;
  const [loading, setLoading] = useState<boolean>(true);
  const [pageTable, setPageTable] = useState<number>(0);
  const [isLoadingMoreData, setIsLoadingMoreData] = useState<boolean>(true);

  const PAGE_SIZE = 20;

  const handleData = async (
    nameFilter?: string,
    page: number = 0,
    size: number = 20,
    reset: boolean = false,
  ) => {
    setLoading(true);
    setInputValue(nameFilter);
    if (reset) {
      setProducts([]);
      setPageTable(0);
      setIsLoadingMoreData(true);
    }
    await getFilteredProducts(nameFilter, page, size).then(
      (newData: ProductList) => {
        setLoading(false);
        if (size !== newData.content.length) {
          setIsLoadingMoreData(false);
        }
        setProducts(prevProducts => {
          return newData ? [...prevProducts, ...newData.content] : [];
        });
        setPageTable(page);
      },
    );
  };

  const deleteDataTable = async () => {
    await handleData(inputValue, 0, PAGE_SIZE, true);
  };

  const resetTable = async (nameFilter?: string) => {
    await handleData(nameFilter, 0, PAGE_SIZE, true);
  };

  const onLoadMoreData = async (currentPage: number, pageSize: number) => {
    await handleData(inputValue, currentPage, pageSize);
  };

  const resetInput = () => {
    setInputValue('');
  };

  useFocusEffect(
    useCallback(() => {
      resetInput();
      resetTable(inputValue);
    }, []),
  );

  return (
    <View style={styles.container}>
      <View>
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
        <Search onSubmit={resetTable} value={inputValue} />
      </View>
      <Table
        navigation={navigation}
        data={products}
        isLoading={loading}
        pageSize={PAGE_SIZE}
        onLoadMoreData={onLoadMoreData}
        currentPage={pageTable}
        isLoadingMoreData={isLoadingMoreData}
        deleteData={deleteDataTable}
      />
    </View>
  );
};

export default Home;
