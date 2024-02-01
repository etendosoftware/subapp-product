import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Navbar from '../../components/navbar';

import {
  Button as ButtonUI,
  Table as TableUI,
  CameraIcon,
  MoreIcon,
  SearchContainer,
  TitleContainer,
  show,
  PencilIcon,
  TrashIcon,
  Cards,
  Modal as ModalUI,
} from 'etendo-ui-library';

import { styles, widthSearchButton } from './style';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import locale from '../../localization/locale';
import { INavigationContainerProps } from '../../interfaces';
import useProduct from '../../hooks/useProduct';
import { Product, ProductList } from '../../../lib/data_gen/product.types';
import { EntityType } from '../../../lib/base/baseservice.types';
import { ColumnsMetadata } from 'etendo-ui-library/dist-native/components/table/Table.types';
import { isTablet } from '../../utils';

interface HomeProps {
  navigation: NavigationProp<any>;
  route: any;
  navigationContainer: INavigationContainerProps;
  Camera: FC<any>;
}

const Home = ({
  navigation,
  route,
  navigationContainer,
  Camera,
}: HomeProps) => {
  const [deleteItem, setDeleteItem] = useState<Product | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const [isLoadingMoreData, setIsLoadingMoreData] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalActive, setModalActive] = useState(false);
  const [pageTable, setPageTable] = useState<number>(0);
  const [products, setProducts] = useState<EntityType[]>([]);
  const [showCamera, setShowCamera] = useState(false);
  const { dataUser } = route.params;
  const { getFilteredProducts } = useProduct();
  const { updateProduct } = useProduct();

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

  const closeModal = () => {
    setModalActive(false);
  };

  const functionConfirm = async () => {
    closeModal();
    try {
      await updateProduct({ ...deleteItem, active: false }).then(() => {
        show(locale.t('Success.deleteProduct'), 'success');
        if (deleteDataTable) {
          // TODO: improve this
          deleteDataTable();
        }
      });
    } catch (err: any) {
      if (err.status === 500) {
        show(locale.t('Error.deleteProduct'), 'error');
        return;
      }
      show(locale.t('Error.connection'), 'error');
    }
  };

  const handleEditItem = async (item: any) => {
    const productItem: Product = {
      id: item.id,
      name: item.name,
      uPCEAN: item.uPCEAN,
      active: item.active,
    };
    navigation.navigate('ProductDetail', { productItem });
  };
  const dataColumns: ColumnsMetadata[] = [
    {
      key: 'id',
      primary: true,
      visible: false,
    },
    {
      key: 'name',
      label: locale.t('Table.products'),
      visible: true,
      width: '50%',
    },
    {
      key: 'uPCEAN',
      label: isTablet
        ? locale.t('Table.barcode')
        : locale.t('Table.barcodeShort'),
      visible: true,
      width: '25%',
    },
    {
      visible: true,
      key: 'about',
      width: '25%',
      label: 'Actions',
      components: [
        <ButtonUI
          height={50}
          width={isTablet ? 50 : '120%'}
          typeStyle="white"
          onPress={item => handleEditItem(item)}
          iconLeft={<PencilIcon style={styles.icon} />}
        />,

        <ButtonUI
          height={50}
          width={isTablet ? 50 : '120%'}
          typeStyle="white"
          onPress={(item: any) => {
            const productItem: Product = {
              id: item.id,
              name: item.name,
              uPCEAN: item.uPCEAN,
              active: item.active,
            };
            setDeleteItem(productItem);
            setModalActive(true);
          }}
          iconLeft={<TrashIcon style={styles.icon} />}
        />,
      ],
      cellStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },
    },
  ];

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
        {isTablet ? (
          <TableUI
            columns={dataColumns}
            data={products}
            tableHeight={'100%'}
            onRowPress={() => {}}
            isLoading={loading}
            onLoadMoreData={onLoadMoreData}
            commentEmptyTable={locale.t('Table.textEmptyTable')}
            textEmptyTable={locale.t('Table.commentEmptyTable')}
            currentPage={pageTable}
            pageSize={PAGE_SIZE}
            isLoadingMoreData={isLoadingMoreData}
            style={{
              margin: isTablet ? 32 : 24,
            }}
          />
        ) : (
          <View style={styles.contentHeight}>
            <Cards
              title="Products"
              metadata={dataColumns}
              data={products}
              isLoadingMoreData={isLoadingMoreData}
              isLoading={loading}
              pageSize={PAGE_SIZE}
              currentPage={pageTable}
              cardsHeight={450}
              onPressCard={id => {
                const fullItem = products.find(
                  (product: any) => product.id === id,
                );
                handleEditItem(fullItem);
              }}
              onLoadMoreData={onLoadMoreData}
              onAddNewData={() => {
                navigation.navigate('ProductDetail');
              }}
            />
          </View>
        )}
      </View>
      {modalActive && (
        <ModalUI
          title={locale.t('Modal.messageDelete')}
          labelActionButton={locale.t('Common.accept')}
          labelCloseButton={locale.t('Common.cancel')}
          visible={modalActive}
          showModal={closeModal}
          handleAction={functionConfirm}
        />
      )}
    </View>
  );
};

export default Home;
