import {StyleSheet} from 'react-native';
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../styles/Fonts';
import colors from '../../utils/colors';
import { FONTS, normalize, screenHeight, screenWidth, vh, vw } from '../../styles';

export default StyleSheet.create({
    header: {
        paddingHorizontal:vh(16),
      },
     greyContain:{
      marginTop:vh(20),
      marginHorizontal:vh(16),
      paddingVertical:vh(16),
      backgroundColor:colors.backButtonBackground,
      alignItems:'center',
      justifyContent:'center'
     },
     modelImg:{
      width:vh(85),
      height:vh(69)
     },
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      backButton: {
        backgroundColor: '#F4F7FF',
      },
      right:{
        width:vh(63),
        height:vh(18)
      },
      firstLine:{
     fontSize:normalize(16),
     fontWeight:'500',
    marginTop:vh(4)
      },
      secondLine:{
        fontSize:normalize(12),
        fontWeight:'400',
        marginTop:vh(4)
      },
      rightText:{
        fontSize:normalize(13),
        fontWeight:'400',
        color:colors.primary
      },
      footer: {
        backgroundColor: colors.white,
        shadowColor: 'rgba(220, 227, 237, 0.6)',
        shadowOffset: {width: 0, height: -4},
        shadowOpacity: 0.9,
        shadowRadius: 40,
        elevation: 10,
      },
      footerContentContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:vh(16),
        paddingBottom: vh(20),
        paddingTop:vh(16)
      },
      footerTextContainer: {
        backgroundColor: colors.white,
      
      },
      version:{
       fontSize:normalize(18),
       fontWeight:'700'
      },
      detail:{
       color:colors.primary,
       fontSize:normalize(14),
       fontWeight:'600'
      },
      generatorImg:{
      width:vh(46),
      height:vh(46),
      marginStart:vh(12)
      },
      priceText: {
        fontSize: normalize(20),
        fontFamily:FONTS.ROBOTO_MEDIUM,
        color: colors.secondryBlack,
      },
      priceDetailText: {
        fontSize: normalize(12),
        fontWeight: '400',
        color: colors.lightText,
      },
      buyNowButton: {
        width: vw(174),
        height: vw(52),
        borderRadius: vw(16),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
      },
      buyNowButtonText: {
        fontSize: normalize(16),
        fontWeight: '800',
        color: colors.white,
      },
      appliancesContainer: {
        padding: 16,
      },
      applianceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: colors.borderSecond,
      },
      applianceInfo: {
        flex: 1,
      },
      applianceName: {
        fontSize: normalize(16),
        fontWeight: '500',
      },
      applianceLoad: {
        fontSize: normalize(12),
        color: colors.lightGreyBlue,
        fontWeight: '400',
        marginTop:vh(11)
      },
      counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:colors.backButtonBackground,
        width:vh(110),
        height:vh(40),
        borderRadius:vh(8),
        justifyContent:'center'
      },
      counterminusText: {
        // fontSize: 18,
        // fontWeight: 'bold',
        fontSize:normalize(24)
      },
      counterplusText: {
       
        fontSize:normalize(24),
        color:colors.primary
      },
      counterValue: {
        fontSize: normalize(16),
        fontWeight: '500',
        marginHorizontal:vh(20)
      },
})