/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';

import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/types';
import {ScreenNames} from '../../utils/screenNames';
import { BestSellingProducts, NewArrivalsData } from '../../staticData';
import { Images } from '../../assets';
import CustomFlatList from '../../components/CustomFlatList';

interface honda_CategoryProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const Honda_Category = ({navigation}: honda_CategoryProps) => {
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
  const TillersRenderItem = ({item}: {item: Item}) => (
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
  const BrushCuttersRenderItem = ({item}: {item: Item}) => (
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
  const WaterPumpsRenderItem = ({item}: {item: Item}) => (
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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        leftIconStyle={styles.backIcon}
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <CustomFlatList
          data={NewArrivalsData}
          renderItem={GeneratorsRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Generators"
          onSeeMorePress={() => navigation.navigate(ScreenNames.GenratorProductListing)}
          contentContainerStyle={styles.customFlatListStyle}
        />
        <CustomFlatList
          data={BestSellingProducts}
          renderItem={TillersRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          
          header
          headingText="Tillers"
          contentContainerStyle={styles.customFlatListStyle}
          onSeeMorePress={() => navigation.navigate(ScreenNames.GenratorProductListing)}
        />
        <CustomFlatList
          data={NewArrivalsData}
          renderItem={BrushCuttersRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Brush Cutters"
          contentContainerStyle={styles.customFlatListStyle}
          onSeeMorePress={() => navigation.navigate(ScreenNames.GenratorProductListing)}
        />
        <CustomFlatList
          data={BestSellingProducts}
          renderItem={WaterPumpsRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          header
          headingText="Water pumps"
          contentContainerStyle={styles.customFlatListStyle}
          onSeeMorePress={() => navigation.navigate(ScreenNames.GenratorProductListing)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Honda_Category;
