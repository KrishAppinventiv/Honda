import {Image, ImageSourcePropType, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// Custom Components
import CustomStatusBar from '../../components/statusBar';
import CustomHeader from '../../components/customHeader';
import Carousel from '../../components/customCorousel';
import {specifications, steps} from '../staticContent/productDetail';

import Button from '../../components/Button';
// Assets
import {Images} from '../../assets';
//Utils
import {RootStackParamList} from '../../utils/types';
//styles
import styles from './styles';
import {STRINGS} from '../../utils';
import {ScreenNames} from '../../utils/screenNames';
import SingleExpandableList from '../../components/customAccordian';
import colors from '../../utils/colors';
import { vw } from '../../styles/dimensions';

// Types
interface ProductDetailPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
interface Item {
  id: string;
  title: string;
  image: ImageSourcePropType;
}

// Main Component
const ProductDetailPage = ({navigation}: ProductDetailPageProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Function to expand the clicked item and collapse others
  const handleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  // Function to handle Scrolling of Corousel
  const handleScrollEnd = (event: {
    nativeEvent: {contentOffset: {x: number}};
  }) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x / styles.slide.width,
    );
    setCurrentStep(newIndex);
  };

  // Corousel Render Item
  const corouselRenderItem = ({item}: {item: Item}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  // Navigating back on Back Press
  const onBackPress = () => {
    navigation.goBack();
  };

  // Function to Toggle the expanded state of Description
  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader
        headerStyle={styles.header}
        leftIcon={Images.back}
        leftButtonStyle={styles.leftButtonStyle}
        onleftPress={navigation.goBack}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel
          data={steps}
          currentStep={currentStep}
          renderItem={corouselRenderItem}
          handleScrollEnd={handleScrollEnd}
          paginationStyle={styles.pagination}
        />
        <View style={styles.bottomContainer}>
          <View>
            <View style={styles.productDetailContainer}>
              <View>
                <Text style={styles.productName}>{'EU70is'}</Text>
              </View>
              <Text style={styles.productDetail}>
                {'Generators | Inverter Series'}
              </Text>
            </View>
            <View>
              <Text style={styles.productDescription}>
                {expanded
                  ? STRINGS.ProductDetailPage.moreDescription
                  : STRINGS.ProductDetailPage.lessDescription}
                <Text style={styles.readMore} onPress={toggleDescription}>
                  {expanded ? ' Read less' : 'Read more'}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.allExpandableContainer}>
            <SingleExpandableList
              iconSize={vw(14)}
              iconColor={colors.black}
              expandImage={Images.upArrow}
             unexpandImage={Images.downArrow}
              title={'Specifications'}
              style={{borderColor: colors.borderLight}}
              isExpanded={expandedIndex === 0}
              onAccordionPress={() => handleExpand(0)}>
              <View style={styles.listContainer}>
                {specifications.map(item => (
                  <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemFeature}>{item.feature}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </SingleExpandableList>
            <SingleExpandableList
             iconSize={vw(14)}
             iconColor={colors.black}
             expandImage={Images.upArrow}
            unexpandImage={Images.downArrow}
              title={'Technology'}
              style={{borderColor: colors.borderLight}}
              // containerStyle={styles.singleExpandableContainer}
              isExpanded={expandedIndex === 1}
              onAccordionPress={() => handleExpand(1)}>
              <View style={styles.listContainer}>
                {specifications.map(item => (
                  <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemFeature}>{item.feature}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </SingleExpandableList>
            <SingleExpandableList
             iconSize={vw(14)}
             iconColor={colors.black}
               expandImage={Images.upArrow}
              unexpandImage={Images.downArrow}
              title={'Salient Features'}
              style={{borderColor: colors.borderLight}}
              isExpanded={expandedIndex === 2}
              onAccordionPress={() => handleExpand(2)}>
              <View style={styles.listContainer}>
                {specifications.map(item => (
                  <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemFeature}>{item.feature}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </SingleExpandableList>
            <SingleExpandableList
             iconSize={vw(14)}
             iconColor={colors.black}
              expandImage={Images.upArrow}
             unexpandImage={Images.downArrow}
              title={'Extended Warranty of Features'}
              style={{borderColor: colors.borderLight}}
              isExpanded={expandedIndex === 3}
              onAccordionPress={() => handleExpand(3)}>
              <View style={styles.listContainer}>
                {specifications.map(item => (
                  <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemFeature}>{item.feature}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </SingleExpandableList>
            <SingleExpandableList
             iconSize={vw(14)}
             iconColor={colors.black}
               expandImage={Images.upArrow}
              unexpandImage={Images.downArrow}
              title={'Download Content'}
              style={{borderColor: colors.borderLight}}
              isExpanded={expandedIndex === 4}
              onAccordionPress={() => handleExpand(4)}>
              <View style={styles.listContainer}>
                {specifications.map(item => (
                  <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemFeature}>{item.feature}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </SingleExpandableList>
            <SingleExpandableList
             iconSize={vw(14)}
             iconColor={colors.black}
               expandImage={Images.upArrow}
              unexpandImage={Images.downArrow}
              title={'Popular Applications'}
              style={{borderColor: colors.borderLight}}
              isExpanded={expandedIndex === 5}
              onAccordionPress={() => handleExpand(5)}>
              <View style={styles.listContainer}>
                {specifications.map(item => (
                  <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemFeature}>{item.feature}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </SingleExpandableList>
            <View style={styles.dealerContainer}>
              <Text style={styles.dealer}>{'Dealers'}</Text>
              <Text
                onPress={() => navigation?.navigate(ScreenNames.DealerSearch)}
                style={styles.locateDealer}>
                {'Locate Dealer'}
              </Text>
            </View>
            <View style={styles.alertBanner}>
              <View style={styles.alertHeader}>
                <Image source={Images.infoIcon} style={styles.infoImg} />
                <Text style={styles.alertTitle}>{'Disclaimer'}</Text>
              </View>
              <View style={styles.alertDescriptionContainer}>
                <Text style={styles.alertDescription}>
                  {STRINGS.ProductDetailPage.alertDescription}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerContentContainer}>
          <View style={styles.footerTextContainer}>
            <Text style={styles.priceText}>{'₹ 245,000.00'}</Text>
            <Text style={styles.priceDetailText}>
              {'Inclusive of all taxes'}
            </Text>
          </View>
          <Button
            text={'BUY NOW'}
            onPress={() => {}}
            style={styles.buyNowButton}
            textStyle={styles.buyNowButtonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailPage;
