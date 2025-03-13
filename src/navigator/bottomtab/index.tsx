import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {colors} from '../../theme';
import {vh, vw} from '../../utils/dimension';
import {ScreenNames} from '../../utils/screenNames';

import {Images} from '../../assets';
import More from '../../screens/more';
import Training from '../../screens/training';
import Promotion from '../../screens/promotion';
import Category from '../../screens/category';
import Home from '../../screens/home';

const Tab = createBottomTabNavigator();

const TabIcon = ({focused, icon}) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        style={[
          styles.icon,
          {tintColor: focused ? colors.primary : colors.lightGrey},
        ]}
      />
      {focused && <View style={styles.redDot} />}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: vh(90),
          paddingTop:vh(12),
          borderTopWidth: 1,
          borderTopColor: colors.lightGrey,
        },
        tabBarLabelStyle: {
          color: 'black',
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        component={Home}
        name={ScreenNames.Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.homeIcon} />
          ),
        }}
      />

      <Tab.Screen
        component={Category}
        name={ScreenNames.Category}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.categoryIcon} />
          ),
        }}
      />

      <Tab.Screen
        component={Promotion}
        name={ScreenNames.Promotion}
        options={{
          tabBarLabel: 'Promotion',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.promotionIcon} />
          ),
        }}
      />

      <Tab.Screen
        component={Training}
        name={ScreenNames.Training}
        options={{
          tabBarLabel: 'Training',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.trainingIcon} />
          ),
        }}
      />

      <Tab.Screen
        component={More}
        name={ScreenNames.More}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={Images.moreIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: vw(24),
    height: vh(25),
    resizeMode: 'contain',
  },
  redDot: {
    width: vh(6),
    height: vh(6),
    borderRadius: vh(3),
    backgroundColor: 'rgba(228, 29, 45, 1)',
    
    bottom: -20, 
  },
});
