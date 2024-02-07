import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
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
import { Product } from '../../../lib/data_gen/product.types';
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
  const [modalActive, setModalActive] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const { dataUser } = route.params;
  const {
    updateItem,
    resetTable,
    onLoadMoreData,
    PAGE_SIZE,
    loading,
    data,
    pageTable,
    isLoadingMoreData,
  } = useProduct();

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

  const resetInput = () => {
    setInputValue('');
  };

  const functionConfirm = async () => {
    closeModal();
    try {
      await updateItem({ ...deleteItem, active: false }).then(() => {
        show(locale.t('Success.deleteProduct'), 'success');
        resetTable();
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
            data={data}
            tableHeight={50}
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
              height: 50,
            }}
          />
        ) : (
          <View style={styles.contentHeight}>
            <Cards
              title="Products"
              metadata={dataColumns}
              data={data}
              isLoadingMoreData={isLoadingMoreData}
              isLoading={loading}
              pageSize={PAGE_SIZE}
              currentPage={pageTable}
              cardsHeight={500}
              onPressCard={id => {
                const fullItem = data.find((product: any) => product.id === id);
                handleEditItem(fullItem);
              }}
              onLoadMoreData={onLoadMoreData}
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
