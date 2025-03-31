import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { vw, vh, normalize } from '../../styles';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../styles/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: vw(8),
    paddingTop: vh(20),
  },
  header: {
     paddingVertical: vh(14),
     borderBottomWidth: vw(0.5),
     borderBottomColor: 'rgba(0, 0, 0, 0.07)',
     shadowColor: 'rgba(255, 255, 255, 1)',
     shadowOffset: {width: 0, height: 0.5},
     shadowOpacity: vw(0.4),
     elevation: 2,
     paddingHorizontal: vw(16),
  },
  backButton: {
    backgroundColor: colors.backButtonBackground,
  },
  backIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  customFlatListStyle: {
    marginBottom: vh(36),
    marginTop: vh(16),
  },
  textHeaderItemContainer: {
    width: vw(140),
    height: vw(183),
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: vw(8),
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
    fontFamily: ROBOTO_BOLD,
    fontWeight: '700',
    marginTop: vh(10),
  },
  textHeaderItemTitle: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_REGULAR,
    fontWeight: '400',
    marginTop: vh(8),
    color: colors.descritptionText,
  },
  textHeaderItemPrice: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_BOLD,
    fontWeight: '600',
    marginTop: vh(8),
    color: colors.secondryBlack,
  },
});

export default styles;
