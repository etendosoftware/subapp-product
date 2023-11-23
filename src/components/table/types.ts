import {NavigationProp} from '@react-navigation/native';
import {ProductList} from '../../../lib/data_gen/product.types';

export type PassDataToParentTable = {
  refresh: boolean;
};
export interface TableProps {
  navigation: NavigationProp<any>;
  data: ProductList;
  isLoading: boolean;
  pageSize: number;
  loadMoreData?: (currentPage: number, pageSize: number) => void;
  currentPage?: number;
  isLoadingMoreData?: boolean;
  deleteData?: (nameFilter?: string) => void;
}
