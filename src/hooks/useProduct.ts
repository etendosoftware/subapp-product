import { useEffect, useState } from 'react';
import { Product, ProductList } from '../../lib/data_gen/product.types';
import ProductService from '../../lib/data_gen/productservice';
import { EntityType } from '../../lib/base/baseservice.types';

const PAGE_SIZE = 20;

export const useProduct = () => {
  const [dataFiltered, setDataFiltered] = useState<ProductList | null>(null);
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const [isLoadingMoreData, setIsLoadingMoreData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageTable, setPageTable] = useState<number>(0);
  const [data, setData] = useState<EntityType[]>([]);

  const getFilteredItems = async (
    name: string = '%%',
    page?: number,
    size?: number,
  ) => {
    const products: ProductList = await ProductService.BACK.getFilteredProducts(
      name,
      page,
      size,
    );
    setDataFiltered(products);
    return products;
  };

  useEffect(() => {
    handleData();
  }, []);

  const createItem = async (body: Product) => {
    const defaultValues: Product = {
      name: body.name,
      uPCEAN: body.uPCEAN,
    };
    const res = await ProductService.BACK.save(defaultValues);
    return res;
  };

  const updateItem = async (body: Product) => {
    const res = await ProductService.BACK.save(body);
    return res;
  };

  const handleData = async (
    nameFilter?: string,
    page: number = 0,
    size: number = 20,
    reset: boolean = false,
  ) => {
    setLoading(true);
    setInputValue(nameFilter);
    if (reset) {
      setData([]);
      setPageTable(0);
      setIsLoadingMoreData(true);
    }
    await getFilteredItems(nameFilter, page, size).then(
      (newData: ProductList) => {
        setLoading(false);
        if (size !== newData.content.length) {
          setIsLoadingMoreData(false);
        }
        setData((prevProducts: Array<EntityType>) => {
          return newData ? [...prevProducts, ...newData.content] : [];
        });
        setPageTable(page);
      },
    );
  };

  const resetTable = async (nameFilter?: string) => {
    await handleData(nameFilter, 0, PAGE_SIZE, true);
  };

  const onLoadMoreData = async (currentPage: number, pageSize: number) => {
    await handleData(inputValue, currentPage, pageSize);
  };

  return {
    createItem,
    data,
    dataFiltered,
    getFilteredItems,
    handleData,
    isLoadingMoreData,
    loading,
    onLoadMoreData,
    PAGE_SIZE,
    pageTable,
    resetTable,
    updateItem,
  };
};

export default useProduct;
