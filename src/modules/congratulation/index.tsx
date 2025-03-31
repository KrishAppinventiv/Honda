import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/statusBar';
import styles from './styles';
import {ScreenNames} from '../../utils/screenNames';
import { Images } from '../../assets';
import { RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CongratulationScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const CongratulationScreen = ({navigation}: CongratulationScreenProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.BottomTab}],
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <Image source={Images.checkmark} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{'Congratulations!'}</Text>
        <Text style={styles.subTitle}>
          {'You have been signed in successfully'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CongratulationScreen;

