import {StyleSheet} from 'react-native';

import colors from '../../../utils/colors';
import { vh, vw, normalize, screenWidth } from '../../../styles';
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../../styles/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingVertical: vh(12),
    paddingHorizontal: vw(16),
  },
  profileIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  notificationButton: {
    backgroundColor: colors.headerButton,
  },
  searchContainer:{
    marginBottom:vh(24),
  },
  HIPlusHeaderStyle: {
    alignItems: 'flex-end',
  },
  corouselList:{
    marginTop:vh(20),
  },
  corouselItemContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    marginHorizontal: vw(10),
    paddingVertical: vh(15),
    borderRadius: 16,
  },
  itemTextContainer: {
    paddingHorizontal: vw(16),
  },
  itemHeaderText: {
    fontSize: normalize(18),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '700',
    color: colors.white,
  },
  itemDetailsText: {
    width: vw(167),
    fontFamily:ROBOTO_REGULAR,
    fontWeight:'500',
    fontSize: normalize(12),
    color: colors.white,
  },
  image: {
    width: vw(100),
    height: vw(100),
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(16),
    marginBottom: vh(20),
  },
  slide: {
    width: screenWidth,
  },
  customFlatListStyle: {
    marginTop:vh(12),
    marginBottom:vh(24),
  },
  HIPlusImgStyle: {
    width: vw(44),
    height: vw(35),
    resizeMode: 'contain',
  },
  itemContainer: {
    width: vw(140),
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
  hiValuePlusImg: {
    width: vh(44),
    height: vh(35),
    resizeMode: 'contain',
  },
  banner: {
    width:'100%',
    marginBottom: vh(30),
    paddingHorizontal: vw(16),
  },
  bannerHeader: {
  },
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: '#2C2C2C',
    paddingVertical: vh(11),
    paddingHorizontal: vw(16),
    borderRadius: 16,
  },
  bannerImg: {
    width: vw(120),
    height: vw(120),
    resizeMode: 'contain',
  },
  bannerTextContainer: {
    marginLeft: vw(8),
  },
  bannerTitle: {
    fontSize: normalize(18),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '700',
    color: colors.white,
  },
  bannerSubTitle: {
    width: vw(210),
    fontSize: normalize(12),
    fontFamily:ROBOTO_REGULAR,
    lineHeight:20,
    fontWeight: '400',
    color: colors.white,
  },
  checkNowButton: {
    width: vw(96),
    height: vw(28),
    marginTop:vh(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  checkNowText: {
    fontSize:normalize(8.6),
    fontFamily:ROBOTO_BOLD,
  },
  textHeaderItemContainer: {
    width: vw(140),
    height: vw(183),
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: vw(6),
    marginBottom: vh(20),
  },
  textHeaderImageContainer: {
    width: vw(140),
    height: vw(104),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.backButtonBackground,
  },
  textHeaderItemImage: {
    width: vw(100),
    height: vw(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textHeaderItemNumber: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '700',
    marginTop: vh(10),
  },
  textHeaderItemTitle: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    marginTop: vh(8),
    color: colors.descritptionText,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily:ROBOTO_BOLD,
    fontWeight: '600',
    marginTop: vh(8),
    color: colors.secondryBlack,
  },
});

export default styles;
