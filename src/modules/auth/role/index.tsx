import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Images} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../utils/screenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../utils/types';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const roles = [
  {id: 1, name: 'Customer', icon: Images.customerRoleIcon},
  {id: 2, name: 'Dealer', icon: Images.dealerRoleIcon},
  {id: 3, name: 'Retailer', icon: Images.retailerRoleIcon},
  {id: 4, name: 'Employee', icon: Images.employeeRoleIcon},
];
type RoleNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Role
>;
const Role = () => {
  const navigation = useNavigation<RoleNavigationProp>();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <CustomStatusBar />
      <CustomHeader mainLogo={Images.hondaLogoIcon} headerStyle={styles.header} />

      <View style={styles.HeadingContainer}>
        <Text style={styles.title}>Who are you?</Text> 
        <Text style={styles.subtitle}>Please select a role to continue</Text>
      </View>

      <View style={styles.grid}>
        {roles.map(role => (
          <TouchableOpacity
            key={role.id}
            style={styles.roleCard}
            onPress={() =>
              navigation.navigate(ScreenNames.Signin, {roleName: role.name})
            }>
              <Image source={role.icon} style={styles.roleIcon} />
            <Text style={styles.roleText}>{role.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Role;
