import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import CustomHeader from '../../components/customHeader';
import CustomStatusBar from '../../components/statusBar';
import CustomSearch from '../../components/CustomSearchBar';
import CustomButton from '../../components/CustomButton';
import {Images} from '../../assets';
import styles from './styles';
import CustomFlatList from '../../components/CustomFlatList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/types';
import FilterBottomSheet from '../../components/FilterBottomSheet';
import {retailers} from '../../staticData';
import CheckBox from 'react-native-check-box';
import DatePicker from 'react-native-date-picker';
import {BlurView} from '@react-native-community/blur';
import {Menu, Provider as PaperProvider} from 'react-native-paper';
import {format, parse} from 'date-fns';
import colors from '../../utils/colors';
import { navigate } from '../../navigations/navigationServices';
import { ScreenNames } from '../../utils/screenNames';

interface RetailerProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Retailer = ({navigation}: RetailerProps) => {
  const [visibleTooltips, setVisibleTooltips] = useState<{
    [key: string]: boolean;
  }>({});
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [resetFilter, setResetFilter] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<{
    from: Date | null;
    to: Date | null;
  }>({from: null, to: null});
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [visibleMenus, setVisibleMenus] = useState<{[key: string]: boolean}>(
    {},
  );
  const [filteredRetailers, setFilteredRetailers] = useState(retailers);
  const [openPicker, setOpenPicker] = useState<'from' | 'to' | null>(null);
  const openMenu = (id: string) =>
    setVisibleMenus(prev => ({...prev, [id]: true}));
  const closeMenu = (id: string) =>
    setVisibleMenus(prev => ({...prev, [id]: false}));
  const toggleTooltip = (id: string) => {
    setVisibleTooltips(prev => ({...prev, [id]: !prev[id]}));
  };

  const filterRetailers = () => {
    const filtered = retailers.filter(retailer => {
      const retailerDate = parse(retailer.date, 'MM/dd/yyyy', new Date());
      const matchesStatus =
        selectedStatus.length === 0 || selectedStatus.includes(retailer.status);
      const matchesDate =
        (!selectedDate.from || retailerDate >= selectedDate.from) &&
        (!selectedDate.to || retailerDate <= selectedDate.to);
      return matchesStatus && matchesDate;
    });
    setFilteredRetailers(filtered);
  };

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
    if (!isFilterVisible) {
      filterRetailers();
    }
  };

  const onAddNewRetailer = () =>{
    navigation.navigate(ScreenNames.RetailerFormScreen)
  }

  const renderRetailer = ({item}) => (
    <View style={styles.retailerCard}>
      <View style={styles.option}>
        <Text style={styles.retailerName}>{item.name}</Text>

        <Menu
          visible={visibleMenus[item.id]}
          onDismiss={() => closeMenu(item.id)}
          anchor={
            <TouchableOpacity onPress={() => openMenu(item.id)}>
              <Image source={Images.threeDotIcon} style={styles.moreIcon} />
            </TouchableOpacity>
          }>
          <Menu.Item
            onPress={() => Alert.alert('View Retailer')}
            title="View"
          />
          <Menu.Item
            onPress={() => Alert.alert('Edit Retailer')}
            title="Edit"
          />
          <Menu.Item
            onPress={() => Alert.alert('Deactivate Retailer')}
            title="De-activate"
          />
        </Menu>
      </View>

      <Text style={styles.retailerPhone}>{item.phone}</Text>
      <View style={styles.option}>
        <View
          style={[
            styles.statusContainer,
            item.status === 'Activated'
              ? styles.activeStatus
              : styles.deactiveStatus,
          ]}>
          <Text style={item.status === 'Activated' ? styles.statusText : styles.statusTextDeactivate}>{item.status}</Text>
        </View>

        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <PaperProvider>
      <SafeAreaView style={styles.mainContainer}>
        <CustomStatusBar />
        <CustomHeader
          headerStyle={styles.header}
          leftIcon={Images.backarrow}
          textHeading="Retailer"
          leftButtonStyle={styles.backButton}
          onleftPress={navigation.goBack}
        />

        {isFilterVisible && (
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={5}
            reducedTransparencyFallbackColor="white"
            overlayColor="rgba(51, 51, 51, 0.3)"
          />
        )}
        <View style={styles.searchFilter}>
          <CustomSearch
            placeholder="Search Retailers Name"
            searchContainerStyle={styles.searchContainer}
          />
          <TouchableOpacity style={styles.filter} onPress={toggleFilter}>
            <Image source={Images.filter} style={styles.filterImg} />
          </TouchableOpacity>
        </View>
        <CustomFlatList
          data={filteredRetailers}
          renderItem={renderRetailer}
          keyExtractor={item => item.id}
        />

        <FilterBottomSheet
          visible={isFilterVisible}
          onClose={toggleFilter}
          style={{height: '50%'}}
          applyFilter={() => {
            filterRetailers();
            setFilterVisible(false);
            setResetFilter(false);
          }}
          onClearAll={() => {
            setResetFilter(true);
            setFilterVisible(false);
            setSelectedStatus([]);
            setSelectedDate({from: null, to: null});
            setFilteredRetailers(retailers);
          }}>
          <View>
            <Text style={styles.head}>Status</Text>
            <CheckBox
              isChecked={selectedStatus.includes('Activated')}
              style={styles.checkBox}
              onClick={() => {
                setSelectedStatus(prev =>
                  prev.includes('Activated')
                    ? prev.filter(status => status !== 'Activated')
                    : [...prev, 'Activated'],
                );
              }}
              rightText="Activated"
            />
            <CheckBox
              isChecked={selectedStatus.includes('De-activated')}
              style={styles.checkBox}
              onClick={() => {
                setSelectedStatus(prev =>
                  prev.includes('De-activated')
                    ? prev.filter(status => status !== 'De-activated')
                    : [...prev, 'De-activated'],
                );
              }}
              rightText="De-activated"
            />
          </View>
          <View style={styles.line}></View>

          <Text style={styles.head}>Added on date</Text>
          <View style={styles.date}>
            <TouchableOpacity
              onPress={() => setOpenPicker('from')}
              style={styles.datebox}>
              <Text style={styles.select}>
                {selectedDate.from
                  ? format(selectedDate.from, 'MM/dd/yyyy')
                  : 'Select From'}
              </Text>
              <Image source={Images.dateCalanderIcon} style={styles.dateImg} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setOpenPicker('to')}
              style={styles.datebox}>
              <Text style={styles.select}>
                {selectedDate.to
                  ? format(selectedDate.to, 'MM/dd/yyyy')
                  : 'Select To'}
              </Text>
              <Image source={Images.dateCalanderIcon} style={styles.dateImg} />
            </TouchableOpacity>
          </View>
        </FilterBottomSheet>

        {!isFilterVisible && (
          <CustomButton
            buttonText={"ADD NEW RETAILER"}
            onPress={onAddNewRetailer}
            buttonStyle={styles.addButton}
          />
        )}

        <DatePicker
          modal
          open={openPicker !== null}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            if (openPicker === 'from') {
              setSelectedDate(prev => ({...prev, from: date}));
            } else if (openPicker === 'to') {
              setSelectedDate(prev => ({...prev, to: date}));
            }
            setOpenPicker(null);
          }}
          onCancel={() => {
            setOpen(false);
            setOpenPicker(null);
          }}
          mode="date"
        />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Retailer;
