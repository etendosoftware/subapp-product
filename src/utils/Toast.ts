import ToastRN, {ToastPosition, ToastType} from 'react-native-toast-message';
import locale from '../localization/locale';

interface ToastOptions {
  type: ToastType;
  position: ToastPosition;
  visibilityTime?: number;
  autoHide?: boolean;
  topOffset?: number;
  bottomOffset?: number;
}

const DEFAULT_TOAST_OPTIONS: ToastOptions = {
  type: 'error',
  position: 'bottom',
  visibilityTime: 3000,
  autoHide: true,
  topOffset: 30,
  bottomOffset: 40,
};

export const Toast = (text: string, options: Partial<ToastOptions> = {}) => {
  const finalOptions: ToastOptions = {
    ...DEFAULT_TOAST_OPTIONS,
    ...options,
  };

  return ToastRN.show({
    type: finalOptions.type,
    position: finalOptions.position,
    text1: locale.t(text),
    visibilityTime: finalOptions.visibilityTime,
    autoHide: finalOptions.autoHide,
    topOffset: finalOptions.topOffset,
    bottomOffset: finalOptions.bottomOffset,
  });
};
