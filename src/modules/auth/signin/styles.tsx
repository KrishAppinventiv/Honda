import {Platform, StyleSheet} from 'react-native';
import {FONTS, normalize, vh, vw} from '../../../styles';
import colors from '../../../utils/colors';

export default StyleSheet.create({
  bottomView: {
    justifyContent: 'flex-end',
    flex: 0.9,
  },
  margin: {
    marginTop: vh(30),
  },
  container: {
    flex: 1,
    paddingTop: vh(40),
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: vh(16),
  },
  HeadingContainer: {
    marginTop: vh(20),
  },
  logo: {
    width: vh(131),
    height: vh(16),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  backButton: {
    width: vh(40),
    height: vh(40),
    resizeMode: 'contain',
  },
  title: {
    fontSize: vh(26),
    fontWeight: '900',
  },
  subtitle: {
    fontSize: vh(16),
    color: '#666',
    marginTop: vh(10),
    marginBottom: vh(20),
    fontWeight: '400',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: vw(1),
    borderColor: 'red',
    borderRadius: vw(16),
    paddingVertical: vh(5),
    paddingHorizontal: vw(10),
    alignItems: 'center',
    marginTop: vh(5),
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  partition:{
   color:colors.primary,
   marginRight:vh(5),
   fontSize:vh(20)
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E41D2D',
    paddingVertical: 15,
    borderRadius: vh(15),
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: normalize(16),
    fontFamily: FONTS?.ROBOTO_BOLD,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
  },
  link: {
    color: colors.black,
    fontWeight: 'bold',
  },
  backIcon: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
});
