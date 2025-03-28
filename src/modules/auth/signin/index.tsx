import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../utils/types';
import { ScreenNames } from '../../../utils/screenNames';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../../assets';
import colors from '../../../utils/colors';
import GlobalHeader from '../../../components/GlobalHeader';
import Button from '../../../components/Button';
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';

type SignNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Signin
>;
const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigation = useNavigation<SignNavigationProp>();

  const handlePhoneChange = (text: string) => {
    const regex = /^[6-9]\d{9}$/;
    setPhoneNumber(text);
    setIsValid(regex.test(text));
  };

  const onPressPrivacyPolicey = () =>{
    navigation.navigate(ScreenNames.WebViewScreen,{url:'https://www.hondacarindia.com/privacy-policy'})
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{flex: 1}}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        leftIconStyle={styles.backIcon}
        onleftPress={navigation.goBack}
      />
        <View style={styles.HeadingContainer}>
          <Text style={styles.title}>Dealer Sign In</Text>
          <Text style={styles.subtitle}>Please enter your phone number</Text>
        </View>
        <View
          style={[
            styles.inputContainer,
            !isValid && phoneNumber.length > 0 && styles.errorBorder,
          ]}>
          <Text style={styles.countryCode}>+ 91</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Phone Number"
            placeholderTextColor={'#999'}
            value={phoneNumber}
            onChangeText={handlePhoneChange}
          />
        </View>

        {!isValid && phoneNumber.length > 0 && (
          <Text style={styles.errorText}>Enter a valid 10-digit number</Text>
        )}

        <View style={styles.bottomView}>
          <Button
           onPress={() => navigation.navigate(ScreenNames.Otp)}
           disabled={!isValid}
           style={[styles.button, !isValid && styles.disabledButton]}
           text={'GET OTP'}
           textStyle={[styles.buttonText,
                   {color: !isValid ? colors.grey : '#fff'},
              ]}
          />

          <Text style={styles.footerText}>
            By signing in I agree to{' '}
            <Text onPress={onPressPrivacyPolicey} style={styles.link}>Privacy Policy</Text> &{' '}
            <Text style={styles.link}>Terms & Conditions</Text>
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
