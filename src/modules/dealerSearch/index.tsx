import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
 
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import DropDownPicker from 'react-native-dropdown-picker';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {Dealer} from './types';
import colors from '../../utils/colors';
import styles from './styles';


const DealerSearch = () => {
  const navigation = useNavigation();

  const [states] = useState([
    {label: 'Uttar Pradesh', value: 'Uttar Pradesh'},
    {label: 'Maharashtra', value: 'Maharashtra'},
    {label: 'Karnataka', value: 'Karnataka'},
    {label: 'Tamil Nadu', value: 'Tamil Nadu'},
    {label: 'Gujarat', value: 'Gujarat'},
  ]);
  const citiesData = {
    'Uttar Pradesh': [
      {label: 'Noida', value: 'Noida'},
      {label: 'Lucknow', value: 'Lucknow'},
      {label: 'Varanasi', value: 'Varanasi'},
      {label: 'Kanpur', value: 'Kanpur'},
    ],
    Maharashtra: [
      {label: 'Mumbai', value: 'Mumbai'},
      {label: 'Pune', value: 'Pune'},
      {label: 'Nagpur', value: 'Nagpur'},
    ],
    Karnataka: [
      {label: 'Bangalore', value: 'Bangalore'},
      {label: 'Mysore', value: 'Mysore'},
    ],
    'Tamil Nadu': [
      {label: 'Chennai', value: 'Chennai'},
      {label: 'Coimbatore', value: 'Coimbatore'},
    ],
    Gujarat: [
      {label: 'Ahmedabad', value: 'Ahmedabad'},
      {label: 'Surat', value: 'Surat'},
    ],
  };
  

  const pincodeData = {
    Noida: [
      {label: '201301', value: '201301'},
      {label: '201310', value: '201310'},
      {label: '201305', value: '201305'},
    ],
    Lucknow: [
      {label: '226001', value: '226001'},
      {label: '226010', value: '226010'},
      {label: '226015', value: '226015'},
    ],
    Mumbai: [
      {label: '400001', value: '400001'},
      {label: '400020', value: '400020'},
      {label: '400050', value: '400050'},
    ],
    Pune: [
      {label: '411001', value: '411001'},
      {label: '411030', value: '411030'},
    ],
    Bangalore: [
      {label: '560001', value: '560001'},
      {label: '560034', value: '560034'},
    ],
    Chennai: [
      {label: '600001', value: '600001'},
      {label: '600040', value: '600040'},
    ],
    Ahmedabad: [
      {label: '380001', value: '380001'},
      {label: '380015', value: '380015'},
    ],
  };
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPincode, setSelectedPincode] = useState(null);
  const [stateOpen, setStateOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [pincodeOpen, setPincodeOpen] = useState(false);
  const [Button, SetButton] = useState('Direction');
  const [cityOptions, setCityOptions] = useState([]);
  const [pincodeOptions, setPincodeOptions] = useState([]);


  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [region, setRegion] = useState({
    latitude: 28.6139,
    longitude: 77.209,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true},
    );
  }, []);

  useEffect(() => {
    if (selectedState) {
      setCityOptions(citiesData[selectedState] || []);
      setSelectedCity(null);
      setPincodeOptions([]);
      setSelectedPincode(null);
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCity) {
      setPincodeOptions(pincodeData[selectedCity] || []);
      setSelectedPincode(null);
    }
  }, [selectedCity]);

  const dummyDealers = [
    {
      id: '1',
      name: 'Pioneer One Honda',
      services: 'Sales, Service, Spare Parts',
      address: 'Prince Mohammad St, Jeddah',
      time: '7:00 AM to 8:30 PM || Mon, Tue, Wed, Thu, Fri',
      latitude: 28.5355,
      logo: Images.honda,
      dealerImg: Images.dealerImg,
      longitude: 77.391,
      state: 'Uttar Pradesh',
      city: 'Noida',
      pincode: '201301',
    },
  ];

  useEffect(() => {
    if (!selectedState && !selectedCity && !selectedPincode) {
      setDealers([]);
      return;
    }
    const filteredDealers = dummyDealers.filter(dealer => {
      return (
        (!selectedState || dealer.state === selectedState) &&
        (!selectedCity || dealer.city === selectedCity) &&
        (!selectedPincode || dealer.pincode === selectedPincode)
      );
    });

    setDealers(filteredDealers);
  }, [selectedState, selectedCity, selectedPincode]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.backarrow} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Dealers</Text>
      </View>

      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={stateOpen}
          setOpen={setStateOpen}
          value={selectedState}
          items={states}
          setValue={setSelectedState}
          placeholder="State"
          containerStyle={styles.dropdown}
          style={[
            styles.dropDownPicker,
            stateOpen && !selectedState ? {borderColor: colors.primary} : {},
          ]}
          dropDownContainerStyle={styles.dropDownContainer}
        />
        <DropDownPicker
          open={cityOpen}
          setOpen={setCityOpen}
          value={selectedCity}
          items={cityOptions}
          setValue={setSelectedCity}
          placeholder="City"
          containerStyle={styles.dropdown}
          disabled={!selectedState}
          style={[
            styles.dropDownPicker,
            cityOpen && !selectedCity ? {borderColor: colors.primary} : {},
          ]}
          dropDownContainerStyle={styles.dropDownContainer}
        />
        <DropDownPicker
          open={pincodeOpen}
          setOpen={setPincodeOpen}
          value={selectedPincode}
          items={pincodeOptions}
          setValue={setSelectedPincode}
          placeholder="Pincode"
          containerStyle={styles.dropdown}
          disabled={!selectedCity}
          style={[
            styles.dropDownPicker,
            pincodeOpen && !selectedPincode
              ? {borderColor: colors.primary}
              : {},
          ]}
          dropDownContainerStyle={styles.dropDownContainer}
        />
      </View>

      <View style={styles.mapFlex}>
        <MapView style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={region}>
          {dealers.map(dealer => (
            <Marker
              key={dealer.id}
              coordinate={{
                latitude: dealer.latitude,
                longitude: dealer.longitude,
              }}
              title={dealer.name}
              description={dealer.services}
            />
          ))}
        </MapView>

        <FlatList
          removeClippedSubviews={false}
          data={dealers}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.dealerCard}>
              <View style={styles.cardRow}>
                <Image
                  source={item.dealerImg}
                  style={styles.dealerImg}
                />
                <View style={styles.dealerContent}>
                  <Image source={item.logo} style={styles.logo} />
                  <Text style={styles.dealerName}>{item.name}</Text>
                  <Text style={styles.dealerService}>{item.services}</Text>
                  <View style={styles.cardRow}>
                    <Image
                      source={Images.location}
                      style={styles.locImg}
                    />
                    <Text style={styles.dealerAddress}>{item.address}</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <Image
                      source={Images.time}
                      style={styles.timeIMg}
                    />
                    <Text style={styles.dealerTime}>{item.time}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    Button === 'Email' && styles.selectButton,
                  ]}
                  onPress={() => SetButton('Email')}>
                  <Image
                    source={Images.email}
                    style={[
                      styles.emailImg,
                      Button === 'Email' && {tintColor: '#E41D2D'},
                    ]}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      Button === 'Email' && {color: colors.primary},
                    ]}>
                    Email
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    Button === 'Call' && styles.selectButton,
                  ]}
                  onPress={() => SetButton('Call')}>
                  <Image
                    source={Images.call}
                    style={[
                      styles.callImg,
                      Button === 'Call' && {tintColor: '#E41D2D'},
                    ]}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      Button === 'Call' && {color: colors.primary},
                    ]}>
                    Call
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.directionButton,
                    Button === 'Direction' && styles.selectdirectButton,
                  ]}
                  onPress={() => SetButton('Direction')}>
                  <Image
                    source={Images.direction}
                    style={[
                      styles.directionImg,
                      Button === 'Direction' && {tintColor: '#E41D2D'},
                    ]}
                  />
                  <Text
                    style={[
                      styles.buttonText,
                      Button === 'Direction' && {color: colors.primary},
                    ]}>
                    Get Direction
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          style={styles.flatStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default DealerSearch;

