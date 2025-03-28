import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView, Keyboard, TouchableOpacity, Modal, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomStatus from '../../components/CustomStatus';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import CustomButton from '../../components/CustomButton';
import colors from '../../utils/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import InputField from '../../components/TextInput\'';
import { vh, vw } from '../../styles';
import { Images } from '../../assets';
import CustomHeader from '../../components/customHeader';

type RootStackParamList = {
    ProfileForm: undefined;
    Random: { details: object };
}

type ProfileFormNavigationProp = NativeStackScreenProps<RootStackParamList, 'ProfileForm'>;

const cities = ["Noida", "Gurugram", "Faridabad", "Ghaziabad", "Greater Noida", "Meerut", "Aligarh", "Haridwar", "Rohtak", "Sonipat"];

const RetailerForm: React.FC<ProfileFormNavigationProp> = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const backPress = () => {
        navigation.goBack()
    }

    const handleCountrySelect = (country: string) => {
        setSelectedCity(country);
        setIsModalVisible(false);
    };

    const validateName = (text: string) => {
        if (/^[A-Za-z][A-Za-z\s]*$/.test(text) || text === '') {
            setName(text);
        }
    };

    const validatePhoneNumber = (text: string) => {
        if (/^\d{0,10}$/.test(text)) {
            setPhoneNumber(text);
        }
    };

    const isEmailValid = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateEmail = (text: string) => {
        setEmailAddress(text);
        setIsButtonEnabled(isEmailValid(text));
    };

    const handleSubmit = () => {
        if (!name.trim()) {
            Alert.alert('Validation Error', 'Name is required.');
            return;
        }
        if (!phoneNumber || phoneNumber.length !== 10) {
            Alert.alert('Validation Error', 'Phone number must be exactly 10 digits.');
            return;
        }
        if (!isEmailValid(emailAddress)) {
            Alert.alert('Validation Error', 'Enter a valid email address.');
            return;
        }
        console.log('Form submitted successfully');
        navigation.navigate('Random', {
            details: {
                Name: name,
                EmailAddress: emailAddress,
                PhoneNumber: phoneNumber
            }
        })
    };

    const renderItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={styles.cityItem}
            onPress={() => handleCountrySelect(item)}
        >
            <Text style={styles.cityText}>{item}</Text>
        </TouchableOpacity>
    )

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={70}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <View style={[styles.container, { paddingTop: insets.top }]}>
                        <CustomStatus />
                        <CustomHeader textHeading='Add Retailer' onleftPress={backPress} leftIcon={Images.backarrow} leftIconStyle={styles.leftIcon}  leftButtonStyle={styles.imageWrapper} headerStyle={styles.header} />
                        <View>
                            <InputField
                                placeholder='Name'
                                style={{ marginBottom: vh(20), borderColor: focusedInput === 'name' ? colors.primary : colors.borderSecond, paddingVertical: Platform.OS === 'android' ? 5 : 15, }}
                                placeholderTextColor={colors.backButtonBackground}
                                value={name}
                                onChangeText={validateName}
                                onFocus={() => setFocusedInput('name')}
                                onBlur={() => setFocusedInput(null)}
                            />
                            <InputField
                                placeholder='Email Address*'
                                style={{ marginBottom: vh(20), borderColor: focusedInput === 'email' ? colors.primary : colors.borderSecond, paddingVertical: Platform.OS === 'android' ? 5 : 15, }}
                                placeholderTextColor={colors.backButtonBackground}
                                value={emailAddress}
                                onChangeText={validateEmail}
                                onFocus={() => setFocusedInput('email')}
                                onBlur={() => setFocusedInput(null)}
                            />
                            <View style={[styles.inputContainer, { borderColor: focusedInput === 'phone' ? colors.primary : colors.borderSecond }]}>
                                <Text style={styles.countryCode}>+ 91</Text>
                                <View style={styles.separator} />
                                <InputField
                                    style={{ borderColor: colors.white, paddingHorizontal: vw(12), paddingVertical: Platform.OS === 'android' ? 3 : 13 }}
                                    placeholder="Phone Number"
                                    keyboardType="phone-pad"
                                    value={phoneNumber}
                                    onChangeText={validatePhoneNumber}
                                    maxLength={10}
                                    placeholderTextColor={colors.backButtonBackground}
                                    onFocus={() => setFocusedInput('phone')}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </View>
                            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                                <InputField
                                    placeholder='Select Region'
                                    placeholderTextColor={colors.borderSecond}
                                    style={{ marginBottom: vh(20), paddingVertical: Platform.OS === 'android' ? 5 : 15 }}
                                    value={selectedCity}
                                    rightIcon={Images.downArrow}
                                    editable={false}
                                    onRightIconPress={() => setIsModalVisible(true)}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <CustomButton
                                buttonText={'VERIFY'}
                                onPress={handleSubmit}
                                isButtonDisabled={!isButtonEnabled}
                                style={styles.buttonContainer}
                                textStyle={{ color: colors.white }}
                                disabledButtonStyle={{ backgroundColor: colors.backgroundCarousel }}
                                disabledButtonTextStyle={{ color: colors.lightGreyBlue }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="fade"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.flatlistHeader}>Select City</Text>
                            <FlatList
                                data={cities}
                                keyExtractor={(item) => item}
                                renderItem={renderItem}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default RetailerForm