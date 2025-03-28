import {StyleSheet} from 'react-native';
import { FONTS, normalize, screenWidth, vh, vw } from '../../styles';
import colors from '../../utils/colors';
import { ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../styles/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors?.white,
  },
  header: {
   // paddingVertical: vh(15),
  },
  headerImg: {
    marginRight: vw(30),
  },
  slide: {
    width: screenWidth,
    paddingHorizontal: vw(26),
    paddingBottom: vh(24),
    alignItems: 'center',
    backgroundColor: colors.backgroundCarousel,
  },
  image: {
    width: vw(360),
    height: vw(360),
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingTop: vh(12),
    paddingBottom: vh(14),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bottomContainer: {
    width: screenWidth,
    backgroundColor: colors.white,
    paddingHorizontal: vw(16),
  },
  productName: {
    fontSize: 22,
    fontWeight: '800',
  },
  logoImg: {
    width: vw(90.1),
    height: vw(10.93),
    resizeMode: 'contain',
  },
  productDetailContainer: {
    marginBottom: vh(8),
  },
  productDetail: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.secondryBlack,
  },
  readMore: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
  },
  productDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.lightText,
    lineHeight: 22.4,
  },
  allExpandableContainer: {
    paddingBottom: vh(20),
  },
  singleExpandableContainer: {
    marginTop: vh(24),
    paddingHorizontal: vw(16),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  dealerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh(16),
    marginTop: vh(24),
    paddingHorizontal: vw(16),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  listContainer: {
    marginBottom: vh(8),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vh(8),
    marginHorizontal:vh(16)
  },
  itemFeature: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: colors.black,
  },
  cardContainer:{
    borderColor: colors.borderLight,
    borderWidth:1,
    marginTop:vh(24)
  },
  title:{
   fontSize:normalize(16),
   fontWeight:'500'
  },
  itemValue: {
    fontSize: normalize(14),
   
    fontWeight: '500',
    color: colors.black,
  },
  dealer: {
    fontSize: normalize(16),fontFamily:ROBOTO_MEDIUM,letterSpacing:0.1
  },
  locateDealer: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  alertBanner: {
    backgroundColor: colors.backgroundCarousel,
    borderRadius: 8,
    marginTop: vh(24),
    padding: vw(12),
    paddingLeft: vw(13),
  },
  alertHeader: {
    flexDirection: 'row',
  },
  infoImg: {
    width: vw(16),
    height: vw(16),
    resizeMode: 'contain',
  },
  alertTitle: {
    fontSize: normalize(14),
    color: colors.black,
    marginLeft: vw(8),
    fontFamily:FONTS.ROBOTO_MEDIUM
  },
  alertDescriptionContainer: {
    marginTop: vh(9),
  },
  alertDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.lightText,
  },
  footer: {
    width: '100%',
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
    marginHorizontal: vw(16),
    paddingVertical: vh(15),
  },
  footerTextContainer: {
    backgroundColor: colors.white,
    marginVertical: vh(5),
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
    fontSize: 16,
    fontWeight: '800',
    color: colors.white,
  },
  leftButtonStyle:{
    backgroundColor:colors.backButtonBackground,
  }
});
export default styles;
