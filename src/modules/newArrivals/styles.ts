import {StyleSheet} from 'react-native';
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../styles/Fonts';
import colors from '../../utils/colors';
import { normalize, screenWidth, vh, vw } from '../../styles';

export default StyleSheet.create({
  mainContainer: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header: {
      paddingVertical: vh(14),
      paddingHorizontal:vh(16),
      borderBottomWidth: 1,
      borderBottomColor: '#00000012',
      shadowColor: '#00000012',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.9,
      shadowRadius: 14,
      elevation: 3,
    },
    backButton: {
      backgroundColor: '#F4F7FF',
    },
    searchContainer: {
      marginHorizontal: vw(8),
      marginBottom: vh(4),
    },
    customFlatListStyle: {
      paddingHorizontal: vw(8),
      paddingBottom: vh(10),
    },
    textHeaderItemContainer: {
      width: vw(182),
      height: vw(215),
      backgroundColor: colors.white,
      borderRadius: 12,
      marginHorizontal: vw(8),
      marginVertical: vh(12),
    },
    textHeaderImageContainer: {
      width: vw(182),
      height: vw(136),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      backgroundColor: '#F3F6FA',
    },
    textHeaderItemImage: {
      width: vw(100),
      height: vw(100),
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    textHeaderItemNumber: {
      fontSize: normalize(16),
      fontFamily: ROBOTO_BOLD,
      fontWeight: '700',
      marginTop: vh(10),
    },
    textHeaderItemTitle: {
      fontSize: normalize(14),
      fontFamily: ROBOTO_REGULAR,
      fontWeight: '400',
      marginTop: vh(8),
      color: '#7C8585',
    },
    textHeaderItemPrice: {
      fontSize: normalize(14),
      fontFamily: ROBOTO_BOLD,
      fontWeight: '600',
      marginTop: vh(8),
      color: colors.black,
    },
    footer: {
      width: '100%',
      backgroundColor: colors.white,
      shadowColor: '#DCE3ED99',
      shadowOffset: {width: 0, height: -4},
      shadowOpacity: 0.9,
      shadowRadius: 40,
      elevation: 10,
      borderTopWidth: 1,
      borderTopColor: colors.borderSecond,
    },
    absolute: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1, // Ensure it appears above other components
     
    },
    footerContentContainer: {
      backgroundColor: colors.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: vh(14),
    },
    sortByButton: {
      flexDirection: 'row',
      width: vw(206),
      height: vw(36),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
      borderRightWidth: 0.5,
      borderRightColor: colors.borderSecond,
    },
    sortByIcon: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
    },
    sortByButtonText: {
      fontSize: normalize(18),
      fontFamily: ROBOTO_MEDIUM,
      fontWeight: '500',
      marginLeft: vw(12),
      color: colors.black,
    },
    filterButton: {
      flexDirection: 'row',
      width: vw(206),
      height: vw(36),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
      borderLeftWidth: 0.5,
      borderLeftColor: colors.borderSecond,
    },
    filterIcon: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
    },
    filterButtonText: {
      fontSize: normalize(16),
      fontFamily: ROBOTO_MEDIUM,
      fontWeight: '500',
      marginLeft: vw(12),
      color: colors.black,
    },
    typeFlat: {
      gap: vh(13),
    },
    textRange:{
      fontSize:vh(14),
      fontWeight:'400'
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: '#999',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    priceDisplay: {
      flexDirection: 'row',
      justifyContent: 'flex-end', 
      marginVertical: vh(10), 
    },
    priceText: {
      fontSize: vh(16),
      fontWeight: '600',
    },
    checked: {
      width: 12,
      height: 12,
      backgroundColor: '#E41D2D',
    },
    title: {fontSize: vh(20), fontWeight: 'bold'},
    clearText: {color: '#E41D2D', fontSize: vh(16)},
    sectionTitle: {fontSize: vh(16), fontWeight: '500', marginTop: vh(24)},
    slider: {width: '100%', height: vh(40)},
    priceLabels: {flexDirection: 'row', justifyContent: 'space-between'},
    categoryItem: {
      padding: vh(10),
  
      flexDirection: 'row',
    },
    sliderMarker: {
      backgroundColor: colors.primary,
      width: vh(24),
      height: vh(24),
      borderRadius: vh(12),
    },
    sliderSelected: {
      backgroundColor: '#E41D2D',
    },
    sliderTrack: {
      height: 4,
      backgroundColor: '#FFE6E8',
    },
    selectedCategoryText: {color: '#E41D2D', fontWeight: 'bold'},
    categoryText: {color: 'black'},
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: vh(20),
      backgroundColor: colors.white,
      paddingHorizontal: vh(16),
      height: vh(92),
      alignItems: 'center',
    },
    cancelButton: {
      padding: vh(10),
      borderWidth: 2,
      borderRadius: vh(16),
      width: screenWidth / 2 - vh(22),
      height: vh(52),
      borderColor: '#D4DAEA',
      justifyContent: 'center',
      alignItems: 'center',
    },
    applyButton: {
      padding: vh(10),
      backgroundColor: colors.primary,
      width: screenWidth / 2 - vh(22),
      height: vh(52),
      borderRadius: vh(16),
      justifyContent: 'center',
      alignItems: 'center',
    },
    applyText: {color: colors.white, fontSize: vh(16), fontWeight: '800'},
    cancelText: {color: colors.black, fontSize: vh(16), fontWeight: '800'},
    typeButton: {
      padding: vh(10),
      borderWidth: 1,
      width: screenWidth / 4 + vh(15),
      marginTop: vh(16),
      borderColor: '#DCE3ED',
      borderRadius: 5,
    },
    selectedType: {
      borderColor: colors.primary,
    },
    typeText: {
      color: 'black',
    },
    selectedTypeText: {
      color: colors.primary,
    },

    overlayContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 25, // Ensure it's above the main content but below BottomSheet
    },
    
    blurView: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    closeButton: {
      position: 'absolute',
      // top: vh(-50), 
      top: vh(-30), 
      
      zIndex: 15,
      width: vh(34.29),
      height: vh(34.29),
      borderRadius: vh(17.15), 
      backgroundColor: colors.white, 
      alignItems: 'center',
      alignSelf:'center',
      justifyContent: 'center',
      
    },
    close: {
       height:vh(14.29),
      width:vh(14.29)
       
    },
})