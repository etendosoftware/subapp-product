import { NavigationProp } from '@react-navigation/native';
import { EntityType } from '../../lib/base/baseservice.types';

export type PassDataToParentTable = {
  refresh: boolean;
};
export interface TableProps {
  navigation: NavigationProp<any>;
  route: any;
  data: EntityType[];
  isLoading: boolean;
  pageSize: number;
  onLoadMoreData?: (currentPage: number, pageSize: number) => void;
  currentPage?: number;
  isLoadingMoreData?: boolean;
  deleteData?: (item: any) => Promise<void>;
  columns: any[];
  labels: {
    dataName: string;
    successfulDelete: string;
    errorDelete: string;
  };
  deleteDataItem?: any;
}
