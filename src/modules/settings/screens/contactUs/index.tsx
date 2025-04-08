import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, GestureResponderEvent, Image, ImageSourcePropType, Keyboard, Modal, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';
import CustomFlatList from '../../../../components/CustomFlatList';
import CustomHeader from '../../../../components/customHeader';
import CustomStatus from '../../../../components/CustomStatus';
import InputField from '../../../../components/TextInput\'';
import { vh, vw } from '../../../../styles/dimensions';
import colors from '../../../../utils/colors';
import styles from './style';

type chooseModalItems = {
    id: number,
    name: string,
    image: ImageSourcePropType,
    onPress: ((event: GestureResponderEvent) => void) | undefined,
}

const categories: string[] = ['Hii', 'Hii+', 'Generator'];

type RootStackParamList = {
    ContactUs: undefined;
};

type ContactUsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ContactUs'>;

interface ContactUsProps {
    navigation: ContactUsNavigationProp;
}

const ContactUs = ({ navigation }: ContactUsProps) => {
    const insets = useSafeAreaInsets();
    const [name, setName] = useState('Saurabh Mishra');
    const [emailAddress, setEmailAddress] = useState('Saurabh123@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('9834650200');
    const [description, setDescription] = useState('')
    const [selectedInquiry, setSelectedInquiry] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
    const [image, setImage] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const { height } = Dimensions.get('screen');
    const isSmallDevice = height <= 667;

    useEffect(() => {
        setIsButtonEnabled(
            name.trim() !== '' &&
            emailAddress.trim() !== '' &&
            phoneNumber.trim() !== '' &&
            description.trim() !== '' &&
            selectedInquiry.trim() !== '' &&
            selectedCategory.trim() !== ''
        );
    }, [name, emailAddress, phoneNumber, description, selectedInquiry, selectedCategory]);

    const backPress = () => {
        navigation.goBack()
    }
    const openGallery = () => {
        console.log('open gallery')
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
        setModalVisible(false);
    };

    const handleTakePhoto = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
        setModalVisible(false);
    };

    const handleRemove = () => {
        setImage('')
        setModalVisible(false);
    };

    const handleCountrySelect = (country: string) => {
        setSelectedCategory(country);
        setIsCategoryModalVisible(false);
    };

    const chooseModalItems = [
        { id: 1, name: 'Upload From Gallery', image: Images.bellIcon, onPress: openGallery },
        { id: 2, name: 'Open Camera', image: Images.bellIcon, onPress: handleTakePhoto },
        { id: 3, name: 'Remove Image', image: Images.bellIcon, onPress: handleRemove }
    ]

    const renderItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={styles.cityItem}
            onPress={() => handleCountrySelect(item)}
        >
            <Text style={styles.cityText}>{item}</Text>
        </TouchableOpacity>
    )

    const renderItemChooseItem = ({ item }: { item: chooseModalItems }) => (
        <TouchableOpacity style={styles.container2} onPress={item.onPress}>
            <Image source={Images.bellIcon} style={styles.iconImageSize} />
            <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
    )

    return (
        <KeyboardAwareScrollView
            bounces={false}
            extraHeight={height * (isSmallDevice ? 0.38 : 0.41)}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.container, { paddingTop: insets.top }]}>
                    <CustomStatus />
                    <CustomHeader
                        headerStyle={styles.header}
                        leftIcon={Images.backarrow}
                        textHeading={"Contact Us"}
                        leftButtonStyle={styles.backButton}
                        onleftPress={navigation.goBack}
                        leftIconStyle={styles.backButton}
                    />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                        <View>
                            <InputField
                                placeholder='Name'
                                style={{ marginBottom: vh(20), borderColor: focusedInput === 'name' ? colors.primary : colors.borderSecond, paddingVertical: Platform.OS === 'android' ? 5 : 15 }}
                                placeholderTextColor={colors.inActiveTab}
                                value={name}
                                onChangeText={setName}
                                onFocus={() => setFocusedInput('name')}
                                onBlur={() => setFocusedInput(null)}
                            />
                            <InputField
                                placeholder='Email Address*'
                                style={{ marginBottom: vh(20), borderColor: focusedInput === 'emailAddress' ? colors.primary : colors.borderSecond, paddingVertical: Platform.OS === 'android' ? 5 : 15, }}
                                placeholderTextColor={colors.inActiveTab}
                                value={emailAddress}
                                onChangeText={setEmailAddress}
                                onFocus={() => setFocusedInput('emailAddress')}
                                onBlur={() => setFocusedInput(null)}
                            />
                            <View style={[styles.inputContainer, { borderColor: focusedInput === 'phoneNumber' ? colors.primary : colors.borderSecond }]}>
                                <Text style={styles.countryCode}>+ 91</Text>
                                <View style={styles.separator} />
                                <InputField
                                    style={{ borderColor: colors.white, paddingHorizontal: vw(12), paddingVertical: Platform.OS === 'android' ? 3 : 13 }}
                                    placeholder="Phone Number"
                                    keyboardType="phone-pad"
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    maxLength={10}
                                    placeholderTextColor={colors.inActiveTab}
                                    onFocus={() => setFocusedInput('phoneNumber')}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </View>
                            <TouchableOpacity>
                                <InputField
                                    placeholder='Select type of Inquiry'
                                    placeholderTextColor={colors.inActiveTab}
                                    style={{ marginBottom: vh(20), paddingVertical: Platform.OS === 'android' ? 5 : 15 }}
                                    value={selectedInquiry}
                                    rightIcon={Images.downArrow}
                                    editable={false}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setIsCategoryModalVisible(true)}>
                                <InputField
                                    placeholder='Select category'
                                    placeholderTextColor={colors.inActiveTab}
                                    style={{ marginBottom: vh(20), paddingVertical: Platform.OS === 'android' ? 5 : 15 }}
                                    value={selectedCategory}
                                    rightIcon={Images.downArrow}
                                    editable={false}
                                    onRightIconPress={() => setIsCategoryModalVisible(true)}
                                />
                            </TouchableOpacity>
                            <InputField
                                placeholder='Enter Description here...'
                                style={{ marginBottom: vh(20), borderColor: focusedInput === 'description' ? colors.primary : colors.borderSecond, paddingVertical: Platform.OS === 'android' ? 5 : 15 }}
                                placeholderTextColor={colors.inActiveTab}
                                multiline={true}
                                value={description}
                                onChangeText={setDescription}
                                onFocus={() => setFocusedInput('description')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </View>
                        <View style={styles.viewUpload}>
                            <Text style={styles.upload}>Upload Image</Text>
                            <Text style={styles.uploadDescription}>Please upload a serial number image</Text>
                        </View>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => setModalVisible(true)}>
                            <Image source={image ? { uri: image } : Images.uploadImageIcon} style={styles.insideImage} resizeMode='contain' />
                        </TouchableOpacity>
                    </ScrollView>
                    <CustomButton
                        buttonText={'Submit'}
                        onPress={() => { }}
                        isButtonDisabled={!isButtonEnabled}
                        style={styles.buttonContainer}
                        textStyle={{ color: colors.white }}
                        disabledButtonStyle={{ backgroundColor: colors.backButtonBackground }}
                        disabledButtonTextStyle={{ color: colors.lightGreyBlue }}
                    />
                    <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                            <View style={styles.modalMainContainer}>
                                <View style={styles.modalContentContainer}>
                                    <CustomFlatList
                                        data={chooseModalItems}
                                        renderItem={renderItemChooseItem}
                                        keyExtractor={(item) => item.id}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                    <Modal
                        transparent={true}
                        visible={isCategoryModalVisible}
                        animationType="fade"
                        onRequestClose={() => setIsCategoryModalVisible(false)}
                    >
                        <TouchableWithoutFeedback onPress={() => setIsCategoryModalVisible(false)}>
                            <View style={styles.modalOverlay}>
                                <View style={styles.modalContainer}>
                                    <Text style={styles.flatlistHeader}>Select City</Text>
                                    <FlatList
                                        data={categories}
                                        keyExtractor={(item) => item}
                                        renderItem={renderItem}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
}

export default ContactUs