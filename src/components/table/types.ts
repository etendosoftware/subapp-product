import {NavigationProp} from '@react-navigation/native';
import {ProductList} from '../../../lib/data_gen/product.types';
import {EntityType} from '../../../lib/base/baseservice.types';

export type PassDataToParentTable = {
  refresh: boolean;
};
export interface TableProps {
  navigation: NavigationProp<any>;
  data: EntityType[];
  isLoading: boolean;
  pageSize: number;
  onLoadMoreData?: (currentPage: number, pageSize: number) => void;
  currentPage?: number;
  isLoadingMoreData?: boolean;
  deleteData?: (nameFilter?: string) => void;
}
