import {StyleSheet} from 'react-native';
import { vh, vw } from '../../utils/dimension';

export default StyleSheet.create({
  hiImage: {
    width: vh(40),
    height: vh(40),
  },
  imageStyle: {
    width: vh(80),
    height: vh(50),
  },
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: vw(8),
    paddingHorizontal: vw(12),
    height:vh(52),
    borderWidth:1,
    borderColor:'#D4DAEA',
    marginVertical: vh(10),
    marginHorizontal:vh(10),
    
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
  profile:{
     height:vh(40),
     width:vh(40),
     borderRadius:vh(56.67)
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
  }
});
