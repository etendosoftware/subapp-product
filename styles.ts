import { StyleSheet } from 'react-native';
import { isTablet } from './src/utils';

export const generalStyles = StyleSheet.create({
  buttonContainer: {
    width: isTablet ? '30%' : '100%',
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
  icon: {
    width: 24,
    height: 24,
  },
  iconCamera:{
    width: 22,
    height: 22,
  }
});
