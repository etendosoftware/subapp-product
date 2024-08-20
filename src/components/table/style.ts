import { StyleSheet } from 'react-native';
import { isTablet } from '../../utils';
import { generalStyles } from '../../../styles';

export const styles = StyleSheet.create({
  ...generalStyles,
  table: {
    display: 'flex',
    alignItems: 'center',
    margin: isTablet ? 32 : 24,
    flex: 1,
  },
  icon: {
    height: isTablet ? 25 : 20,
    width: isTablet ? 25 : 20,
  },
});
