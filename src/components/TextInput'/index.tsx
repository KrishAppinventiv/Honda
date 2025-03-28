
// import React, { forwardRef } from 'react';
// import { TextInput, StyleSheet,TextInputProps } from 'react-native';


// interface InputFieldProps extends TextInputProps {
//   style?: object;
// }

// const InputField = forwardRef<TextInput, InputFieldProps>((props, ref) => {
//   const { value, placeholder, onChangeText, style, onSubmitEditing, secureTextEntry, returnKeyType } = props;
  
//   return (
//     <TextInput
//       ref={ref}
//       style={[styles.input, style]}
//       placeholder={placeholder}
//       value={value}
//       onChangeText={onChangeText}
//       onSubmitEditing={onSubmitEditing}
//       secureTextEntry={secureTextEntry}
//       returnKeyType={returnKeyType}
//     />
//   );
// });

// const styles = StyleSheet.create({
//   input: {
//     padding: 10,
//   },
// });

// export default InputField;  


import React, { forwardRef } from 'react';
import { TextInput, StyleSheet, TextInputProps, TouchableOpacity, Image, View, ImageSourcePropType, ViewStyle, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import colors from '../../utils/colors';
import { normalize, vh, vw } from '../../styles';

interface InputFieldProps extends TextInputProps {
  style?: object;
  rightIcon?: ImageSourcePropType;
  onRightIconPress?: () => void;
  editable?: boolean;
  inputStyle?: ViewStyle
  onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  multiline?: boolean;
}

const InputField = forwardRef<TextInput, InputFieldProps>((props, ref) => {
  const { value, placeholder, onChangeText, style, onSubmitEditing, secureTextEntry, returnKeyType, rightIcon, onRightIconPress, editable, onFocus, onBlur, inputStyle, multiline} = props;

  return (
    <View style={[styles.container, style]}>
      <TextInput
        ref={ref}
        style={[styles.input,inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        editable={editable}
        onFocus={onFocus}
        onBlur={onBlur}
        multiline={multiline}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <Image source={rightIcon} style={styles.image} resizeMode='contain' />
        </TouchableOpacity>
      )}
    </View>

  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: vw(1),
    borderColor: colors.borderSecond,
    paddingVertical: vh(8),
    paddingHorizontal: vw(16),
  },
  input: {
    flex: 1,
    fontSize: normalize(16),
    color: colors.lightGreyBlue,
    fontWeight: 500,
    borderRadius: 16,
  },
  image: {
    width: vw(12),
    height: vw(7)
  }
});

export default InputField;  
