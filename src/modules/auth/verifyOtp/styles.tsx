import {StyleSheet} from 'react-native';
import {vw, vh, screenWidth} from '../../../styles';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: vh(20),
    backgroundColor: colors.white,
    paddingHorizontal: vh(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },

  backButton: { 
    width: vw(40),
    height: vh(40),
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: vh(20),
  },
  title: {
    fontSize: vh(26),
    fontWeight: '900',
    color: '#000',
  },
  logo: {
    width: vh(131),
    height: vh(16),
    resizeMode: 'contain',

    alignSelf: 'center',
    // marginTop:vh(20)
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: vh(16),
    color: '#6B7280',
    marginVertical: vh(10),
    fontWeight: '400',
  },
  changeNumber: {
    fontSize: vh(16),
    color: colors.black,
    fontWeight: '400',
    marginTop: vh(5),
    textDecorationLine: 'underline',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh(20),
    // paddingHorizontal:vw(16)
  },
  otpInput: {
    width: vw(48),
    height: vh(56),
    borderWidth: 1,
    borderColor: '#D1D5DB',
    textAlign: 'center',
    fontSize: vh(18),
    fontWeight: 'bold',
    borderRadius: vh(16),
    marginHorizontal: vw(9),
    color: '#000',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    fontSize: vh(14),
    textAlign: 'center',
    marginTop: vh(10),
  },
  resendText: {
    fontSize: vh(14),
    color: colors.primary,
    textAlign: 'center',
    marginTop: vh(20),
    fontWeight: 'bold',
  },
  resendEnabled: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  timer: {
    fontSize: vh(16),
    fontWeight: '600',
    textAlign: 'center',

    color: colors.primary,
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(20),
  },
  timerImg: {width: vh(13), height: vh(13), marginRight: vh(4)},
  resendCode: {color: colors.black, fontSize: vh(16), fontWeight: '600'},
  verifyButton: {
    width: '100%',
    height: vh(50),
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh(20),
  },
  bottomView: {
    justifyContent: 'flex-end',
    flex: .9,
  },
  button: {
    backgroundColor: '#E41D2D',
    paddingVertical: 15,
    borderRadius: vh(15),
    alignItems: 'center',
    width: screenWidth - vh(32),
  },
  disabledButton: {
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
