import {StyleSheet} from 'react-native';
import { ROBOTO_MEDIUM } from '../../styles/Fonts';
import colors from '../../utils/colors';
import { screenWidth, vh } from '../../styles';


const styles = StyleSheet.create({
    container: {zIndex:1,height:'30%'},
    content: {padding: vh(16)},
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    sectionTitle: {fontSize: vh(20), fontWeight: '500', marginBottom: vh(20)},
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
      padding: vh(10),
      backgroundColor: colors.white,
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
      top: vh(10),
      right: vh(10),
      width: vh(34),
      height: vh(34),
      borderRadius: vh(17),
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
    },
    close: {
       height:vh(14),
      width:vh(14)
       
    },
    option: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: vh(12),
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    optionText: {
      fontSize: vh(16),
      fontWeight:'400',
      color: 'black',
    },
    selectedIndicator: {
      color:'#050507',
      fontSize: vh(14),
    },
    radio:{
        height:vh(19.5),
        width:vh(19.5)
    }
})

export default styles;