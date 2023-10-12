import React, {useState} from 'react';
import TableUI from 'etendo-ui-library/dist-native/components/table/Table';
import {styles} from './style';
import {View} from 'react-native';
import {TrashIcon} from 'etendo-ui-library/dist-native/assets/images/icons/TrashIcon';
import {PencilIcon} from 'etendo-ui-library/dist-native/assets/images/icons/PencilIcon';
import {CancelIcon} from 'etendo-ui-library/dist-native/assets/images/icons/CancelIcon';
import {CheckIcon} from 'etendo-ui-library/dist-native/assets/images/icons/CheckIcon';
import {isTablet} from '../../utils';
import {useTranslation} from 'react-i18next';
import {Columns} from 'etendo-ui-library/dist-native/components/table/Table.types';
import Modal from '../modal';
import {NavigationProp} from '@react-navigation/native';
import {IProduct} from '../../interfaces';

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
}
const Table = ({navigation}: TableProps) => {
  const [modalActive, setModalActive] = useState(false);

  const {t} = useTranslation();
  const dataTable: IProduct[] = [
    {
      _id: '637289556475c964f56cf7b6',
      name: 'Gel Facial Nivea Exfoliante Aloe Vera 75ml',
      barcode: '4005808940001',
    },
    {
      _id: '637289556475c964f56cfasa6',
      name: 'Alimento Para Gatos en Lata Whiskas Pasta Gatitos 340 Gr',
      barcode: '4005808940002',
    },
    {
      _id: '637289556475c964f56cf7b7',
      name: 'Cerveza Quilmes Doble Malta 473cc Sixpack',
      barcode: '4005808940003',
    },
    {
      _id: '637289556475c964f56cfasa6',
      name: 'Alimento Para Gatos en Lata Whiskas Pasta Gatitos 340 Gr',
      barcode: '4005808940002',
    },
    {
      _id: '637289556475c964f56cf7b7',
      name: 'Cerveza Quilmes Doble Malta 473cc Sixpack',
      barcode: '4005808940003',
    },
    {
      _id: '637289556475c964f56cfasa6',
      name: 'Alimento Para Gatos en Lata Whiskas Pasta Gatitos 340 Gr',
      barcode: '4005808940002',
    },
    {
      _id: '637289556475c964f56cf7b7',
      name: 'Cerveza Quilmes Doble Malta 473cc Sixpack',
      barcode: '4005808940003',
    },
    {
      _id: '637289556475c964f56cfasa6',
      name: 'Alimento Para Gatos en Lata Whiskas Pasta Gatitos 340 Gr',
      barcode: '4005808940002',
    },
    {
      _id: '637289556475c964f56cf7b7',
      name: 'Cerveza Quilmes Doble Malta 473cc Sixpack',
      barcode: '4005808940003',
    },
  ];

  const dataColumns: Columns[] = [
    {
      key: '_id',
      primary: true,
      visible: false,
    },
    {
      key: 'name',
      label: t('Table.products'),
      visible: true,
      width: '50%',
    },
    {
      key: 'barcode',
      label: isTablet ? t('Table.barcode') : t('Table.barcodeShort'),
      visible: true,
      width: '25%',
    },
    {
      key: 'actions',
      label: isTablet ? t('Table.actions') : '',
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
            const itemSelected = dataTable.find(
              itemData => itemData._id === item,
            );
            if (!itemSelected) {
              return;
            }
            const productItem: IProduct = {
              _id: item,
              name: itemSelected.name,
              barcode: itemSelected.barcode,
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
        data={dataTable}
        tableHeight={'100%'}
        onRowPress={algo => {
          console.log('algo', algo);
        }}
      />
      {modalActive && (
        <Modal
          textModal={t('Modal.messageDelete')}
          textConfirm={t('Common.accept')}
          textCancel={t('Common.cancel')}
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
