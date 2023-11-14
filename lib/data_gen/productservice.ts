import {BaseService} from '../base/baseservice';
import {Product, ProductList, GetFilteredProductsParams} from './product.types';

class BackService extends BaseService<Product> {
  private static modelName = 'Product';
  private static fetchName = 'product';

  getModelName(): string {
    return BackService.modelName;
  }
  getFetchName(): string {
    return BackService.fetchName;
  }

  mapManyToOne(entity: Product): void {
    if (entity.productCategoryId) {
      entity.productCategory = `productCategory/${entity.productCategoryId}`;
    }
  }

  async getFilteredProducts(name: string): Promise<ProductList> {
    try {
      const resp = await this._fetchSearch<GetFilteredProductsParams>(
        'getFilteredProducts',
        {name},
        'ProdSubApp',
      );
      return resp;
    } catch (error) {
      throw error;
    }
  }

  async createProduct(data: Product): Promise<any> {
    const response = this.save(data);
    return response;
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
  // to ignore
  // async save(data: Product): Promise<Product> {
  //   const req = await fetch(`/api/Product/${data.id}`, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //   });
  //   return await req.json();
  // }
}

export default class ProductService {
  static BACK = new BackService();
  static FRONT = new FrontService();
}
