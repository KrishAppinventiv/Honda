import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Carousel from '../../components/Carousel';
import ProductCard from '../../components/ProductCard';
import SectionHeader from '../../components/SectionHeader';
import {vh, vw} from '../../utils/dimension';
import {Images} from '../../assets';
import HiValueCard from '../../components/valueCard';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../utils/screenNames';
import {RootStackParamList} from '../../utils/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GlobalHeader from '../../components/GlobalHeader';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;
const Home: React.FC = () => {
  const categories = [
    {id: '1', name: 'Battery operated Hand Tools', image: Images.battery},
    {id: '2', name: 'Generators', image: Images.tutorial1},
    {id: '3', name: 'Tillers', image: Images.tiller},
  ];

  const category = [
    {id: '1', name: 'Agriculture Machinery', image: Images.agriculture},
    {id: '2', name: 'Light Construction Machinery', image: Images.machinery},
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

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <View style={styles.headerContainer}>
        <Image source={Images.honda} style={styles.logo} />

        <TouchableOpacity style={styles.notificationWrapper}>
          <View style={styles.notifyView}>
            <Image
              source={Images.notification}
              style={styles.notificationIcon}
            />
          </View>
        </TouchableOpacity>
      </View> */}

<GlobalHeader
      // headerStyle={styles.container}
      backButton
      backIcon={Images.profile}
      backIconStyle={styles.profile}
      rightIcon={Images.bell}
      rightButton
    />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(ScreenNames.DealerSearch)}>
        <View style={styles.searchContainer}>
          <Image
            source={Images.search}
            style={{
              height: vh(16),
              width: vh(16),
              tintColor: '#9DA7C4',
              marginRight: vh(7),
            }}
          />
          <TextInput
            placeholder="Search products"
            style={styles.searchInput}
            placeholderTextColor={'#9DA7C4'}
          />
        </View>
      </TouchableOpacity>
      <Carousel />

      <SectionHeader
        image={Images.honda}
        onPress={() => console.log('See More Categories')}
        imageStyle={styles.imageStyle}
      />
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCard item={item} textAlign="center" />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
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
      />
      <Image source={Images.hi} style={styles.himage} />
      <HiValueCard onPress={() => console.log('Check Now Clicked')} />

      {/* New Arrivals Section */}
      <SectionHeader
        title="New Arrivals"
        onPress={() => console.log('See More Arrivals')}
        image={undefined}
      />
      <FlatList
        data={newArrivals}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.arrivalContainer}
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
      />
     
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
