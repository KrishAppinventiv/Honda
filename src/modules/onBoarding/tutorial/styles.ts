import {StyleSheet,Dimensions} from 'react-native';
import { FONTS, FontsStyles, vh, vw } from '../../../styles';
import colors from '../../../utils/colors';
import { ROBOTO_BOLD } from '../../../styles/Fonts';
const {width: screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: vh(40),
  },
  slideContainer: {
    width: screenWidth,
    alignItems: 'center',
    
  },
  img:{
   marginTop:vh(77),
   height:vh(16),
   width:vh(131),
   resizeMode:'contain'  
  },
  header: {
       
    flexDirection: 'row',
    alignItems: 'center',
  },
  contain:{justifyContent: 'center', alignItems: 'center', flex: 0.9},

  headView:{marginHorizontal: vh(30)},
  hondaText: {
    fontSize: vw(22),
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginBottom: vh(10),
  },
  productImage: {
    width: vw(340),
    height: vw(340),
  },
  head: {
    fontSize: vw(18),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: vh(15),
  },
  description: {
    fontSize: vw(14),
    textAlign: 'center',
    color: 'gray',
    marginHorizontal: vw(20),
    marginTop: vh(5),
    width:vw(290)
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: vh(56),
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth - vw(48),
    alignSelf: 'center',
    marginBottom: vh(70),
  },
  skipText: {
    fontSize: vw(16),
    color: colors?.red,
    fontFamily:ROBOTO_BOLD
  },
  nextButton: {
    width: vw(174),
    height: vh(52),
    backgroundColor: colors?.primary,
    borderRadius:vh(16)
  },
  startedButton:{
    backgroundColor: colors?.primary,
    width:'100%',
  },
  startedButtonText:{
    fontFamily:FONTS?.ROBOTO_BOLD,
  },
  nextButtonText: {
    fontSize:vw(16),
    fontFamily:FONTS?.ROBOTO_BOLD
  },

});