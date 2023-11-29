import { useState } from 'react';
import { Product, ProductList } from '../../lib/data_gen/product.types';
import ProductService from '../../lib/data_gen/productservice';
import { generateRandomNumber, isTablet } from '../utils';
import locale from '../localization/locale';
import { Columns } from 'etendo-ui-library/dist-native/components/table/Table.types';

export const useProduct = () => {
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

  const getFilteredProducts = async (name: string = '%%') => {
    const products = await ProductService.BACK.getFilteredProducts(name);
    setProductsFiltered(products);
    return products;
  };

  const createProduct = async (body: Product) => {
    const defaultValues: Product = {
      active: true,
      description: 'default',
      name: body.name,
      organization: '/B843C30461EA4501935CB1D125C9C25A',
      productCategory: '/DC7F246D248B4C54BFC5744D5C27704F',
      productType: 'I',
      productValue: 'default',
      searchKey: `ES/00${generateRandomNumber()}`,
      uPCEAN: body.uPCEAN,
      taxCategory: '/E020A69A1E784DC39BE57C41D6D5DB4E',
      uOM: '/100',
    };
    const res = await ProductService.BACK.save(defaultValues);
    return res;
  };

  const columns : Columns[] = [
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
  ]

  const updateProduct = async (body: Product) => {
    const res = await ProductService.BACK.save(body);
    return res;
  };

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ProductList>([]);

  const doSearch = async (nameFilter?: string) => {
    try {
      setLoading(true);
      const filteredProducts = await getFilteredProducts(nameFilter);
      setData(filteredProducts);
    } catch (error) {
      console.error("Error while fetching filtered products:", error);
    } finally {
      setLoading(false);
    }
  };
  return { doSearch, data, loading, columns, updateProduct};

  //return {productsFiltered, getFilteredProducts, createProduct, updateProduct};
}

export default useProduct;
