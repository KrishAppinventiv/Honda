import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../utils/types';
import { ScreenNames } from '../../../utils/screenNames';
import { Images } from '../../../assets';
import Carousel from '../../../components/Carousel';
import ProductCard from '../../../components/ProductCard';
import SectionHeader from '../../../components/SectionHeader';
import HiValueCard from '../../../components/valueCard';
import { vh } from '../../../styles';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomSearch from '../../../components/CustomSearchBar';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;
const Home: React.FC = () => {


  const [searchTerm, setSearchTerm] = useState('');
  const categories = [
    {id: '1', name: 'Battery operated Hand Tools', image: Images.battery},
    {id: '2', name: 'Generators', image: Images.tutorial1},
    {id: '3', name: 'Tillers', image: Images.tiller},
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

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
    <CustomStatusBar />
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

    <CustomSearch
        placeholder="Search products"
        value={searchTerm}
        onTouchablePress={() => navigation.navigate(ScreenNames.DealerSearch)}
        style={styles.searchContainer}
      />
      <Carousel />

      <SectionHeader
        image={Images.honda}
        onPress={() => navigation.navigate(ScreenNames.HondaCategory)}
        imageStyle={styles.imageStyle}
      />
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =><ProductCard onPress={() => navigation.navigate(ScreenNames.ProductDetailPage)} item={item} textAlign="center" />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        removeClippedSubviews={false}
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
        renderItem={({item}) => <ProductCard item={item} textAlign="center" />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        removeClippedSubviews={false}
      />
      <Image source={Images.hi} style={styles.himage} />
      <HiValueCard onPress={() => console.log('Check Now Clicked')} />

      {/* New Arrivals Section */}
      <SectionHeader
        title="New Arrivals"
        onPress={() => navigation.navigate(ScreenNames.newArrivals)}
        image={undefined}
      />
      <FlatList
        data={newArrivals}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.arrivalContainer}
        removeClippedSubviews={false}
      />

      {/* Best Selling Products Section */}
      <SectionHeader
        title="Best Selling Products"
        onPress={() => console.log('See More Best Sellers')}
        image={undefined}
      />
      <FlatList
        data={bestSelling}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        removeClippedSubviews={false}
      />
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
