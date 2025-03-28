import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../../utils/screenNames';
import Tutorial from '../../modules/onBoarding/tutorial';
import Role from '../../modules/auth/role';
import SignIn from '../../modules/auth/signin';
import VerifyOtp from '../../modules/auth/verifyOtp';
import BottomTabNavigator from '../bottomtab';
import DealerSearch from '../../modules/dealerSearch';
import Splash from '../../modules/onBoarding/splashScreen';
import ProductDetailPage from '../../modules/productDetail';
import Honda_Category from '../../modules/honda_Category';
import Generators from '../../modules/generators';
import NewArrivals from '../../modules/newArrivals';
import Notification from '../../modules/notification';
import Setting from '../../modules/Setting';
import Notifications from '../../modules/Setting/screens/Notifications';
import FAQs from '../../modules/Setting/screens/FAQs';
import CustomWebView from '../../modules/WebView';
import Profile from '../../modules/profile';
import Retailer from '../../modules/retailer';
import RetailerForm from '../../modules/retailerForm';
import YouTubePlayerScreen from '../../modules/videoView';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        component={Splash}
        name={ScreenNames.Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Tutorial}
        name={ScreenNames.Tutorial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Role}
        name={ScreenNames.Role}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SignIn}
        name={ScreenNames.Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={VerifyOtp}
        name={ScreenNames.Otp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BottomTabNavigator}
        name={ScreenNames.BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={DealerSearch}
        name={ScreenNames.DealerSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ProductDetailPage}
        name={ScreenNames.ProductDetailPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Honda_Category}
        name={ScreenNames.HondaCategory}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Generators}
        name={ScreenNames.GenratorProductListing}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={NewArrivals}
        name={ScreenNames.newArrivals}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Notification}
        name={ScreenNames.Notification}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Setting}
        name={ScreenNames.Settings}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Notifications}
        name={ScreenNames.ToggleNotifications}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        component={FAQs}
        name={ScreenNames.FaqScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        component={CustomWebView}
        name={ScreenNames.WebViewScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Profile}
        name={ScreenNames.ProfileScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Retailer}
        name={ScreenNames.RetailerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RetailerForm}
        name={ScreenNames.RetailerFormScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={YouTubePlayerScreen}
        name={ScreenNames.YoutubeVideoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
