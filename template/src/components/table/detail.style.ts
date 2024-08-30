import { StyleSheet } from 'react-native';
import { generalStyles } from '../../../styles';
import { isTablet } from '../../utils';

export const TableDetailStyle = StyleSheet.create({
  ...generalStyles,
  container: {
    width: '100%',
    display: 'flex',
    flex: 1,
  },
  inputSection: {
    display: 'flex',
    flexDirection: isTablet ? 'row' : 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: isTablet ? 35 : 24,
  },
  topSection: {
    marginHorizontal: isTablet ? 35 : 24,
    marginVertical: 24,
  },
});
