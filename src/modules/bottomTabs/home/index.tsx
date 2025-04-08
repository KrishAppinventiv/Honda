import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ScrollView,
  Image,
  View,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../utils/types';
import { ScreenNames } from '../../../utils/screenNames';
import { Images } from '../../../assets';
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';
import CustomSearch from '../../../components/CustomSearchBar';
import Carousel from '../../../components/Carousel';
import SectionHeader from '../../../components/SectionHeader';
import ProductCard from '../../../components/ProductCard';
import HiValueCard from '../../../components/valueCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShimmerLoader from '../../../components/customShimmer';
import { screenWidth, vh, vw } from '../../../styles/dimensions';
import colors from '../../../utils/colors';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;
const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API call
   useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 3000);
  return () => clearTimeout(timer); // Cleanup on unmount
}, []);

  const categories = [
    {id: '1', name: 'Generators', image: Images.genratorSetImage},
    {id: '2', name: 'Water Pump', image: Images.waterPumpImage},
    {id: '3', name: 'Honda Marine', image: Images.hondaMarineSmall},
    {id: '4', name: 'Engines', image: Images.engineSmall},
    {id: '5', name: 'Agri & Garden', image: Images.agriculture},
    {id: '6', name: 'Battery Operated', image: Images.battery},
    
  ];

  const category = [
    {id: '1', name: 'Agriculture Machinery', image: Images.agriculture},
    {id: '2', name: 'Light Construction', image: Images.machinery},
    {id: '3', name: 'Other Categories', image: Images.other},
  ];

  const newArrivals = [
    {
      id: '1',
      name: 'EU70is',
      price: '₹ 2,65,000.00',
      image: Images.tutorial1,
      categoryName: 'Generators',
    },
    {
      id: '2',
      name: 'HRJ196',
      price: '₹ 68,000.00',
      image: Images.tutorial3,
      categoryName: 'Lawn Mowers',
    },
    {
      id: '3',
      name: 'WB40XD',
      price: '₹ 36,500.00',
      image: Images.WB,
      categoryName: 'Water Pumps',
    },
  ];

  const bestSelling = [
    {
      id: '1',
      name: 'F300',
      price: '₹ 58,500.00',
      image: Images.f300,
      categoryName: 'Tillers',
    },
    {
      id: '2',
      name: 'BF200',
      price: '₹ --',
      image: Images.bf200,
      categoryName: 'Outboard Motors',
    },
    {
      id: '3',
      name: 'EU70is',
      price: '₹ 88,500.00',
      image: Images.other,
      categoryName: 'Tillers',
    },
  ];


  // Navigating back on Back Press
  const onRightPress = () => {
   navigation.navigate(ScreenNames.Notification)
  };

  // const onProductPress = () =>{
  //   navigation.navigate(ScreenNames.HondaCategory)
  // }


  const onProductPress = (item) => {
    switch (item.name) {
      case 'Generators':
        navigation.navigate(ScreenNames.GenratorProductListing,{screenName:'Genrators'});
        break;
      case 'Water Pump':
        navigation.navigate(ScreenNames.GenratorProductListing,{screenName:'Water Pumps'});
        break;
      case 'Honda Marine':
        navigation.navigate(ScreenNames.GenratorProductListing,{screenName:'Honda Marine'});
        break;
      case 'Engines':
        navigation.navigate(ScreenNames.newArrivals,{screenName:'Engines'});
        break;
      case 'Agri & Garden':
        navigation.navigate(ScreenNames.HondaCategory);
        break;
      case 'Battery Operated':
        navigation.navigate(ScreenNames.newArrivals,{screenName:'Battery Operated hand Tools'});
        break;
      default:
        console.warn('No screen defined for this category');
        break;
    }
  };  

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
    <CustomStatusBar />
     {/*-------CustomHeader------*/}
    <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.hondaHqImage}
        leftButtonStyle={styles.leftButtonStyle}
        leftIconStyle={styles.leftIconStyle}
        rightIcon={Images.bellIcon}
        rightButtonStyle={styles.rightButtonStyle}
        rightIconStyle={styles.leftIconStyle}
        onRightPress={onRightPress}
      />
    <ScrollView showsVerticalScrollIndicator={false}>
      {/*-------CustomSearch------*/}
     <CustomSearch
        placeholder="Search products"
        value={searchTerm}
        onTouchablePress={() => navigation.navigate(ScreenNames.Search)}
        searchContainerStyle={styles.searchContainer}
     />
      {/*-------Carousel------*/}
      <Carousel headerStyle={{marginTop:vh(5)}}/>
      <SectionHeader
        image={Images.honda}
        // onPress={() => navigation.navigate(ScreenNames.HondaCategory)}
        imageStyle={styles.imageStyle}
      />
      <FlatList
          data={isLoading ? new Array(6).fill({}) : categories}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            isLoading ? (
              <ShimmerLoader style={{
                width: screenWidth / 3 - vh(12),
                height: vh(156),
                backgroundColor: colors.white,
                borderRadius: vh(8),
                borderWidth: 1,
                borderColor: colors.backButtonBackground,
                margin: vh(6),
                }} 
                  />
            ) : (
              <ProductCard extraCardStyle={styles.extraCardStyle} onPress={()=>onProductPress(item)} item={item} textAlign="center" />
            )
          }
          keyExtractor={(item, index) => item?.id || index.toString()}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={{
            justifyContent: 'space-between', // evenly spread 3 items
          }}
        />
      {/* Categories Section */}
      <SectionHeader
        image={Images.hi}
        onPress={() => console.log('See More Categories')}
        imageStyle={styles.hiImage}
      />
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCard extraCardStyle={styles.extraCardStyle} item={item} textAlign="center" />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainerHiPlus}
        removeClippedSubviews={false}
      />
      <Image source={Images.hiValuePlusImage} style={styles.himage} />
      <HiValueCard onPress={() => console.log('Check Now Clicked')} />

      {/* New Arrivals Section */}
      <SectionHeader
        title="New Arrivals"
        onPress={() => navigation.navigate(ScreenNames.newArrivals)}
        image={undefined}
        seeMore={true}
        titleStyle={styles.newArrivalText}
      />
      <FlatList
        data={newArrivals}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCard item={item} extraCardStyle={{borderWidth:vw(0)}}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.arrivalContainer}
        removeClippedSubviews={false}
      />

      {/* Best Selling Products Section */}
      <SectionHeader
        title="Best Selling Products"
        onPress={() => console.log('See More Best Sellers')}
        image={undefined}
        seeMore={true}
      />
      <FlatList
        data={bestSelling}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCard extraCardStyle={{borderWidth:vw(0)}} item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        removeClippedSubviews={false}
      />
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
