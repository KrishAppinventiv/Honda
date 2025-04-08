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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../utils/types';
import {ScreenNames} from '../../../utils/screenNames';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Images} from '../../../assets';
import colors from '../../../utils/colors';
import GlobalHeader from '../../../components/GlobalHeader';
import Button from '../../../components/Button';
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';
import CustomButton from '../../../components/CustomButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SignNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Signin
>;
const SignIn = () => {
  const route = useRoute();
  const {roleName} = route.params || {roleName: 'Dealer'};
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [hasNonNumeric, setHasNonNumeric] = useState(false);
  const navigation = useNavigation<SignNavigationProp>();
  const insets = useSafeAreaInsets();

  const handlePhoneChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setPhoneNumber(numericText);
    setIsValid(/^[6-9]\d{9}$/.test(numericText));
    setHasNonNumeric(numericText.length !== text.length); // Check for non-numeric characters
  };

  const onPressPrivacyPolicey = () => {
    navigation.navigate(ScreenNames.WebViewScreen, {
      url: 'https://www.hondacarindia.com/privacy-policy',
    });
  };

  const onPressTermPolicey = () => {
    navigation.navigate(ScreenNames.WebViewScreen, {
      url: 'https://www.hondacarindia.com/terms-and-conditions',
    });
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.innerContainer}>
        <CustomStatusBar />
        <CustomHeader
          headerStyle={styles.header}
          leftIcon={Images.backarrow}
          leftIconStyle={styles.backIcon}
          onleftPress={navigation.goBack}
        />
        <View style={styles.HeadingContainer}>
          <Text style={styles.title}>{roleName} Sign In</Text>
          <Text style={styles.subtitle}>Please enter your phone number</Text>
        </View>
        <View
          style={[
            styles.inputContainer,
            !isValid && phoneNumber.length > 0 && styles.errorBorder,
          ]}>
          <Text style={styles.countryCode}>+ 91</Text>
          {/* <Text style={styles.partition}>|</Text> */}
          <Image style={styles.partition} source={Images.verticalLine}/>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Phone Number"
            placeholderTextColor={'#999'}
            value={phoneNumber}
            onChangeText={handlePhoneChange}
            onKeyPress={({nativeEvent}) => {
              if (!/^\d$/.test(nativeEvent.key)) {
                return;
              }
            }}
          />
        </View>
        {(!isValid || hasNonNumeric) &&
          (phoneNumber.length > 0 || hasNonNumeric) && (
            <Text style={styles.errorText}>Enter a valid 10-digit number</Text>
          )}

        <View style={styles.bottomView}>

          <CustomButton
            buttonText="GET OTP"
            onPress={() => navigation.navigate(ScreenNames.Otp, { phoneNumber })}
            isButtonDisabled={!isValid}
            buttonStyle={styles.button}
            disabledButtonStyle={styles.disabledButton}
            textStyle={styles.buttonText}
            disabledButtonTextStyle={{color: colors.descritptionText}}
          />

          <Text style={styles.footerText}>
            By signing in I agree to{' '}
            <Text onPress={onPressPrivacyPolicey} style={styles.link}>
              Privacy Policy
            </Text>{' '}
            &{' '}
            <Text onPress={onPressTermPolicey} style={styles.link}>
              Terms & Conditions
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
