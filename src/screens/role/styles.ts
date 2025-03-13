import {Dimensions, StyleSheet} from 'react-native';
import { vh } from '../../utils/dimension';
import { colors } from '../../theme';
const {width: screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:vh(29),
        paddingHorizontal:vh(20)
      },
      logo: {
        width: vh(130),
        height: vh(16),
        resizeMode: 'contain',
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: vh(25),
      },
      title: {
        fontSize: vh(26),
        fontWeight: '900',
        color: '#000',
      },
      subtitle: {
        fontSize: vh(16),
        color: colors.grey,
        fontWeight: '400',
    
        marginTop: vh(8),
      },
      grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: vh(24),
        marginTop: vh(20),
      },
      roleCard: {
        width: screenWidth/3+ vh(28),
        height: vh(150),
        backgroundColor: '#F3F6FA80',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vh(16),
      },
      iconBackground: {
        width: vh(55), 
        height: vh(55),
        borderRadius: vh(28),
        backgroundColor: 'rgba(255, 0, 0, 0.1)', 
        justifyContent: 'center',
        alignItems: 'center',
      },
      roleIcon: {
        width: vh(28),
        height: vh(28),
        marginBottom: 8,
        tintColor: 'red',
      },
      roleText: {
        fontSize: vh(16),
        fontWeight: '500',
        color: '#000',
        marginTop:vh(25)
      },
})