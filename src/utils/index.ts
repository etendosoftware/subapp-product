import {Dimensions, PixelRatio} from 'react-native';

// getting screen width and height
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const generateRandomNumber = () => {
  let randomString = Math.floor(
    1000000000 + Math.random() * 9000000000,
  ).toString();
  return randomString;
};

const isTabletDevice = () => {
  let pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (pixelDensity < 1.6 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
  }
};

export const isTablet = isTabletDevice();
