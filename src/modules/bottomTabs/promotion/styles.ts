import {StyleSheet} from 'react-native';
import { normalize, screenWidth, vh, vw } from '../../../styles';
import colors from '../../../utils/colors';
import { ROBOTO_MEDIUM } from '../../../styles/Fonts';

export default StyleSheet.create({
  hiImage: {
    width: vh(40),
    height: vh(40),
  },
   scrollView: {
      //flex: 1,
      backgroundColor: colors.white,
    },
  imageStyle: {
    width: vh(80),
    height: vh(50),
  },
  
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  arrivalContainer:{
    paddingHorizontal: vh(12),
    marginBottom: vh(36),
    gap: vh(10),
  },
  listContainer: {
    paddingHorizontal: vh(12),
    marginBottom: vh(24),
    gap: vh(10),
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginVertical: vh(10),
    marginTop: vh(70),
    paddingHorizontal: vh(12),
    position: 'relative', 
    marginBottom:vh(20)
  },
  logo: {
    width: vw(100),
    height: vh(30),
    resizeMode: 'contain',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -vw(50) }], 
  },
  notificationWrapper: {
    position: 'absolute',
    right: vh(15), 
  },
  notifyView: {
    height: vh(30),
    width: vh(30),
    borderRadius: vh(15),
    backgroundColor: '#F4F7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    width: vw(18),
    height: vh(18),
    resizeMode: 'contain',
  },
  himage:{
    width: vw(30),
    height: vh(30),
    marginStart:vh(10),
    
    resizeMode: 'contain',
  },
  header: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
  },
  headerImg: {
    marginLeft: vw(55),
  },
  leftButtonStyle:{
    backgroundColor:colors.backButtonBackground,
  },
  leftIconStyle:{
    width:vw(40),
    height:vw(40),
    resizeMode:'contain'
  },
  rightButtonStyle:{
    backgroundColor:colors.backButtonBackground,
  },
   itemContainer: {
    //   width: vw(140),
      width:screenWidth/3 + vh(3),
      height: vw(168),
      backgroundColor: colors.white,
      alignItems: 'center',
      borderRadius: 12,
      marginHorizontal: vw(8),
      borderWidth: 2,
      borderColor: colors.backButtonBackground,
    },
    imageContainer: {
      width: vw(140),
      height: vw(104),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      backgroundColor: colors.backButtonBackground,
    },
    itemImage: {
      width: vw(100),
      height: vw(100),
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    itemTitle: {
      fontSize: normalize(14),
      fontFamily:ROBOTO_MEDIUM,
      fontWeight: '500',
      width: vw(118),
      height: vw(40),
      marginTop: vh(20),
      textAlign: 'center',
      color: colors.black,
    },
    customFlatListStyle: {
        marginTop:vh(12),
        marginBottom:vh(24),
      },
});

