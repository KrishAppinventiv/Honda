import {Dimensions, Platform, StyleSheet} from 'react-native';
import { screenWidth, vh, vw } from '../../../styles';
import colors from '../../../utils/colors';
export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal:vw(16),
      paddingTop: vh(40),
    },
      header: {
       
        flexDirection: 'row',
        alignItems: 'center',
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
        gap: vh(16),
        marginTop: vh(10),
      },
      roleCard: {
         width: screenWidth/3+ vh(42),
        height: vw(182),
        backgroundColor: colors.backButtonBackground,
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
       backButton: {
          right: Platform.OS === 'android' ? vw(14) : vw(0)
        },
        backIcon: {
          width: vw(40),
          height: vw(40),
          resizeMode: 'contain',
        },
        HeadingContainer:{
          paddingVertical:vh(20),
          paddingHorizontal:Platform.OS === 'ios' ? vw(16) : vw(0)
        }
})