import {StyleSheet} from 'react-native';
import { normalize, vh, vw } from '../../styles';

import colors from '../../utils/colors';
import { ROBOTO_MEDIUM } from '../../styles/Fonts';

const styles = StyleSheet.create({
  header: {
    paddingVertical: vh(12),
  
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  backIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  headerImg: {
    width: vw(131.86),
    height: vw(16),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textHeading: {
    fontSize: normalize(18),
    fontFamily:ROBOTO_MEDIUM,
    fontWeight: '500',
    color: colors.black,
    marginTop: vh(8),
  },
  rightButton: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  rightIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
});
export default styles;