import {StyleSheet} from 'react-native';
import {generalStyles} from '../../../styles';
import {isTablet} from '../../utils';

export const styles = StyleSheet.create({
  ...generalStyles,
  container: {
    display: 'flex',
    flexDirection: isTablet ? 'row' : 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: isTablet ? 32 : 24,
    gap: 12,
    width: isTablet ? '65%' : '88%',
  },
  searchInput: {
    width: isTablet ? '50%' : '100%',
    marginBottom: isTablet ? 0 : 6,
    marginRight: isTablet ? 12 : 0,
  },
});
