import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const {width: screenWidth} = Dimensions.get('window');
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Images } from '../../../assets';
import colors from '../../../utils/colors';
import { ScreenNames } from '../../../utils/screenNames';
import { RootStackParamList } from '../../../utils/types';
import Button from '../../../components/Button';
import { FONTS } from '../../../styles';
// import config from '../../../../config';

import CustomFlatList from '../../../components/CustomFlatList';
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';


type TutorialScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Tutorial
>;

interface BannerItem {
  img: any;
  text: string;
  head: string;
}

const Tutorial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = useRef<FlatList<BannerItem>>(null);
  const navigation = useNavigation<TutorialScreenNavigationProp>();

  const scrollX = useRef(new Animated.Value(0)).current;

  const banners: BannerItem[] = [
    {
      img: Images.tutorial1,
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      head: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      img: Images.tutorial2,
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      head: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      img: Images.tutorial3,
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      head: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
  ];

  const renderItem = ({item}: {item: BannerItem}) => (
    <View style={styles.slideContainer}>
      
      <View style={styles.contain}>
        <Image
          source={item.img}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headView}>
        <Text style={styles.head}>{item.head}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </View>
    </View>
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveSlide(index);
  };

  return (
    <View style={styles.container}>
       <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        
      />
      <CustomFlatList
        
        ref={flatListRef}
        data={banners}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
            listener: handleScroll,
          },
        )}
      />

      <View style={styles.pagination}>
        {banners.map((_, index) => {
          const widthAnimation = scrollX.interpolate({
            inputRange: [
              screenWidth * (index - 1),
              screenWidth * index,
              screenWidth * (index + 1),
            ],
            outputRange: [8, 22, 8],
            extrapolate: 'clamp',
          });

          const colorAnimation = scrollX.interpolate({
            inputRange: [
              screenWidth * (index - 1),
              screenWidth * index,
              screenWidth * (index + 1),
            ],
            outputRange: ['#ccc', colors.primary, '#ccc'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  width: widthAnimation,
                  backgroundColor: colorAnimation,
                },
              ]}
            />
          );
        })}
      </View>
      <View
        style={[
          styles.footer,
          activeSlide === banners.length - 1 && {justifyContent: 'center'},
        ]}>
        {activeSlide !== banners.length - 1 && (
          <Text
            style={styles.skipText}
            onPress={() => navigation.navigate(ScreenNames.Role)}>
            SKIP
          </Text>
        )}
        {/* <Text>{config.APP_ENV}</Text> */}
        <Button
          onPress={() => {
            if (activeSlide === banners.length - 1) {
              navigation.navigate(ScreenNames.Role);
            } else {
              const nextSlide = activeSlide + 1;
              setActiveSlide(nextSlide);
              flatListRef.current?.scrollToIndex({
                index: nextSlide,
                animated: true,
              });
            }
          }}
          text={activeSlide === banners.length - 1 ? 'GET STARTED' : 'NEXT'}
          style={
            activeSlide === banners.length - 1
              ? styles.startedButton
              : styles.nextButton
          }
          textStyle={activeSlide === banners.length - 1
            ? styles.startedButtonText
            : styles.nextButtonText}
          fullWidth
        />
      </View>
    </View>
  );
};

export default Tutorial;
