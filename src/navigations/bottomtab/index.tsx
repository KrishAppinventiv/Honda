import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {ScreenNames} from '../../utils/screenNames';
import colors from '../../utils/colors';
import { Images } from '../../assets';
import Category from '../../modules/bottomTabs/category';
import Home from '../../modules/bottomTabs/home';
import More from '../../modules/bottomTabs/more';
import Promotion from '../../modules/bottomTabs/promotion';
import Training from '../../modules/bottomTabs/training';
import { vh, vw } from '../../styles';

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
          shadowColor: colors.bottomTabShadow,
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 10,
          shadowRadius: 1,
          elevation: 5, // For Android shadow
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
