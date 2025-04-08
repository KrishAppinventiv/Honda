// /* eslint-disable react/no-unstable-nested-components */
import React, {ReactNode, useState} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomStatusBar from '../../../components/statusBar';
import CustomHeader from '../../../components/customHeader';
import {ScreenNames} from '../../../utils/screenNames';
import {RootStackParamList} from '../../../utils/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../../assets';
import SectionHeader from '../../../components/SectionHeader';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';

interface EquipmentTrainingProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
interface Item {
  name: ReactNode;
  id: number;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}
interface SimpleItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
}
const Training = ({navigation}: EquipmentTrainingProps) => {

  const categories = [
    {id: '1', name: 'Battery operated', image: Images.battery},
    {id: '2', name: 'Generators', image: Images.tutorial1},
    {id: '3', name: 'Tillers', image: Images.tiller},
    {id: '4', name: 'Brush Cutters', image: Images.battery},
    {id: '5', name: 'Water Pumps', image: Images.tutorial1},
    {id: '6', name: 'Lawn Mowers', image: Images.tiller},
    {id: '5', name: 'Outboard Motors', image: Images.tutorial1},
    {id: '6', name: 'General Purp. Engines', image: Images.tiller},
  ];
  const category = [
    {id: '1', name: 'Agriculture Machinery', image: Images.agriculture},
    {id: '2', name: 'Light Construction', image: Images.machinery},
    {id: '3', name: 'Other Categories', image: Images.other},
  ];

  const ImageHeaderRenderItem = ({ item }: { item: Item }) => {
  
    const handlePress = () => {
      if (item.name === 'Generators') {
        navigation.navigate(ScreenNames.EquipmentTraining); // Replace 'EquipmentTraining' with your actual screen name
      }
    };
  
    return (
      <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5} onPress={handlePress}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
        <Text style={styles.itemTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.hondaHqImage}
        leftIconStyle={styles.profileIcon}
        rightIcon={Images.notification}
        rightButtonStyle={styles.notificationButton}
        onRightPress={() => {
          navigation.navigate(ScreenNames.Notification);
        }}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{flex: 1,alignItems:'center'}}>
          <SectionHeader
            image={Images.honda}
            imageStyle={styles.imageStyle}
          />
          <FlatList
            data={categories}
            numColumns={3}
            renderItem={ImageHeaderRenderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
          <SectionHeader
            image={Images.hi}
            imageStyle={styles.hiPlusImageStyle}
          />
          <FlatList
            data={category}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={ImageHeaderRenderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Training;
