import React, { useState } from 'react';
import { styles } from './style';
import { View } from 'react-native';
import {
  Table as TableUI,
  Trash2Icon,
  Edit2Icon,
  Button,
  show,
} from 'etendo-ui-library';
import { isTablet } from '../../utils';
import Modal from '../modal';
import locale from '../../localization/locale';
import { TableProps } from './types';
import logger from '../../utils/log';

const Table = ({
  navigation,
  route,
  data,
  isLoading,
  onLoadMoreData,
  pageSize,
  currentPage,
  isLoadingMoreData,
  deleteData,
  columns,
  labels,
  deleteDataItem
}: TableProps) => {
  const [currentItem, setCurrentItem] = useState<any>();
  const [modalActive, setModalActive] = useState(false);

  const dataColumns: any[] = [
    ...columns,
    {
      visible: true,
      key: 'about',
      width: '25%',
      label: 'Actions',
      components: [
        <Button
          key={'edit'}
          height={50}
          width={isTablet ? 50 : '120%'}
          typeStyle="white"
          onPress={item => {
            navigation.navigate(labels.dataName + 'Detail', { item });
          }}
          iconLeft={<Edit2Icon style={styles.icon} />}
        />,
        <Button
          key={'delete'}
          height={50}
          width={isTablet ? 50 : '120%'}
          typeStyle="white"
          onPress={(item: any) => {
            setCurrentItem(item);
            setModalActive(true);
          }}
          iconLeft={<Trash2Icon style={styles.icon} />}
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

  const closeModal = () => {
    setModalActive(false);
  };

  const functionConfirm = async () => {
    closeModal();
    try {
      await deleteDataItem(currentItem).then(() => {
        show(labels.successfulDelete, 'success');
        if (deleteData) {
          deleteData('');
        }
      });
    } catch (err: any) {
      logger('Error', JSON.stringify(err));
      if (err.status === 500) {
        show(labels.errorDelete, 'error');
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
