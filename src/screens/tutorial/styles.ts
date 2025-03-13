import {Keyboard, StyleSheet,Dimensions} from 'react-native';
import {colors, dimension} from '../../theme';
import { vh, vw } from '../../utils/dimension';
const {width: screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    width: vw(250),
    height: vh(250),
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
    width: screenWidth - vw(40),
    alignSelf: 'center',
    marginBottom: vh(70),
  },
  skipText: {
    fontSize: vw(14),
    color: 'red',
    fontWeight: 'bold',
  },
  nextButton: {
    width: vw(121),
    height: vh(52),
    backgroundColor: '#E41D2D',
  },
  startedButton:{
    backgroundColor: '#E41D2D',
    
  }

});