import {StyleSheet} from 'react-native';
import {isTablet} from './src/utils';

export const generalStyles = StyleSheet.create({
  buttonContainer: {
    width: isTablet ? '30%' : '100%',
  },
  icon: {
    height: 15,
  },
  full: {
    width: '100%',
    height: '100%',
  },
  centerColumn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    display: 'flex',
    flexDirection: isTablet ? 'row' : 'column',
    justifyContent: isTablet ? 'space-between' : 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: isTablet ? 35 : 24,
    marginVertical: 24,
  },
});
