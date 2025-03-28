import React, {useRef, useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ViewStyle,
} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
import {Images} from '../../assets';
import styles from './styles';
interface FilterBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  showCheckbox?: boolean;
  applyFilter : () => void;
  onClearAll: () => void;
  children?: React.ReactNode;
  priceRange?: number[];
  selectedCategories?: string[];
  style?: ViewStyle;
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
  visible,
  onClose,
  showCheckbox = true,
  applyFilter,
  onClearAll,
  children,
  priceRange,
  selectedCategories,
  style,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        runOnJS(onClose)();
      }
    },
    [onClose],
  );

 

  if (!visible) return null;

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'android' ? 50 : 0}
        style={{flex: 1}}>
        {visible && (
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Image source={Images.close} style={styles.close} />
          </TouchableOpacity>
        )}
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
          enableContentPanningGesture={true}>
          <BottomSheetView style={[styles.content]}>
           

            <ScrollView
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.header}>
                <Text style={styles.title}>Filter</Text>
                <TouchableOpacity onPress={onClearAll}>
                  <Text style={styles.clearText}>Clear all</Text>
                </TouchableOpacity>
              </View>

              {children}
            </ScrollView>
          </BottomSheetView>
        </BottomSheet>
      </KeyboardAvoidingView>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
          <Text style={styles.applyText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default FilterBottomSheet;
