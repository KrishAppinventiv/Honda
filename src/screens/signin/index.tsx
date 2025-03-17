import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
} from 'react-native';
import {Images} from '../../assets';
import {vh} from '../../utils/dimension';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../theme';
import styles from './styles';
import CustomButton from '../../components/CustomButton';

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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.backarrow} style={styles.backButton} />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image source={Images.honda} style={styles.logo} />
          </View>
        </View>

        <View style={styles.margin}>
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
          <CustomButton
            onPress={() => navigation.navigate(ScreenNames.Otp)}
            text="GET OTP"
            style={[styles.button, !isValid ? styles.disabledButton : {}]}
            disabled={!isValid}
            textStyle={{color: !isValid ? colors.grey : '#fff'}}
          />

          <Text style={styles.footerText}>
            By signing in I agree to{' '}
            <Text style={styles.link}>Privacy Policy</Text> &{' '}
            <Text style={styles.link}>Terms & Conditions</Text>
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
