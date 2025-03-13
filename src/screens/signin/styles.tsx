import {StyleSheet} from 'react-native';
import { vh } from '../../utils/dimension';
import { colors } from '../../theme';

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
        paddingTop: 40,
        backgroundColor: '#fff',
        paddingHorizontal: vh(25),
        
      },
      logo: {
        width: vh(131),
        height: vh(16),
        resizeMode: 'contain',
    
        alignSelf: 'center',
        
      },
      backButton: {
        width: vh(48),
        height: vh(48),
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
        justifyContent: 'space-between',
        marginTop: vh(20),
      },
      logoContainer: {
        flex: 1,
        alignItems: 'center',
      },
      inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 8,
        paddingVertical: vh(5),
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 10,
      },
      countryCode: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 8,
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
        fontSize: 16,
        fontWeight: 'bold',
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
})