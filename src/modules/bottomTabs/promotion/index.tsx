import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../utils/types';
import { ScreenNames } from '../../../utils/screenNames';
import { Images } from '../../../assets';
import Carousel from '../../../components/Carousel';
import ProductCard from '../../../components/ProductCard';
import SectionHeader from '../../../components/SectionHeader';
import HiValueCard from '../../../components/valueCard';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomSearch from '../../../components/CustomSearchBar';
import styles from './styles';
import CustomFlatList from '../../../components/CustomFlatList';
import { Honda } from '../../../staticData';
import { vw } from '../../../styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}
const Promotion: React.FC = () => {


  const [searchTerm, setSearchTerm] = useState('');
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


  // Navigating back on Back Press
  const onRightPress = () => {
   navigation.navigate(ScreenNames.Notification)
  };

  const navigation = useNavigation<HomeScreenNavigationProp>();


  const ImageHeaderRenderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    <CustomStatusBar />
    <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.hondaHqImage}
        leftButtonStyle={styles.leftButtonStyle}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.leftIconStyle}
        rightIcon={Images.bellIcon}
        rightButtonStyle={styles.rightButtonStyle}
        rightIconStyle={styles.leftIconStyle}
        onRightPress={onRightPress}
      />
     <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Carousel />

        <View style={{paddingHorizontal: vw(8)}}>
          <CustomFlatList
            data={Honda}
            renderItem={ImageHeaderRenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headingText={'Promotions'}
           // headerImg={Images.honda}
            onSeeMorePress={() => {
              navigation.navigate(ScreenNames.NewHondaCategory);
            }}
            contentContainerStyle={styles.customFlatListStyle}
          />

           <CustomFlatList
            data={Honda}
            renderItem={ImageHeaderRenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headingText={'News'}
           // headerImg={Images.honda}
            onSeeMorePress={() => {
              navigation.navigate(ScreenNames.NewHondaCategory);
            }}
            contentContainerStyle={styles.customFlatListStyle}
          />

           <CustomFlatList
            data={Honda}
            renderItem={ImageHeaderRenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            header
            headingText={'Warranty'}
           // headerImg={Images.honda}
            onSeeMorePress={() => {
              navigation.navigate(ScreenNames.NewHondaCategory);
            }}
            contentContainerStyle={styles.customFlatListStyle}
          />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Promotion;
