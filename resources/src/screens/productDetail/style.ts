import {StyleSheet} from 'react-native';
import {generalStyles} from '../../../styles';
import {isTablet} from '../../utils';
import {PRIMARY_100} from '../../styles/colors';

export const styles = StyleSheet.create({
  ...generalStyles,
  container: {
    width: '100%',
    display: 'flex',
    flex: 1,
  },
  title: {
    fontSize: 29,
    fontWeight: '600',
    textAlign: 'left',
    color: PRIMARY_100,
  },
  buttonContainer: {
    width: isTablet ? '40%' : '60%',
    margin: 6,
  },

  inputSection: {
    display: 'flex',
    flexDirection: isTablet ? 'row' : 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: isTablet ? 35 : 24,
  },
  buttonSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: isTablet ? 'flex-end' : 'center',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: isTablet ? 0 : 32,
    width: isTablet ? '40%' : '75%',
  },
});
