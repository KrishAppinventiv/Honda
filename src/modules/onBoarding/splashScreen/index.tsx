// Library Imports
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Animated, Image, ImageBackground} from 'react-native';
// Asset Imports
import {Images} from '../../../assets';
// Utility Imports
import styles from './styles';
import {ScreenNames} from '../../../utils/screenNames';
import CustomStatusBar from '../../../components/statusBar';

// Style Imports

const Splash = () => {
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
      <CustomStatusBar />
      <Image source={Images.honda} style={styles.container}></Image>
    </Animated.View>
  );
};

export default Splash;
