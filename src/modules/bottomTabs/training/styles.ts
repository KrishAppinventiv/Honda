import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';
import { ROBOTO_MEDIUM } from '../../../styles/Fonts';
import { normalize, vh, vw } from '../../../styles/dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    paddingVertical: vh(12),
    paddingHorizontal:vh(16)
  },
  profileIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  notificationButton: {
    backgroundColor: colors.headerButton,
  },
  choiceContainer: {
    marginTop: vh(16),
    marginBottom: vh(4),
    paddingHorizontal: vw(11),
    flexDirection: 'row',
  },
  Button: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
    marginHorizontal: vw(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.backButtonBackground,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  selectedButton: {
    paddingVertical: vh(10),
    paddingHorizontal: vw(16),
    marginHorizontal: vw(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: 'rgba(228, 29, 45, 0.1)',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: colors.descritptionText,
  },
  selectedButtonText: {
    fontSize: normalize(14),
    fontFamily: ROBOTO_MEDIUM,
    color: colors.primary,
  },
  customFlatListStyle: {
    paddingHorizontal: vw(8),
    alignItems: 'center',
  },
  textHeaderItemContainer: {
    width: vw(184),
    height: vw(220),
    backgroundColor: colors.white,
    borderRadius: 15.77,
    borderWidth: vw(2.63),
    borderColor: colors.backButtonBackground,
    marginHorizontal: vw(8),
    alignItems: 'center',
    marginVertical: vh(12),
  },
  textHeaderImageContainer: {
    width: vw(184),
    height: vw(136),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.backButtonBackground,
  },
  textHeaderItemImage: {
    width: vw(184),
    height: vw(136),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textHeaderItemTitle: {
    width: vw(155.09),
    textAlign: 'center',
    fontSize: normalize(16),
    fontFamily: ROBOTO_MEDIUM,
    marginTop: vh(18.46),
    color: colors.descritptionText,
  },
});
export default styles;
