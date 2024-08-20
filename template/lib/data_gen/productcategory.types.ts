import {DASResponse, EntityType, KV} from '../base/baseservice.types';

export type GetAllProductCategoryParams = KV & {};


export type ProductCategoryList = DASResponse<ProductCategory>;

export interface ProductCategory extends EntityType {
  name?: string;
  id?: string;
}
