import {useState} from 'react';
import {Product} from '../../lib/data_gen/product.types';
import ProductService from '../../lib/data_gen/productservice';
import {generateRandomNumber} from '../utils';

export const useProduct = () => {
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

  const getFilteredProducts = async (
    name: string = '%%',
    page?: number,
    size?: number,
  ) => {
    const products = await ProductService.BACK.getFilteredProducts(
      name,
      page,
      size,
    );
    setProductsFiltered(products);
    return products;
  };

  const createProduct = async (body: Product) => {
    const defaultValues: Product = {
      name: body.name,
      uPCEAN: body.uPCEAN,
    };
    const res = await ProductService.BACK.save(defaultValues);
    return res;
  };

  const updateProduct = async (body: Product) => {
    const res = await ProductService.BACK.save(body);
    return res;
  };

  return {productsFiltered, getFilteredProducts, createProduct, updateProduct};
};

export default useProduct;
