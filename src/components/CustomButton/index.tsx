import React, { useMemo } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../../theme';
import { vh, vw } from '../../utils/dimension';

interface ButtonProps {
  onPress: () => void;
  text: string;
  style?: ViewStyle | ViewStyle[];
  disabled?: boolean;
  textStyle?: TextStyle | TextStyle[];
  fullWidth?: boolean; // Full-width styling
}

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  text,
  style,
  disabled = false,
  textStyle,
  fullWidth,
}) => {
  // Use useMemo to optimize styles and avoid unnecessary re-renders
  const buttonStyles = useMemo(
    () => [styles.button, fullWidth && styles.fullWidth, disabled && styles.disabledButton, style].filter(Boolean) as ViewStyle[],
    [fullWidth, disabled, style]
  );

  const textStyles = useMemo(
    () => [styles.buttonText, textStyle].filter(Boolean) as TextStyle[],
    [textStyle]
  );

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7} // Prevent click animation when disabled
    >
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.main,
    paddingVertical: vh(16),
    paddingHorizontal: vw(20),
    borderRadius: vh(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '90%',
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: colors.grey,
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: vw(16),
    fontWeight: '600',
  },
});

export default CustomButton;
