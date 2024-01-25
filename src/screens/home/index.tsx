import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import Navbar from '../../components/navbar';

import {
  Button as ButtonUI,
  CameraIcon,
  MoreIcon,
  SearchContainer,
  TitleContainer,
} from 'etendo-ui-library';

import { styles, widthSearchButton } from './style';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import locale from '../../localization/locale';
import { INavigationContainerProps } from '../../interfaces';
import useProduct from '../../hooks/useProduct';
import { ProductList } from '../../../lib/data_gen/product.types';
import { EntityType } from '../../../lib/base/baseservice.types';
import Table from '../../components/table';
import Camera from '../../components/camera';

interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
  navigationContainer: INavigationContainerProps;
}

const Home = ({ navigation, route, navigationContainer }: HomeProps) => {
  const { getFilteredProducts } = useProduct();
  const [products, setProducts] = useState<EntityType[]>([]);
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const { dataUser } = route.params;
  const [loading, setLoading] = useState<boolean>(true);
  const [pageTable, setPageTable] = useState<number>(0);
  const [isLoadingMoreData, setIsLoadingMoreData] = useState<boolean>(true);
  // const [textSearch, setTextSearch] = useState<string>('');
  const [showCamera, setShowCamera] = useState(false);

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
        setProducts((prevProducts: Array<EntityType>) => {
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

  const handleReadCode = (text: string) => {
    if (text) {
      setInputValue(text);
      setShowCamera(false);
      resetTable(text);
    }
  };

  useEffect(() => {
    setInputValue(inputValue ?? '');
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <View>
        <Camera
          show={showCamera}
          setShow={setShowCamera}
          handleReadCode={handleReadCode}
        />
        <Navbar
          title={locale.t('Home.welcome')}
          username={dataUser?.username}
          onOptionSelected={() => {
            navigationContainer.navigate('Home');
          }}
        />
        <TitleContainer
          title={locale.t('Home.productList')}
          style={styles.topSection}
          buttons={[
            <ButtonUI
              height={50}
              typeStyle="secondary"
              onPress={() => {
                navigation.navigate('ProductDetail');
              }}
              text={locale.t('Home.newProduct')}
              iconLeft={<MoreIcon style={styles.icon} />}
            />,
          ]}
        />
        <SearchContainer
          style={styles.searchContainer}
          placeholder={locale.t('Home.typeProduct')}
          onSubmit={resetTable}
          value={inputValue}
          buttons={[
            <ButtonUI
              width={widthSearchButton}
              height={50}
              typeStyle="terciary"
              iconLeft={<CameraIcon style={styles.icon} />}
              onPress={() => {
                setShowCamera(true);
              }}
              text={locale.t('Home.searchBarcode')}
            />,
          ]}
        />
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
