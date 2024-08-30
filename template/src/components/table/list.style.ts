import { StyleSheet } from 'react-native';
import { generalStyles } from '../../../styles';
import { isTablet } from '../../utils';
import { PRIMARY_100 } from '../../styles/colors';

export const TableListStyle = StyleSheet.create({
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
    marginBottom: 6,
    color: PRIMARY_100,
  },
  topSection: {
    margin: isTablet ? 32 : 24,
    gap: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#202452',
  },
  button: {
    backgroundColor: '#202452',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    height: 20,
    width: 20,
  },
});
