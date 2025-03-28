import {
    View,
    Text,
    FlatList,
    Platform,
    UIManager,
    Dimensions,
    StyleSheet,
    LayoutAnimation,
    TouchableOpacity,
  } from 'react-native';
  import React, { useRef, useState} from 'react';
  import { useAppDispatch, useAppSelector, useColors } from '../../../hooks';
  import { FONTS, IMAGES, screenWidth } from '../../../styles';
import Button from '../../../components/Button';
  
  const Data = [
    {
      id: 1,
      title: 'Manage Your Entire Production',
      image: IMAGES.onboarding1,
      subTitle:
        'Manage schedules, sets, locations, budgets, crew, vendors, orders, and documents—all from one app.',
    },
    {
      id: 2,
      title: 'Easily Find and Hire Vendors',
      image: IMAGES.onboarding2,
      subTitle:
        'Request and order rentals, services, and products from trusted vendors in just a few taps.',
    },
    {
      id: 3,
      title: 'Stay on Budget in Real Time',
      image: IMAGES.onboarding3,
      subTitle:
        'Track real-time costs and budget changes with live updates from all departments.',
    },
  ];
  
  const filledData = new Array(999).fill(1);
  
  const DeviceHeight = Dimensions.get('window').height;
  /**
   * @interface Props
   * @description Defined props of Onboarding Screen
   */
  interface Props {
    route: any;
    navigation: any;
  }
  
  /**
   * @param props
   * @function OnboardingScreen
   * @returns Onboarding Component
   * @description Defined Onboarding Screen
   */
  const Onboarding = (props: Props) => {
    /**
     * @description Initialize hooks
     */
    const dispatch = useAppDispatch();
    const Color = useColors();
  
    /**
     * @description Defined internal states for Onboarding Screens
     */
    const swiperRef = useRef<FlatList | null>(null);
    const currentIndex = useRef(0);
    const [state, setState] = useState({
      activeIndex: 0,
    });
  
    const {activeIndex} = state;
    const {firstLogin} = useAppSelector(state => state.utilsReducer);
  
    const _linearAnimation = () => {
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };
  
    const _onNextPress = () => {
     
    };
  
    const _onPressSkip = () => {
     
    };
  
    /**
     * @return Returning JSX of Onboarding Screen
     */
    return (
      <View style={styles.mainContainer}>
          {/* <SwiperFlatList
            autoplay
            bounces={false}
            ref={swiperRef}
            index={0}
            data={filledData}
            autoplayLoop
            showPagination
            autoplayDelay={2}
            paginationStyle={{
              marginBottom: 0.2 * screenHeight,
              marginHorizontal: 0,
            }}
            onChangeIndex={item => {
              currentIndex.current = item.index % 3;
            }}
            paginationStyleItem={{
              width: normalize(8),
              height: normalize(8),
              borderRadius: normalize(4),
              marginHorizontal: normalize(3),
            }}
            paginationStyleItemActive={{
              width: normalize(30),
              height: normalize(8),
            }}
            PaginationComponent={props => {
              return (
                <View
                  style={[
                    styles.dotViewStyle,
                    {
                      alignSelf: 'center',
                      position: 'absolute',
                      bottom: 0.2 * screenHeight,
                    },
                  ]}>
                  {Data?.map((item, mapIndex) => {
                    return (
                      <View
                        key={`activeIndex${item.id}`}
                        style={[
                          styles.activeRoundView,
                          props?.paginationIndex % 3 === mapIndex
                            ? {
                                backgroundColor: Color.WHITE,
                                width: vw(25),
                                borderRadius: vw(20),
                              }
                            : {
                                backgroundColor: Color.GRAY_DARK,
                                width: vw(8),
                                borderRadius: vw(4),
                              },
                        ]}
                      />
                    );
                  })}
                </View>
              );
            }}
            keyExtractor={(item, index) => index + ''}
            renderItem={({item, index}) => {
              const newItem = Data[index % 3];
              return (
                <View style={{flex: 1, backgroundColor: Color.BLACK}}>
                  <View style={{height: screenHeight*0.65, alignItems:'center', position:'absolute', width: screenWidth}}>
                    <Image
                      source={newItem.image}
                      resizeMode="stretch"
                      style={styles.backgroundImg} />
                    </View>
                  <View style={{flex: 1}}>
                    <View style={{flex: 0.6}} />
                  </View>
                </View>
              );
            }}
          /> */}
          <View style={styles.bottomView}>
            <View style={styles.nextButtonView}>
              <Button text={'Next'} onPress={_onNextPress} />
            </View>
            <TouchableOpacity
              onPress={_onPressSkip}
              style={styles.skipButtonView}>
              <Text style={[styles.skipButtonStyle, {color: Color.WHITE}]}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    contentContainer: {flex: 1, height: '100%', width: '100%'},
    onBoardingTwo: {},
    backgroundImg: {
      padding: 10,
      width: screenWidth,
      height: '100%',
      zIndex: 2
    },
    mainView: {},
    item: {
      width: Dimensions.get('window').width,
      paddingHorizontal: vw(24),
      // flex: 0.3,
      marginTop: vw(6)
    },
    titleStyle: {
      fontSize: normalize(20),
      lineHeight: vw(30),
      textAlign: 'center',
      fontFamily: FONTS.ROBOTO_MEDIUM,
      paddingTop: vw(30)
    },
    subTitleStyle: {
      textAlign: 'center',
      fontSize: normalize(14),
      fontWeight: '400',
      lineHeight: vw(22),
      marginTop: DeviceHeight < 700 ? vw(10) : vw(16),
      fontFamily: FONTS.ROBOTO_MEDIUM,
    },
    dotViewStyle: {
      flexDirection: 'row',
      marginTop: vw(17),
      justifyContent: 'center',
    },
    activeRoundView: {
      height: vw(8),
      width: vw(8),
      borderRadius: 4,
      marginHorizontal: vw(2),
    },
    bottomView: {
      position: 'absolute',
      bottom: 0,
      left: vw(46),
      right: vw(46),
    },
    nextButtonView: {
      marginTop: vw(41),
    },
    skipButtonView: {
      marginBottom: DeviceHeight < 700 ? vw(20) : vw(44),
      marginTop: DeviceHeight < 700 ? vw(10) : vw(16),
    },
    skipButtonStyle: {
      textAlign: 'center',
      fontSize: normalize(16),
      lineHeight: vw(24),
      fontWeight: '500',
      fontFamily: FONTS.ROBOTO_MEDIUM,
    },
  });
  
  export default Onboarding;

function vw(arg0: number): any {
  throw new Error('Function not implemented.');
}

function normalize(arg0: number): any {
  throw new Error('Function not implemented.');
}
  