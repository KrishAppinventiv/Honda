import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';
import { normalize, vh, vw } from '../../../styles';
import { ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR } from '../../../styles/Fonts';


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
    borderBottomWidth: 1,
    borderBottomColor: '#00000012',
    shadowColor: '#00000012',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 14,
    elevation: 3,
  },
  backButton: {
    backgroundColor: colors.headerButton,
  },
  backIcon: {
    width: vw(24),
    height: vw(24),
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
    backgroundColor: colors.lightGrey,
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
    fontFamily: ROBOTO_MEDIUM,
    fontWeight: '600',
    marginTop: vh(8),
    color: colors.descritptionText,
  },
});

export default styles;
