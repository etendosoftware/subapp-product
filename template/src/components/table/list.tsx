import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Navbar from '../../components/navbar';

import {
  Button as ButtonUI,
  PlusIcon,
  TitleContainer,
} from 'etendo-ui-library';

import Search from '../../components/search';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { INavigationContainerProps } from '../../interfaces';
import { EntityType } from '../../lib/base/baseservice.types';
import Table from '../../components/table';
import { TableListStyle } from './list.style';

interface TableListProps {
  navigation: NavigationProp<any>;
  route: any;
  navigationContainer: INavigationContainerProps;
  getData: (
    name: string | undefined,
    page?: number,
    size?: number,
  ) => Promise<any>;
  labels: {
    dataName: string;
    navbarTitle: string;
    containerTitle: string;
    buttonNew: string;
    searchPlaceholder: string;
    successfulDelete: string;
    errorDelete: string;
  };
  columns: any[];
  deleteDataItem: any;
}

const TableList = ({
  navigation,
  route,
  navigationContainer,
  getData,
  labels,
  columns,
  deleteDataItem,
}: TableListProps) => {
  const [rows, setRows] = useState<EntityType[]>([]);
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const { dataUser } = route.params;
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
      setRows([]);
      setPageTable(0);
      setIsLoadingMoreData(true);
    }
    await getData(nameFilter, page, size).then((newData: any) => {
      setLoading(false);
      if (size !== newData.content.length) {
        setIsLoadingMoreData(false);
      }
      setRows((prevRows: Array<EntityType>) => {
        return newData ? [...prevRows, ...newData.content] : [];
      });
      setPageTable(page);
    });
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
    <View style={TableListStyle.container}>
      <View>
        <Navbar
          title={labels.navbarTitle}
          username={dataUser?.username}
          onOptionSelected={() => {
            navigationContainer.navigate('Home');
          }}
        />
        <TitleContainer
          title={labels.containerTitle}
          styleContainer={{ padding: 32 }}
          buttons={[
            <ButtonUI
              key={'newData'}
              height={50}
              typeStyle="secondary"
              onPress={() => {
                navigation.navigate(labels.dataName + 'Detail');
              }}
              text={labels.buttonNew}
              iconLeft={<PlusIcon style={TableListStyle.icon} />}
            />,
          ]}
        />
        <Search
          onSubmit={resetTable}
          value={inputValue}
          labels={{ searchPlaceholder: labels.searchPlaceholder }}
        />
      </View>
      <Table
        navigation={navigation}
        route={route}
        data={rows}
        isLoading={loading}
        pageSize={PAGE_SIZE}
        onLoadMoreData={onLoadMoreData}
        currentPage={pageTable}
        isLoadingMoreData={isLoadingMoreData}
        deleteData={deleteDataTable}
        columns={columns}
        labels={{ dataName: labels.dataName, successfulDelete: labels.successfulDelete, errorDelete: labels.errorDelete }}
        deleteDataItem={deleteDataItem}
      />
    </View>
  );
};

export default TableList;
