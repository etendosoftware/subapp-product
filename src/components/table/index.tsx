import React, { useState } from 'react';
import { styles } from './style';
import { View } from 'react-native';
import {
  Table as TableUI,
  TrashIcon,
  PencilIcon,
  Button,
  show,
} from 'etendo-ui-library';
import { isTablet } from '../../utils';
import Modal from '../modal';
import locale from '../../localization/locale';
import { Product } from '../../../lib/data_gen/product.types';
import useProduct from '../../hooks/useProduct';
import { TableProps } from './types';
import { ColumnsMetadata } from 'etendo-ui-library/dist-native/components/table/Table.types';

const Table = ({
  navigation,
  data,
  isLoading,
  onLoadMoreData,
  pageSize,
  currentPage,
  isLoadingMoreData,
  deleteData,
}: TableProps) => {
  const [modalActive, setModalActive] = useState(false);
  const [deleteItem, setDeleteItem] = useState<Product | undefined>(undefined);

  const { updateProduct } = useProduct();

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
        <Button
          height={50}
          width={isTablet ? 50 : '120%'}
          typeStyle="white"
          onPress={item => {
            const productItem: Product = {
              id: item.id,
              name: item.name,
              uPCEAN: item.uPCEAN,
              active: item.active,
            };
            navigation.navigate('ProductDetail', { productItem });
          }}
          iconLeft={<PencilIcon style={styles.icon} />}
        />,
        <Button
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
    },
  ];

  const closeModal = () => {
    setModalActive(false);
  };

  const functionConfirm = async () => {
    closeModal();
    try {
      await updateProduct({ ...deleteItem, active: false }).then(() => {
        show(locale.t('Success.deleteProduct'), 'success');
        if (deleteData) {
          deleteData('');
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

  return (
    <View style={styles.table}>
      <TableUI
        columns={dataColumns}
        data={data}
        tableHeight={'100%'}
        onRowPress={() => {}}
        isLoading={isLoading}
        onLoadMoreData={onLoadMoreData}
        commentEmptyTable={locale.t('Table.textEmptyTable')}
        textEmptyTable={locale.t('Table.commentEmptyTable')}
        currentPage={currentPage}
        pageSize={pageSize}
        isLoadingMoreData={isLoadingMoreData}
      />
      {modalActive && (
        <Modal
          textModal={locale.t('Modal.messageDelete')}
          textConfirm={locale.t('Common.accept')}
          textCancel={locale.t('Common.cancel')}
          visible={modalActive}
          setVisible={closeModal}
          functionConfirm={functionConfirm}
          functionCancel={closeModal}
        />
      )}
    </View>
  );
};

export default Table;
