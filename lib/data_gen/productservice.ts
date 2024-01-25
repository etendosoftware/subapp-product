import { BaseService } from '../base/baseservice';
import {
  Product,
  ProductList,
  GetFilteredProductsParams,
} from './product.types';

class BackService extends BaseService<Product> {
  private static projection = 'prodsubapp';
  private static modelName = 'Product';
  private static fetchName = 'product';

  getModelName(): string {
    return BackService.projection + '/' + BackService.modelName;
  }
  getFetchName(): string {
    return BackService.fetchName;
  }

  mapManyToOne(entity: Product): void {}

  async getFilteredProducts(
    name: string,
    page?: number,
    size?: number,
  ): Promise<ProductList> {
    return this._fetchSearch<GetFilteredProductsParams>('getFilteredProducts', {
      name,
      page,
      size,
    });
  }
}

class FrontService extends BaseService<Product> {
  getModelName(): string {
    throw new Error('Method not implemented.');
  }
  getFetchName(): string {
    throw new Error('Method not implemented.');
  }
  mapManyToOne(entity: Product): void {
    throw new Error('Method not implemented.');
  }
}

export default class ProductService {
  static BACK = new BackService();
  static FRONT = new FrontService();
}
