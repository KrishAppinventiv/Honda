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
import colors from '../../utils/colors';
import CustomCard from '../../components/CustomCard';
import CustomFlatList from '../../components/CustomFlatList';
import ProductCard from '../../components/ProductCard';
import { vw } from '../../styles';
import { flatListData } from '../../staticData';

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

  // Function to Toggle the expanded state of Description
  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const renderItem = ({ item }: {item: Item}) => (
    <View style={{marginRight: vw(12)}}>
      <ProductCard item={{
        id: item.id,
        name: item.title,
        image: item.image,
      }} textAlign='center'/>
    </View>
  )

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
            <CustomCard
                title={'Specifications'}
                description={<View style={styles.listContainer}>
                {specifications.map(item => (
                  <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemFeature}>{item.feature}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                ))}
              </View>}
                isExpanded={expandedIndex === 0} 
                showAccordion={true}
                cardStyle={styles.cardContainer}
                expandImage={Images.expand}
                unexpandImage={Images.unexpand}
                iconColor={colors.lightBlack}
                //iconSize={}
                onAccordionPress={() => handleExpand(0)}
                titleStyle={styles.title}
            />
             <CustomCard
                title={'Technology'}
                description={<View style={styles.listContainer}>
                <Text style={styles.headingText}>Fuel Injection (FI) Technology</Text>
                <Text  style={styles.headingTextDetail}>Introducing the Honda EU70is Generator, now featuring an advanced Electronic Fuel Injection system for the first time. This powerful engine is paired with advanced Electronic Fuel Injection (EFI) technology, which enhances fuel efficiency by approximately 15% and ensures compliance with stringent emissions regulations.
                Noise levels are kept to a minimum with the EU70is’s quiet triple chamber 'low tune' muffler, which meets India’s noise regulations with a noise level of just 85.2 dB(A). Whether used in residential areas or on a job site, you can rely on the EU70is to operate quietly and efficiently.</Text>
              </View>}
                isExpanded={expandedIndex === 1} 
                showAccordion={true}
                cardStyle={styles.cardContainer}
                expandImage={Images.expand}
                unexpandImage={Images.unexpand}
                iconColor={colors.lightBlack}
                onAccordionPress={() => handleExpand(1)}
                titleStyle={styles.title}
            />
           <CustomCard
                title={'Salient Features'}
                description={<View style={styles.listContainer}>
                <Text style={styles.headingText}>Easy To Start</Text>
                <Text  style={styles.headingTextDetail}>Experience effortless starting with the push of a button.</Text>
                <Text style={styles.headingTextSecond}>Circuit Breaker </Text>
                <Text  style={styles.headingTextDetail}>An inbuilt circuit breaker in the Honda EU70is generator safeguards the alternator from damage in the event of a short circuit, ensuring reliable performance and longevity.</Text>
              </View>}
                isExpanded={expandedIndex === 2} 
                showAccordion={true}
                cardStyle={styles.cardContainer}
                expandImage={Images.expand}
                unexpandImage={Images.unexpand}
                iconColor={colors.lightBlack}
                onAccordionPress={() => handleExpand(2)}
                titleStyle={styles.title}
            />
            <CustomCard
                title={'Special Features'}
                description={<View style={styles.listContainer}>
                <Text style={styles.headingText}>Easy To Start</Text>
                <Text  style={styles.headingTextDetail}>Experience effortless starting with the push of a button.</Text>
                <Text style={styles.headingTextSecond}>Circuit Breaker </Text>
                <Text  style={styles.headingTextDetail}>An inbuilt circuit breaker in the Honda EU70is generator safeguards the alternator from damage in the event of a short circuit, ensuring reliable performance and longevity.</Text>
              </View>}
                isExpanded={expandedIndex === 3} 
                showAccordion={true}
                cardStyle={styles.cardContainer}
                expandImage={Images.expand}
                unexpandImage={Images.unexpand}
                iconColor={colors.lightBlack}
                onAccordionPress={() => handleExpand(3)}
                titleStyle={styles.title}
            /> 
            <CustomCard
                title={'Extended Warranty of Features'}
                description={<View style={styles.listContainer}>
                {specifications.map(item => (
                  <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemFeature}>{item.feature}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                ))}
              </View>}
                isExpanded={expandedIndex === 4} 
                showAccordion={true}
                cardStyle={styles.cardContainer}
                expandImage={Images.expand}
                unexpandImage={Images.unexpand}
                iconColor={colors.lightBlack}
                onAccordionPress={() => handleExpand(4)}
                titleStyle={styles.title}
            />
           <CustomCard
                title={'Download Content'}
                description={<View style={styles.listContainer}>
                {specifications.map(item => (
                  <View key={item.id} style={styles.itemContainer}>
                    <Text style={styles.itemFeature}>{item.feature}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                  </View>
                ))}
              </View>}
                isExpanded={expandedIndex === 5} 
                showAccordion={true}
                cardStyle={styles.cardContainer}
                expandImage={Images.expand}
                unexpandImage={Images.unexpand}
                iconColor={colors.lightBlack}
                onAccordionPress={() => handleExpand(5)}
                titleStyle={styles.title}
            />
            <CustomCard
                title={'Popular Applications'}
                description={<CustomFlatList
                  data={flatListData}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  horizontal
                />}
                isExpanded={expandedIndex === 6} 
                showAccordion={true}
                cardStyle={styles.cardContainer}
                expandImage={Images.expand}
                unexpandImage={Images.unexpand}
                iconColor={colors.lightBlack}
                onAccordionPress={() => handleExpand(6)}
                titleStyle={styles.title}
            />
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
