import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Images} from '../../assets';
import {vh} from '../../utils/dimension';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../utils/screenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../utils/types';
import {colors} from '../../theme';
import styles from './styles';

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
    <View style={styles.container}>
      <Image source={Images.honda} style={styles.logo} />

      <View>
        <Text style={styles.title}>Select Role</Text>
        <Text style={styles.subtitle}>Please select a role to continue</Text>
      </View>

      <View style={styles.grid}>
        {roles.map(role => (
          <TouchableOpacity
            key={role.id}
            style={styles.roleCard}
            onPress={() => navigation.navigate(ScreenNames.Signin)}>
            <View style={styles.iconBackground}>
              <Image source={role.icon} style={styles.roleIcon} />
            </View>

            <Text style={styles.roleText}>{role.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Role;
