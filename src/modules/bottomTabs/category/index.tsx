/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useCallback, useMemo } from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Assets
import { Images } from '../../../assets';

// Custom Components
import ContentHeader from '../../../components/customContentHeader';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';

// Styles
import styles from './styles';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../../utils/types';
import { ScreenNames } from '../../../utils/screenNames';
import { vw } from '../../../styles/dimensions';
import { HIPlus, Honda } from '../../../staticData';
import CustomFlatList from '../../../components/CustomFlatList';
import CustomSearchBar from '../../../components/CustomSearchBar';
import { CustomYouTubePlayer } from '../../../components/CustomYouTubePlyaer';

interface HomeProps {
  navigation: BottomTabNavigationProp<RootStackParamList>;
}

interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
  number: string;
  price: string;
}

const extractYouTubeVideoId = (url: string) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
};



const Category = ({ navigation }: HomeProps) => {
  const [searchText, setSearchText] = useState('');

  // Memoized data arrays to avoid unnecessary recalculations
  const hondaData = useMemo(() => Honda, []);
  const hiPlusData = useMemo(() => HIPlus, []);

  // Memoizing event handlers
  const handleSearchPress = useCallback(() => {}, []);

  const handleHondaSeeMorePress = useCallback(() => {
    navigation.navigate(ScreenNames.NewHondaCategory);
  }, [navigation]);


  const ImageHeaderRenderItem = React.memo(({ item }: { item: Item }) => {
    const handlePress = () => {
      console.log('item link',item.link);
      
      if (item?.type === 'link' && item?.link) { 
        const videoId = extractYouTubeVideoId(item.link);
        if (videoId) {
          navigation.navigate(ScreenNames.YoutubeVideoScreen, { videoId });
        }
      }
    };
  
    return (
      <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5} onPress={handlePress}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.hondaHqImage}
        leftIconStyle={styles.profileIcon}
        rightIcon={Images.notification}
        rightButtonStyle={styles.notificationButton}
        onRightPress={() => navigation.navigate(ScreenNames.Notification)}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <CustomSearchBar
          placeholder="Search products"
          value={searchText}
          onChangeText={setSearchText}
          onSearchPress={handleSearchPress}
          searchContainerStyle={styles.searchContainer}
        />
        <View style={{ paddingHorizontal: vw(8) }}>
          <CustomFlatList
            data={hondaData}
            renderItem={({ item }) => <ImageHeaderRenderItem item={item} />}
            keyExtractor={item => item.id}
            horizontal
            header
            headerImg={Images.honda}
            onSeeMorePress={handleHondaSeeMorePress}
            contentContainerStyle={styles.customFlatListStyle}
          />

          <CustomFlatList
            data={hiPlusData}
            renderItem={({ item }) => <ImageHeaderRenderItem item={item} />}
            keyExtractor={item => item.id}
            horizontal
            header
            headerStyle={styles.HIPlusHeaderStyle}
            headerImg={Images.hi}
            headerImgStyle={styles.HIPlusImgStyle}
            contentContainerStyle={styles.customFlatListStyle}
          />
        </View>
        <View style={styles.banner}>
          <View style={styles.bannerHeader}>
            <Image source={Images.hiValuePlusImage} style={styles.hiValuePlusImg} />
          </View>
          <View style={styles.bannerContainer}>
            <Image source={Images.hivaluelogo} style={styles.bannerImg} />
            <View style={styles.bannerTextContainer}>
              <ContentHeader
                headerText="HI Value +"
                detailText="Certified Refurbished Generators, Engines & Machinery"
                headerTextStyle={styles.bannerTitle}
                detailTextStyle={styles.bannerSubTitle}
              />
              <TouchableOpacity style={styles.checkNowButton}>
                <Text style={styles.checkNowText}>{'CHECK NOW'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;
