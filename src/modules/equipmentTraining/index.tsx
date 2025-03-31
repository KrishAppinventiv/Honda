// /* eslint-disable react/no-unstable-nested-components */
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images } from '../../assets';
import CustomFlatList from '../../components/CustomFlatList';
import CustomHeader from '../../components/customHeader';
import CustomStatusBar from '../../components/statusBar';
import { HIPlus, Honda, trainingButtonData } from '../../staticData';
import { RootStackParamList } from '../../utils/types';
import styles from './styles';

interface TrainingProps {
  navigation: BottomTabNavigationProp<RootStackParamList>;
}
interface Item {
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
const GeneratorsRenderItem = ({item}: {item: SimpleItem}) => (
  <TouchableOpacity
    style={styles.textHeaderItemContainer}
    activeOpacity={0.5}
    onPress={() => {}}>
    <View style={styles.textHeaderImageContainer}>
      <Image source={item.image} style={styles.textHeaderItemImage} />
    </View>
    <Text style={styles.textHeaderItemTitle}>{item.title}</Text>
  </TouchableOpacity>
);
const EquipmentTraining = ({navigation}: TrainingProps) => {
  const [selected, setSelected] = useState(1);
  const [currentData, setCurrentData] = useState(Honda);

  const handleButtonPress = (categoryId: React.SetStateAction<number>) => {
    setSelected(categoryId);

    switch (categoryId) {
      case 1:
        setCurrentData(Honda);
        break;
      case 2:
        setCurrentData(HIPlus);
        break;
      case 3:
        setCurrentData(Honda);
        break;
      case 4:
        setCurrentData(HIPlus);
        break;
      default:
        setCurrentData(Honda);
    }
  };

  const renderItem = ({item}: {item: Item}) => (
    <View>
      <TouchableOpacity
        style={[
          styles.Button,
          selected === item.id ? styles.selectedButton : null,
        ]}
        onPress={() => handleButtonPress(item.id)}>
        <Text
          style={[
            styles.buttonText,
            selected === item.id ? styles.selectedButtonText : null,
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.profileIcon}
        textHeading='Generators'
      />
      <View style={styles.choiceContainer}>
        <CustomFlatList
          data={trainingButtonData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
      <CustomFlatList
        data={currentData}
        renderItem={({item}) => <GeneratorsRenderItem item={item} />}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={styles.customFlatListStyle}
      />
    </SafeAreaView>
  );
};

export default EquipmentTraining;
