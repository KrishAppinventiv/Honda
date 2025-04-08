import {StyleSheet} from 'react-native';
import { screenWidth, vh, vw } from '../../../styles/dimensions';
import colors from '../../../utils/colors';


export default StyleSheet.create({
  hiImage: {
    width: vh(40),
    height: vh(40),
    paddingLeft:vw(5)
  },
  imageStyle: {
     width: vw(99),
     height: vw(12),
     paddingLeft:vw(6),
     marginTop:vh(0)
  },
  
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingLeft:vw(16),
  },
  searchInput: {
    flex: 1,
    fontSize: vw(13),
  },
  arrivalContainer:{
    paddingHorizontal: vh(12),
    marginBottom: vh(36),
    gap: vh(10),
  },
  listContainer: {
    marginBottom: vh(24),
    gap: vw(16),
    marginTop:vh(12),
    paddingHorizontal: vh(16),
    paddingBottom: vh(0),
  },
  listContainerHiPlus: {
    gap: vw(16),
    paddingHorizontal: vh(16),
    paddingBottom: vh(12),
  },
  searchContainer: {
   
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
    width: vw(63),
    height: vh(30),
    marginStart:vh(10),
    resizeMode: 'contain',
  },
  header: {
    paddingHorizontal:vh(16)
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
  extraCardStyle:{
     width:vw(116),
        backgroundColor: colors.white,
        borderRadius: vh(8),
        borderWidth: vw(2),
        borderColor: colors.backButtonBackground,
        height:vw(156)
  },
  newArrivalText:{
    paddingLeft:vw(10)
  }
});
