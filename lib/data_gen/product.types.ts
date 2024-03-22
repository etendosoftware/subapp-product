import {DASResponse, EntityType, KV} from '../base/baseservice.types';

export type GetAllProductParams = KV & {};

export type GetFilteredProductsParams = KV & {
  name: string;
  page?: number;
  size?: number;
  projection?: string;
};

export type ProductList = DASResponse<Product>;

export interface Product extends EntityType {
  uPCEAN?: string;
  name?: string;
  active?: boolean;
  id?: string;
}
