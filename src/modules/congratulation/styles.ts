import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { normalize, vh, vw } from '../../styles';
import { ROBOTO_BLACK, ROBOTO_REGULAR } from '../../styles/Fonts';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: vw(120),
    height: vw(120),
    resizeMode: 'contain',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(10),
  },
  title: {
    fontSize: normalize(28),
    fontFamily:ROBOTO_BLACK,
    fontWeight: '900',
  },
  subTitle: {
    fontSize: normalize(16),
    fontFamily:ROBOTO_REGULAR,
    fontWeight: '400',
    color: colors.descritptionText,
    marginTop: vh(10),
  },
});
export default styles;
