import {StyleSheet} from 'react-native';
import {PRIMARY_100} from '../../styles/colors';
import {isTablet} from '../../utils';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
  },
  modalContent: {
    width: isTablet ? '30%' : '80%',
    height: isTablet ? '35%' : '25%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: 29,
    fontWeight: '600',
    textAlign: 'center',
    color: PRIMARY_100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonModalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    width: isTablet ? '40%' : '45%',
  },
});
