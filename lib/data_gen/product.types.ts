import {EntityType, KV} from '../base/baseservice.types';

export type GetAllProductsParams = KV & {};
export type GetFilteredProductsParams = KV & {
  name: string;
  page?: number;
  size?: number;
  projection?: string;
};

export type ProductList = Array<Product>;

export interface Product extends EntityType {
  uPCEAN?: string;
  name?: string;
  id?: string;
  productCategoryId?: string;
  productCategory?: string;
  active?: boolean;
  description?: string;
  organization?: string;
  productType?: string;
  productValue?: string;
  searchKey?: string;
  taxCategory?: string;
  uOM?: string;
}
