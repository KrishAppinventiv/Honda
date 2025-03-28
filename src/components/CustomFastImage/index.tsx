// library imports
import React from 'react';
import FastImage, { ImageStyle, Source } from 'react-native-fast-image';
import { StyleProp } from 'react-native';
import styles from './styles';

// types
interface CustomImageProps {
  source: Source;
  style?: StyleProp<ImageStyle>;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  onLoad?: () => void;
  onError?: () => void;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  source,
  style,
  resizeMode = 'cover',
  onLoad,
  onError,
}) => {
  return (
    <FastImage
      source={source}
      style={[styles.defaultStyle, style]}
      resizeMode={resizeMode}
      onLoad={onLoad}
      onError={onError}
    />
  );
};
