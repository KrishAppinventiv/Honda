/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../utils/types';
import {Images} from '../../assets';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomFlatList from '../../components/CustomFlatList';
import CustomButton from '../../components/CustomButton';
import FilterBottomSheet from '../../components/FilterBottomSheet';
import styles from './styles';
import {categoriesData, newArrivals, typesData} from '../../staticData';
import CustomSearch from '../../components/CustomSearchBar';
import {BlurView} from '@react-native-community/blur';
import SortBottomSheet from '../../components/sortBottomSheet';
import SingleExpandableList from '../../components/customAccordian';
import CheckBox from 'react-native-check-box';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { screenWidth, vw } from '../../styles';
import { useRoute } from '@react-navigation/native';
import CustomHeader from '../../components/customHeader';

interface NewArrivalsProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const NewArrivals = ({navigation}: NewArrivalsProps) => {
  const [searchText, setSearchText] = useState('');
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSortVisible, setSortVisible] = useState(false);
  const [priceRange, setPriceRange] = useState([10000, 265000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [resetFilter, setResetFilter] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>('');

    let routes = useRoute();
    const {screenName} = routes?.params
    
      useEffect(() => {
        console.log('Received screenName:', screenName);
      }, [screenName]);
  

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const toggleSort = () => {
    setSortVisible(!isSortVisible);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category],
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type],
    );
  };

  const filteredData = newArrivals.filter(item => {
    const price = parseFloat(item.price.replace(/[₹,]/g, '').trim());
    const isInPriceRange = price >= priceRange[0] && price <= priceRange[1];

    const isInSelectedCategories =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.title);

    console.log(
      `Item: ${item.title}, Price: ${price}, In Price Range: ${isInPriceRange}, In Selected Categories: ${isInSelectedCategories}`,
    );

    return isInPriceRange && isInSelectedCategories;
  });

  const dataToShow = resetFilter ? newArrivals : filteredData;

  const GeneratorsRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      style={styles.textHeaderItemContainer}
      activeOpacity={0.5}
      onPress={() => {}}>
      <View style={styles.textHeaderImageContainer}>
        <Image source={item.image} style={styles.textHeaderItemImage} />
      </View>
      <View>
        <Text style={styles.textHeaderItemNumber}>{item.number}</Text>
        <Text style={styles.textHeaderItemTitle}>{item.title}</Text>
        <Text style={styles.textHeaderItemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleSearchPress = () => {};

  const priceDifference = priceRange[1] - priceRange[0];

  const handleApplySort = (order: string) => {
    setSortOrder(order);
    const sortedData = dataToShow.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[₹,]/g, '').trim());
      const priceB = parseFloat(b.price.replace(/[₹,]/g, '').trim());
      if (order === 'high') {
        return priceB - priceA;
      } else {
        return priceA - priceB;
      }
    });
   
  };

  return (
    <SafeAreaView style={[styles.mainContainer]}>
     <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading={screenName === 'Honda Marine' ? '' : screenName}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
        headerIcon={screenName === 'Honda Marine' ? Images.hondaMarineLogo : Images.honda}
      />
      {(isFilterVisible || isSortVisible) && (
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
          overlayColor="rgba(51, 51, 51, 0.3)"
        />
      )}

      <CustomFlatList
        data={dataToShow}
        renderItem={GeneratorsRenderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={styles.customFlatListStyle}
        listHeaderComponent={
          <>
            <CustomSearch
              placeholder="Search Product"
              style={styles.searchContainer}
              value={searchText}
              onChangeText={text => setSearchText(text)}
              onPress={handleSearchPress}
            />
          </>
        }
      />
      <View style={styles.footer}>
        {!isFilterVisible && !isSortVisible && (
          <View style={styles.footerContentContainer}>
            <CustomButton
              buttonText={'Sort By'}
              iconSource={Images.sort}
              iconStyle={styles.sortByIcon}
              onPress={toggleSort}
              buttonStyle={styles.sortByButton}
              textStyle={styles.sortByButtonText}
            />
            <CustomButton
              buttonText={'Filter'}
              iconSource={Images.filter}
              iconStyle={styles.filterIcon}
              onPress={toggleFilter}
              buttonStyle={styles.filterButton}
              textStyle={styles.filterButtonText}
            />
          </View>
        )}
      </View>

      <FilterBottomSheet
        visible={isFilterVisible}
        onClose={toggleFilter}
        priceRange={priceRange}
        selectedCategories={selectedCategories}
        applyFilter={() => {
          setFilterVisible(false);
          setResetFilter(false);
          setFilterVisible(!isFilterVisible);
        }}
        onClearAll={() => {
          setResetFilter(true);
          setFilterVisible(false);
        }}>
        <Text style={styles.sectionTitle}>Price Range</Text>

        <View style={styles.priceDisplay}>
          <Text style={styles.priceText}>₹ {priceDifference}</Text>
        </View>

        <MultiSlider
          values={priceRange}
          sliderLength={screenWidth - 50}
          min={0}
          max={265000}
          step={1000}
          allowOverlap={false}
          snapped
          markerStyle={styles.sliderMarker}
          selectedStyle={styles.sliderSelected}
          trackStyle={styles.sliderTrack}
          onValuesChange={values => {
            console.log('Updated Values:', values);
            setPriceRange(values);
          }}
        />

        <View style={styles.priceLabels}>
          <Text style={styles.textRange}>₹ {priceRange[0]}</Text>
          <Text>₹ {priceRange[1]}</Text>
        </View>

        <Text style={styles.sectionTitle}>Type</Text>
        <CustomFlatList
          data={typesData}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.typeFlat}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.typeButton,
                selectedTypes.includes(item.label) && styles.selectedType,
              ]}
              onPress={() => toggleType(item.label)}>
              <Text
                style={[
                  styles.typeText,
                  selectedTypes.includes(item.label) && styles.selectedTypeText,
                ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />

        <SingleExpandableList
          title="Categories"
          isExpanded={categoriesExpanded}
          onAccordionPress={() => setCategoriesExpanded(!categoriesExpanded)}
          expandImage={Images.expand}
          unexpandImage={Images.unexpand}
          iconColor="#050507">
          <CustomFlatList
            data={categoriesData}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => toggleCategory(item.label)}>
                <CheckBox
                  isChecked={selectedCategories.includes(item.label)}
                  onClick={() => toggleCategory(item.label)}
                  rightText={item.label}
                  checkBoxColor="#050507"
                />
                <Text style={styles.categoryText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </SingleExpandableList>
      </FilterBottomSheet>

      <SortBottomSheet
        visible={isSortVisible}
        onClose={toggleSort}
        onApplySort={handleApplySort}
      />
    </SafeAreaView>
  );
};

export default NewArrivals;
