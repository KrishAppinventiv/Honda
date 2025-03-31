import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import {Images} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../utils/screenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../utils/types';
import CustomHeader from '../../../components/customHeader';
import CustomStatusBar from '../../../components/statusBar';

const roles = [
  {id: 1, name: 'Customer', icon: Images.customer},
  {id: 2, name: 'Dealer', icon: Images.dealer},
  {id: 3, name: 'Retailer', icon: Images.retailer},
  {id: 4, name: 'Employee', icon: Images.employe},
];
type RoleNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Role
>;
const Role = () => {
  const navigation = useNavigation<RoleNavigationProp>();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <CustomHeader headerStyle={styles.header} />

      <View style={styles.HeadingContainer}>
        <Text style={styles.title}>Select Role</Text>
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
            <View style={styles.iconBackground}>
              <Image source={role.icon} style={styles.roleIcon} />
            </View>

            <Text style={styles.roleText}>{role.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Role;
