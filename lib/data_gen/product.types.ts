import {DASResponse, EntityType, KV} from '../base/baseservice.types';

export type GetAllProductsParams = KV & {};
export type GetFilteredProductsParams = KV & {
  name: string;
};

export type ProductList = Array<Product>;

export interface Product extends EntityType {
  uPCEAN?: string;
  name?: string;
  id?: string;
  productCategoryId?: string;
  productCategory?: string;
}
