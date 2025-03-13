// Library Imports
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Animated, Image, ImageBackground} from 'react-native';

// Asset Imports
import {Images} from '../../assets';

// Utility Imports
import {ScreenNames} from '../../utils/screenNames';
import styles from './styles';

// Style Imports

const SplashScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation: any = useNavigation();

  const viewAnimate = () =>
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      const hasSeenTutorial = await AsyncStorage.getItem('hasSeenTutorial');
      setTimeout(() => {
        // if (isLoggedIn === 'true') {
        //   navigation.replace(ScreenNames.BottomTab);
        // } else {
        //   if(!hasSeenTutorial){
        //     navigation.replace(ScreenNames.Tutorial);
        //   }
        //   navigation.replace(ScreenNames.Signin);
        // }
        navigation.replace(ScreenNames.Tutorial);
      }, 2000);
    };
    viewAnimate();
    checkLoginStatus();
  }, []);
  return (
    <Animated.View
      style={[styles.containers, {opacity: fadeAnim}]}
      testID="splash">
      <Image source={Images.honda} style={styles.container}></Image>
    </Animated.View>
  );
};

export default SplashScreen;
