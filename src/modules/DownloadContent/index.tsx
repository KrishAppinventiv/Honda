import { View, Text, Image, ListRenderItemInfo, ImageSourcePropType, FlatList } from 'react-native'
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import CustomStatus from '../../components/CustomStatus';
import colors from '../../utils/colors';
import CustomFlatList from '../../components/CustomFlatList';
import { Images } from '../../assets';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomCard from '../../components/CustomCard';
import CustomHeader from '../../components/customHeader';

type RootStackParamList = {
  DownLoadContent: undefined;
}

type DataItem = {
  id: number,
  title: string,
  image: ImageSourcePropType
}

const data1: DataItem[] = [
  { id: 1, image: Images.tutorial1, title: 'Generators' },
  { id: 2, image: Images.tutorial1, title: 'Tillers' },
  { id: 3, image: Images.tutorial1, title: 'Brush Cutters' },
  { id: 4, image: Images.tutorial1, title: 'Water pumps' },
  { id: 5, image: Images.tutorial1, title: 'Lawn Mowers' },
  { id: 6, image: Images.tutorial1, title: 'Outboard Motors' },
  { id: 7, image: Images.tutorial1, title: 'General Purpose Engines' },
  { id: 8, image: Images.tutorial1, title: 'Battery Operated Hand Tools' }
]

const data2: DataItem[] = [
  { id: 1, image: Images.tutorial1, title: 'Agriculture Machinery' },
  { id: 2, image: Images.tutorial1, title: 'Light Construction Machinery' },
]

type DownLoadContentScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DownLoadContent'>;
};

const DownLoadContent: React.FC<DownLoadContentScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const backPress = () => {
    navigation.goBack()
  }
  const toggleExpand = (id: number) => {
    setExpandedCard(prevId => (prevId === id ? null : id));
  };
  const renderItem = ({ item }: ListRenderItemInfo<DataItem>) => {
    return (
      <CustomCard
        title={
          <View style={styles.flatListInside}>
            <View style={styles.imageContainer}>
              <Image
                source={item.image}
                style={styles.imageInside}
                resizeMode='contain'
              />
            </View>
            <Text style={styles.titleInside}>{item.title}</Text>
          </View>
        }
        description={''}
        showAccordion={true}
        cardStyle={styles.containerInside}
        unexpandImage={Images.right}
        iconColor={colors.lightBlack}
        iconSize={12}
        onAccordionPress={() => toggleExpand(item.id)}
      />
    )
  }
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <CustomStatus />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.backarrow}
        textHeading="Download Content"
        leftButtonStyle={styles.backButton}
        onleftPress={navigation.goBack}
        leftIconStyle={styles.backButton}
      />
      <CustomCard
        title={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={Images.honda}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
        }
        description={
          <FlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
          />
        }
        cardStyle={styles.firstContainer}
        expandImage={Images.upArrow}
        unexpandImage={Images.downArrow}
        // onAccordionPress={notificationPress}
        showAccordion={true}
        iconColor={colors.lightBlack}
        iconSize={11}
        isExpanded={expandedCard === 1} 
        onAccordionPress={() => toggleExpand(1)}
      />
      <CustomCard
        title={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={Images.hiValuePlusImage}
              style={styles.image1}
              resizeMode='contain'
            />
          </View>
        }
        description={
          <FlatList
            data={data2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
          />
        }
        cardStyle={styles.firstContainer}
        expandImage={Images.upArrow}
        unexpandImage={Images.downArrow}
        // onAccordionPress={notificationPress}
        showAccordion={true}
        iconColor={colors.lightBlack}
        iconSize={11}
        isExpanded={expandedCard === 2}
        onAccordionPress={() => toggleExpand(2)}
      />
    </View>
  )
}

export default DownLoadContent