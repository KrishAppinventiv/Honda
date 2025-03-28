import React from 'react';
import {View, StyleSheet, Image, ViewStyle} from 'react-native';
import { useColors } from '../../../hooks';
import { IMAGES, vw } from '../../../styles';
import Screen from '../../../components/Screen';

/**
 * @function Splash
 * @returns Splash Screen Component
 * @description Defined Splash Screen
 */

const Splash = () => {
  /**
   * @description Initialize hooks
   */
  const Color = useColors();
  /**
   * @return Returning JSX of Splash Screen
   */
  return (
    <View style={styles.mainContainer}>
      <Screen
        statusBarColor={Color.WHITE}
        backgroundColor={Color.WHITE}
        contentContainerStyle={styles.contentContainerStyle}
        preset="fixed"
        style={styles.mainContainer}>
        <Image resizeMode={'contain'} style={{width : '100%',height : vw(150)}} source={IMAGES.splashLogo} />
      </Screen>
    </View>
  );
};
interface stylesProps {
  mainContainer: ViewStyle;
  contentContainerStyle: ViewStyle;
}

const styles = StyleSheet.create<stylesProps>({
  mainContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
