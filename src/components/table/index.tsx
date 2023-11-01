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
import {NavigationProp} from '@react-navigation/native';
import {IProduct} from '../../interfaces';
import locale from '../../localization/locale';
import {Product, ProductList} from '../../../lib/data_gen/product.types';

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

interface TableProps {
  navigation: NavigationProp<any>;
  data: ProductList;
}
const Table = ({navigation, data}: TableProps) => {
  const [modalActive, setModalActive] = useState(false);

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
      actions: [
        {
          component: <IconTouchable action="edit" />,
          onAction: (item: any) => {
            console.log('item1', item);
            const itemSelected = data.find(itemData => itemData.id === item);
            if (!itemSelected) {
              return;
            }
            const productItem: Product = {
              id: item,
              name: itemSelected.name,
              uPCEAN: itemSelected.uPCEAN,
            };

            navigation.navigate('ProductDetail', {productItem});
          },
        },
        {
          component: <IconTouchable action="delete" />,
          onAction: (item: any) => {
            console.log('item2', item);
            setModalActive(true);
          },
        },
      ],
    },
  ];

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <View style={styles.table}>
      <TableUI
        columns={dataColumns}
        data={data}
        tableHeight={'100%'}
        onRowPress={(algo: any) => {
          console.log('algo', algo);
        }}
      />
      {modalActive && (
        <Modal
          textModal={locale.t('Modal.messageDelete')}
          textConfirm={locale.t('Common.accept')}
          textCancel={locale.t('Common.cancel')}
          visible={modalActive}
          setVisible={closeModal}
          functionConfirm={closeModal}
          functionCancel={closeModal}
        />
      )}
    </View>
  );
};

export default Table;
