import React, {createContext} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import SplashScreen from '../screens/splashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../utils/screenNames';
import Tutorial from '../screens/tutorial';
import Role from '../screens/role';
import SignIn from '../screens/signin';
import VerifyOtp from '../screens/verifyOtp';
import BottomTabNavigator from './bottomtab';
import DealerSearch from '../screens/dealerSearch';

const Stack: any = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef: any = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          component={SplashScreen}
          name={ScreenNames.Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Tutorial}
          name={ScreenNames.Tutorial}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Role}
          name={ScreenNames.Role}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={SignIn}
          name={ScreenNames.Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={VerifyOtp}
          name={ScreenNames.Otp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={BottomTabNavigator}
          name={ScreenNames.BottomTab}
          options={{headerShown: false}}
        />

<Stack.Screen
          component={DealerSearch}
          name={ScreenNames.DealerSearch}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
