import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Text,
  StyleSheet,
} from 'react-native';
import {Images} from '../../assets';
import styles from './styles';

interface HeaderProps {
  headerStyle?: object;
  leftIcon?: ImageSourcePropType;
  onleftPress?: () => void;
  leftButtonStyle?: object;
  leftIconStyle?: object;
  headerImgStyle?: object;
  textHeading?: string;
  rightIcon?: ImageSourcePropType;
  onRightPress?: () => void;
  rightButton?: boolean;
  rightButtonStyle?: object;
  rightIconStyle?: object;
  leftButton?: boolean;
  backIcon?: any;
  onBackPress?: () => void;
}

const GlobalHeader: React.FC<HeaderProps> = ({
  headerStyle,
  leftIcon,
  onleftPress,
  leftButtonStyle,
  leftIconStyle,
  headerImgStyle,
  textHeading,
  rightIcon,
  onRightPress,
  rightButton,
  rightButtonStyle,
  rightIconStyle,
  leftButton,
  
  
}: HeaderProps) => {
  return (
    <View style={[styles.header, headerStyle]}>
     
      {leftButton && (
        <TouchableOpacity
          style={[styles.backButton, leftButtonStyle]}
          onPress={onleftPress}>
          {leftIcon && (
            <Image source={leftIcon} style={[styles.backIcon, leftIconStyle]} />
          )}
        </TouchableOpacity>
      )}
     
      <View style={{alignItems: 'center'}}>
        <Image
          source={Images.honda}
          style={[styles.headerImg, headerImgStyle]}
        />
        {textHeading && <Text style={styles.textHeading}>{textHeading}</Text>}
      </View>

      
      {rightButton && (
        <TouchableOpacity
          style={[styles.rightButton, rightButtonStyle]}
          onPress={onRightPress}>
          {rightIcon && (
            <Image
              source={rightIcon}
              style={[styles.rightIcon, rightIconStyle]}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GlobalHeader;
