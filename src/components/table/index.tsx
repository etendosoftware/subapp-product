import React, {useState} from 'react';
import {styles} from './style';
import {View} from 'react-native';
import {
  Table as TableUI,
  TrashIcon,
  PencilIcon,
  CancelIcon,
  CheckIcon,
} from 'etendo-ui-library';
import {isTablet} from '../../utils';
import {Columns} from 'etendo-ui-library/dist-native/components/table/Table.types';
import Modal from '../modal';
import locale from '../../localization/locale';
import {Product} from '../../../lib/data_gen/product.types';
import useProduct from '../../hooks/useProduct';
import {Toast} from '../../utils/Toast';
import {TableProps} from './types';

interface IIconTouchable {
  action: string;
}

const IconTouchable = ({action}: IIconTouchable) => {
  let icon;
  switch (action) {
    case 'edit':
      icon = <PencilIcon style={styles.icon} />;
      break;
    case 'cancel':
      icon = <CancelIcon style={styles.icon} />;
      break;
    case 'delete':
      icon = <TrashIcon style={styles.icon} />;
      break;
    case 'check':
      icon = <CheckIcon style={styles.icon} />;
      break;

    default:
      icon = <CheckIcon style={styles.icon} />;
      break;
  }
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: isTablet ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
        marginRight: isTablet ? '10%' : '5%',
      }}>
      {icon}
    </View>
  );
};

const Table = ({navigation, data, passDataToParent}: TableProps) => {
  const [modalActive, setModalActive] = useState(false);
  const [deleteId, setDeleteId] = useState<string>('');

  const {updateProduct} = useProduct();

  const dataColumns: Columns[] = [
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
      key: 'actions',
      label: isTablet ? locale.t('Table.actions') : '',
      visible: true,
      width: '25%',
      cellStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },
      components: [
        {
          component: <IconTouchable action="edit" />,
          onAction: (item: any) => {
            const itemSelected = data.find(itemData => itemData.id === item);
            if (!itemSelected) {
              return;
            }
            const productItem: Product = {
              id: item,
              name: itemSelected.name,
              uPCEAN: itemSelected.uPCEAN,
              searchKey: itemSelected.searchKey,
            };

            navigation.navigate('ProductDetail', {productItem});
          },
        },
        {
          component: <IconTouchable action="delete" />,
          onAction: (item: any) => {
            setDeleteId(item);
            setModalActive(true);
          },
        },
      ],
    },
  ];

  const closeModal = () => {
    setModalActive(false);
  };

  const functionConfirm = async () => {
    setModalActive(false);

    try {
      await updateProduct({id: deleteId, active: false});
      Toast('Success.deleteProduct', {type: 'success'});
      if (passDataToParent) {
        passDataToParent({refresh: true});
      }
    } catch (err: any) {
      console.log({err});
      if (err.status === 500) {
        return Toast('Error.server');
      }
      Toast('Error.connection');
    }
  };

  return (
    <View style={styles.table}>
      <TableUI
        columns={dataColumns}
        data={data}
        tableHeight={'100%'}
        onRowPress={(row: any) => {}}
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
