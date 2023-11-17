import {NavigationProp} from '@react-navigation/native';
import {ProductList} from '../../../lib/data_gen/product.types';

export type PassDataToParentTable = {
  refresh: boolean;
};
export interface TableProps {
  navigation: NavigationProp<any>;
  data: ProductList;
  passDataToParent?: (params: PassDataToParentTable) => void;
}
