import { BaseService } from '../base/baseservice';
import { ProductCategory } from './productcategory.types';

class BackService extends BaseService<ProductCategory> {
  private static projection = 'prodsubapp';
  private static modelName = 'Product_Category';
  private static fetchName = 'productCategory';

  getModelName(): string {
    return BackService.projection + '/' + BackService.modelName;
  }
  getFetchName(): string {
    return BackService.fetchName;
  }

  mapManyToOne(entity: ProductCategory): void {}
}

class FrontService extends BaseService<ProductCategory> {
  getModelName(): string {
    throw new Error('Method not implemented.');
  }
  getFetchName(): string {
    throw new Error('Method not implemented.');
  }
  mapManyToOne(entity: ProductCategory): void {
    throw new Error('Method not implemented.');
  }
}

export default class ProductCategoryService {
  static BACK = new BackService();
  static FRONT = new FrontService();
}
