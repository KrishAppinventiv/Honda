import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, Image, ListRenderItemInfo, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { Images } from '../../../assets';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';
import { ScreenNames } from '../../../utils/screenNames';
import CustomCard from '../../../components/CustomCard';
import CustomSocialAccount from '../../../components/CustomSocialAccount';
import CustomLogout from '../../../components/CustomLogout';
import colors from '../../../utils/colors';

type RootStackParamList = {
  MyProfile: undefined;
  ProfileScreen: undefined;
  Notification: undefined;
  Role: undefined;
  DownLoadContentScreen: undefined;
}

type DataItem = {
  id: number,
  title: string,
}

const data: DataItem[] = [
  { id: 1, title: 'Retailers' },
  { id: 2, title: 'Locate Dealer', },
  { id: 3, title: 'Price List', },
  { id: 4, title: 'Dealer Slab' },
  { id: 5, title: 'Download Content' },
  { id: 6, title: 'Settings' },
  { id: 7, title: 'Logout' }
]

type MoreScreenProps = NativeStackScreenProps<RootStackParamList, 'MyProfile'>;

const More: React.FC<MoreScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number | null>(null);


  const onRightPress = () => {
    navigation.navigate(ScreenNames.Notification)
  }

  const onViewProfile = () => {
    navigation.navigate(ScreenNames.ProfileScreen)
  }

  const renderItem = ({ item }: ListRenderItemInfo<DataItem>) => {
    const isExpanded = expandedItems === item.id;

    // Define navigation mapping
    const screenMap: { [key: string]: string } = {
      "Retailers": ScreenNames.RetailerScreen,
      "Locate Dealer": ScreenNames.DealerSearch,
      "Price List": ScreenNames.Settings,
      "Dealer Slab": ScreenNames.Settings,
      "Download Content": ScreenNames.DownLoadContentScreen,
      "Settings": ScreenNames.Settings,
      "Logout": ScreenNames.Settings,
    };

    const handleNavigation = () => {
      if (item.title === "Logout") {
        // Handle logout logic here
        setDeleteModalVisible(true);
        console.log("Logging out...");
        return;
      }
      navigation.navigate(screenMap[item.title]);
    };

    return (
      <CustomCard
        description=""
        title={item.title}
        isExpanded={isExpanded}
        showAccordion={true}
        cardStyle={styles.firstContainer}
        unexpandImage={Images.rightArrow}
        iconColor={colors.primary}
        iconSize={20}
        onAccordionPress={handleNavigation} // Call the correct function
        titleStyle={styles.text}
      />
    );
  };

  const confirmLogout = () => {
    setDeleteModalVisible(false);
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenNames.Role }],
    })
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
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

      <View style={styles.cardContainer}>
        <Image
          source={Images.hondaHqBig}
          style={styles.imageHii}
          resizeMode="contain"
        />
        <View style={styles.hiValueContainer}>
          <Text style={styles.title1}>Jenny Honda</Text>
          <View style={styles.phoneContainer}>
            <Image
              source={Images.phoneicon}
              style={styles.phone}
              resizeMode="contain"
            />
            <Text style={styles.description1}>+91-9878767656</Text>
          </View>
          <TouchableOpacity onPress={onViewProfile} style={styles.viewContainer}>
            <Text style={styles.viewText}>View Profile</Text>
            <Image
              source={Images.rightArrow}
              style={styles.arrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <CustomSocialAccount />}
        />
      </View>
      <Modal transparent visible={isDeleteModalVisible} animationType="slide">
        <CustomLogout
          title="Logout"
          description="Are you sure you want to logout from the platform"
          buttonText2="CANCEL"
          buttonText1="LOGOUT"
          onButtonPress2={() => setDeleteModalVisible(false)}
          onButtonPress1={confirmLogout}
          styleButtonContainer1={[styles.buttonContainer, { backgroundColor: colors.primary }]}
          textStyle1={{ color: colors.white }}
          styleButtonContainer2={styles.buttonContainer}
        />
      </Modal>

    </View>
  );
}

export default More