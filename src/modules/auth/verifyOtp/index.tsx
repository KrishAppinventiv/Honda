import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../utils/types';
import {ScreenNames} from '../../../utils/screenNames';
import {Images} from '../../../assets';
import CustomModal from '../../../components/CustomModal';
import colors from '../../../utils/colors';
import GlobalHeader from '../../../components/GlobalHeader';
import CustomButton from '../../../components/CustomButton';
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';
type VerifyOtpProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Signin
>;
const VerifyOtp = () => {
  const navigation = useNavigation<VerifyOtpProp>();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [isValid, setIsValid] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const inputRefs = useRef<(TextInput | null)[]>([]); // ✅ Correctly typed ref
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(2);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(59);
  const [isTimerExpired, setIsTimerExpired] = useState<boolean>(false);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      setIsTimerExpired(true);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.replace(/[^0-9]/g, '');
    setOtp(newOtp);

    setIsValid(prev => {
      const newValidity = [...prev];
      newValidity[index] = newOtp[index] === '123456'[index];
      return newValidity;
    });

    if (text) {
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (otp.join('') === '123456') {
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);
      navigation.reset({index: 0, routes: [{name: ScreenNames.BottomTab}]});
       
       
      }, 2000);
     
     
    } else {
      setAttempts(prev => prev - 1);
      setErrorMessage(
        attempts > 1
          ? `Incorrect code. ${attempts - 1} attempts left.`
          : 'Too many attempts. Request a new code.',
      );
    }
  };

  const handleResendCode = () => {
    setTimer(59);
    setIsTimerExpired(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

 
  const isOtpValid = otp.join('') === '123456';

  return (
    
      <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        leftIconStyle={styles.backIcon}
     
        onleftPress={navigation.goBack}
      />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Verify Phone Number</Text>
          <Text style={styles.subtitle}>
            Enter the code sent to number 7838235606.
          </Text>
          <TouchableOpacity>
            <Text style={styles.changeNumber}>Change Number?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              style={[styles.otpInput, !isValid[index] && styles.errorInput]}
            />
          ))}
        </View>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        {isTimerExpired ? (
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={[styles.resendText, {color: colors.primary}]}>
              Send code again
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.timeView}>
            <Text style={styles.resendCode}>Resend Code in </Text>
            <Image source={Images.timer} style={styles.timerImg} />
            <Text style={styles.timer}>
              {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : '00:00'}
            </Text>
          </View>
        )}

        <View style={styles.bottomView}>
          <CustomButton
            buttonText="Verify"
            onPress={handleSubmit}
            isButtonDisabled={!isOtpValid}
            buttonStyle={styles.button}
            disabledButtonStyle={styles.disabledButton}
            textStyle={styles.buttonText}
            disabledButtonTextStyle={{color: '#656565'}}
          />
        </View>

        <CustomModal
          modalVisible={successModal}
          onRequestClose={() => setSuccessModal(false)}
          title="Congratulations!"
          message="You have been signed in successfully."
          fullScreen={true}
          icon={Images.checkmark}
        />
      </SafeAreaView>
   
  );
};

export default VerifyOtp;
