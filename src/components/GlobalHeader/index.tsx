import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Platform,
} from 'react-native';
import { Images} from '../../assets';
import { vh, vw } from '../../utils/dimension';
import { colors } from '../../theme';


interface HeaderProps {
  headerStyle?: object;
  backButton?: boolean;
  backIcon?: ImageSourcePropType;
  onBackPress?: () => void;
  backButtonStyle?: object;
  backIconStyle?: object;
  headerImgStyle?: object;
  rightButton?: boolean;
  rightIcon?: ImageSourcePropType;
  onRightPress?: () => void;
  rightButtonStyle?: object;
  rightIconStyle?: object;
}

const GlobalHeader = ({
  backButton = false,
  backIcon,
  onBackPress,
  headerStyle,
  backButtonStyle,
  backIconStyle,
  headerImgStyle,
  rightButton = false,
  rightIcon,
  onRightPress,
  rightButtonStyle,
  rightIconStyle,
}: HeaderProps) => {
  return (
    <View style={[styles.header, headerStyle]}>
      {/* Left Back Button */}
      {backButton && (
        <TouchableOpacity
          style={[styles.backButton, backButtonStyle]}
          onPress={onBackPress}>
          {backIcon && (
            <Image source={backIcon} style={[styles.backIcon, backIconStyle]} />
          )}
        </TouchableOpacity>
      )}

      {/* Logo */}
      <Image source={Images.honda} style={[styles.headerImg, headerImgStyle]} />

      {/* Right Button */}
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

const styles = StyleSheet.create({
  header: {
    paddingVertical:Platform.OS==='ios'? vh(14):vh(38),
    paddingHorizontal: vw(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImg: {
    width: vw(131.86),
    height: vw(16),
    resizeMode: 'contain',
    alignSelf: 'center',
    flex: 1,
  },
  backButton: {
    
   
   
  },
  backIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  rightButton: {
    // padding: vw(8),
    borderRadius: 100,
    // backgroundColor: colors.red,
  },
  rightIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
});

export default GlobalHeader;