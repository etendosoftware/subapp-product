import {useState} from 'react';
import {Product} from '../../lib/data_gen/product.types';
import ProductService from '../../lib/data_gen/productservice';
import {generateRandomNumber} from '../utils';

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
    const res = await ProductService.BACK.saveProduct(defaultValues);
    return res;
  };

  const updateProduct = async (body: Product) => {
    const res = await ProductService.BACK.saveProduct(body);
    return res;
  };

  return {productsFiltered, getFilteredProducts, createProduct, updateProduct};
};

export default useProduct;
