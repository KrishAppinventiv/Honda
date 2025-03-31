import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/customHeader';
import CustomInput from '../../components/customInput';
import CustomStatusBar from '../../components/statusBar';
import {validateEmail, validateName} from '../../utils/commonFunctions';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import { requestCameraPermission, requestStoragePermission } from '../../components/customPermissions';
import { RootStackParamList } from '../../utils/types';
import { Images } from '../../assets';
import { vh } from '../../styles';
import CustomMobileInputBox from '../../components/CustomMobileInputBox';
import CustomDateTimePicker from '../../components/customDateTimePicker';
import { days } from '../../staticData';
import CustomButton from '../../components/CustomButton';

interface profileProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Profile = ({navigation}: profileProps) => {
  const [imageUri, setImageUri] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [callingCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [isAllWeekSelected, setIsAllWeekSelected] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Mahesh Honda',
    email: 'maheshhonda@gmail.com',
    city: 'Noida',
  });
  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    cityError: false,
  });

  // Handling Changes in Input Fields
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));

    switch (field) {
      case 'name':
        setErrors(prev => ({
          ...prev,
          nameError: value === '' ? false : !validateName(value),
        }));
        break;
      case 'email':
        setErrors(prev => ({
          ...prev,
          emailError: value === '' ? false : !validateEmail(value),
        }));
        break;

      case 'city':
        setErrors(prev => ({
          ...prev,
          cityError: value === '' ? false : !validateName(value),
        }));
        break;
      default:
        break;
    }
  };


  const openGallery =  () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImageUri(image.path);
        setModalVisible(false);
      })
      .catch(error => {
        console.log('Error selecting image: ', error);
        setModalVisible(false); 
      });
};

const handleTakePhoto = async () => {
  const hasPermissions = await requestCameraPermission();

  if (hasPermissions) {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImageUri(image.path);
        setModalVisible(false);
      })
      .catch(error => {
        console.log('Error taking photo: ', error);
        setModalVisible(false);
      });
  } else {
    console.log('Permission denied for camera access.');
  }
};


  const handleRemove = () => {
    setModalVisible(false);
    setImageUri('');
  };

  const handleMoreOption = () => {
    setModalVisible(true);
  };

  const handleStartTimeChange = (text: string) => {
    setStartTime(text);
  };

  const handleEndTimeChange = (text: string) => {
    setEndTime(text);
  };

  const handleAllWeekSelection = () => {
    setIsAllWeekSelected(true);
    setSelectedDays([]);
  };

  const handleCustomWeekSelection = () => {
    setIsAllWeekSelected(false);
  };
  const toggleDaySelection = (index: number): void => {
    // If already selected, remove it; if not, add it
    if (selectedDays.includes(index)) {
      setSelectedDays(
        selectedDays.filter((dayIndex: number) => dayIndex !== index),
      );
    } else {
      setSelectedDays([...selectedDays, index]);
    }
  };

  const renderItem = ({item, index}: {item: string; index: number}) => {
    // const isSelected = isAllWeekSelected;
    const isSelected = isAllWeekSelected || selectedDays.includes(index);

    return (
      <TouchableOpacity
        style={[styles.dayButton, isSelected && styles.selectedDayButton]}
        onPress={() => {
          if (!isAllWeekSelected) {
            toggleDaySelection(index); // Toggle selection only if custom week is selected
          }
        }}>
        <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const isButtonDisabled = !imageUri;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        leftIcon={Images.backarrow}
        textHeading="Profile"
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        headerStyle={styles.header}
      />
      <ScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <Image
            style={styles.profileImage}
            source={imageUri ? {uri: imageUri} : Images.hondaHqImage}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleMoreOption}
            activeOpacity={1}>
            <Image source={Images.pencilIcon} style={styles.addImg} />
          </TouchableOpacity>
        </View>
        <CustomInput
          value={formData.name}
          label="Name"
          Error={errors.nameError}
          errorText={
            'Please use only alphabetical letters and minimum length is 3 characters.'
          }
          maxLength={20}
          keyboardType={'ascii-capable'}
          onChangeText={text => handleInputChange('name', text)}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
        />
        <CustomInput
          value={formData.email}
          label="Email Id"
          Error={errors.emailError}
          errorText={'Please enter valid email'}
          maxLength={30}
          keyboardType={'email-address'}
          onChangeText={text => handleInputChange('email', text)}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.emailTextInput}
          rightText={'Verify Now'}
          rightTextStyle={styles.verifyNowText}
        />
        <CustomMobileInputBox
          label={'Phone Number'}
          callingCode={callingCode}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          error={phoneError}
          setError={setPhoneError}
          // errorText={string.Login.phoneNumberError}
        />
        <CustomInput
          value={formData.city}
          label="City"
          Error={errors.cityError}
          errorText={
            'Please use only alphabetical letters and minimum length is 3 characters.'
          }
          maxLength={20}
          keyboardType={'ascii-capable'}
          onChangeText={text => handleInputChange('city', text)}
          inputContainerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
        />
        <View style={styles.serviceDaysContainer}>
          <Text style={styles.serviceDaysText}>{'Service Days'}</Text>
          <View style={styles.weekOptionsContainer}>
            <TouchableOpacity
              style={styles.singleWeekContainer}
              activeOpacity={0.5}
              onPress={handleAllWeekSelection}>
              <Image
                source={
                  isAllWeekSelected
                    ? Images.selectRadio
                    : Images.unselectRadio
                }
                style={
                  isAllWeekSelected
                    ? styles.radioSelected
                    : styles.radioUnselected
                }
              />
              <Text style={styles.singleWeekOptionText}>{'All Week days'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.singleWeekContainer}
              activeOpacity={0.5}
              onPress={handleCustomWeekSelection}>
              <Image
                source={
                  !isAllWeekSelected
                    ? Images.selectRadio
                    : Images.selectRadio
                }
                style={
                  !isAllWeekSelected
                    ? styles.radioSelected
                    : styles.radioUnselected
                }
              />
              <Text style={styles.singleWeekOptionText}>
                {'Customise Week days'}
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={days}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{flex: 1, marginTop: vh(16)}}
          />
        </View>
        <View style={styles.serviceHoursContainer}>
          <Text style={styles.serviceHoursText}>{'Service Hours'}</Text>
          <View style={styles.timeContainer}>
            <CustomDateTimePicker
              label={'Select From'}
              onDateChange={handleStartTimeChange}
              mode={'time'}
              containerStyle={styles.singleTimeContainer}
              rightIcon={Images.clockIcon}
            />
            <CustomDateTimePicker
              label="Select To"
              onDateChange={handleEndTimeChange}
              mode={'time'}
              containerStyle={styles.singleTimeContainer}
              rightIcon={Images.clockIcon}
            />
          </View>
        </View>
      </ScrollView>
      <CustomButton
        buttonText={'UPDATE'}
        onPress={() => {}}
        buttonStyle={styles.updateButton}
        isButtonDisabled={isButtonDisabled}
        disabledButtonStyle={styles.disableUpdateButton}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalMainContainer}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalTopContainer}></View>
          </TouchableWithoutFeedback>
          <View style={styles.modalContentContainer}>
            <TouchableOpacity style={styles.container2} onPress={openGallery}>
              <Image source={Images.close} style={styles.iconImageSize} />
              <Text style={styles.name}>{'Upload From Gallery'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container2}
              onPress={handleTakePhoto}>
              <Image source={Images.close} style={styles.iconImageSize} />
              <Text style={styles.name}>{'Open Camera'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container2} onPress={handleRemove}>
              <Image source={Images.close} style={styles.iconImageSize} />
              <Text style={styles.name}>{'Remove Icon'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;
