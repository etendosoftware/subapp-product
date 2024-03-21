import { DimensionValue, Dimensions, StyleSheet } from 'react-native';
import { generalStyles } from '../../../styles';
import { isTablet } from '../../utils';

const width = Dimensions.get('screen').width;
export const widthButton: DimensionValue = isTablet ? '70%' : width - 48;

export const styles = StyleSheet.create({
  ...generalStyles,
  container: {
    marginHorizontal: isTablet ? 32 : 24,
    alignItems:'center'
  },
});
