import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Image,
} from 'react-native';

import {StyleSheet} from 'react-native';

import { Images } from '../../assets';
import { normalize, vh, vw } from '../../styles';
import colors from '../../utils/colors';


interface CustomSearchBarProps extends TextInputProps {
  placeholder?: string;
  onSearchPress?: () => void;
  onTouchablePress?: () => void;
  searchContainerStyle?: object;
}

const CustomSearch: React.FC<CustomSearchBarProps> = ({
  placeholder,
  onSearchPress,
  searchContainerStyle,
  onTouchablePress,
}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.searchContainer, searchContainerStyle]} onPress={onTouchablePress}>
      
        <Image source={Images.search} style={styles.searchIcon} />
      
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        selectionColor={colors.inActiveTab}
        placeholderTextColor={colors.inActiveTab}
      />
      </TouchableOpacity>
    </View>
  );
};




const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D4DAEA',
    borderRadius: 16,
    paddingHorizontal: vw(16),
    marginHorizontal: vw(16),
    marginTop: vh(20),
    backgroundColor: '#F3F6FA',
  },
  searchIcon: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
  },
  searchInput: {
    flex: 1,
    height: vh(56),
    borderRadius: 16,
    paddingLeft: vw(10),
    fontSize: normalize(16),
    color: colors.black,
  },
});
export default CustomSearch;