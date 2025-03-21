import {Dimensions, PixelRatio} from 'react-native';

export const DesignWidth = 412;
export const DesignHeight = 892;
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 412;

export function normalize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}

export const vw = (width: number) => {
  let percent = (width / DesignWidth) * 100;
  const elemWidth = parseFloat(percent + '%');
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const vh = (height: number) => {
  let percent = (height / DesignHeight) * 100;
  const elemHeight = parseFloat(percent + '%');
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};