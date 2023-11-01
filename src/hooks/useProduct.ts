import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Product} from '../../lib/data_gen/product.types';
import ProductService from '../../lib/data_gen/productservice';

export const useProduct = () => {
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

  const getFilteredProducts = async (name: string = '%%') => {
    try {
      const token = (await AsyncStorage.getItem('tokenSubapp')) || '';
      ProductService.BACK.authToken = token;
      const products = await ProductService.BACK.getFilteredProducts(name);
      setProductsFiltered(products);
      return products;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return {productsFiltered, getFilteredProducts};
};

export default useProduct;
