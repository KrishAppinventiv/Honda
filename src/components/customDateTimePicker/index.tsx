import {format} from 'date-fns';
import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';
import colors from '../../utils/colors';

interface CustomDateTimePickerProps {
  label: string;
  rightIcon: ImageSourcePropType;
  rightIconStyle?: object;
  //   calendarIcon: ImageSourcePropType;
  onDateChange: (date: Date | string) => void;
  mode: 'date' | 'time' | 'datetime';
  containerStyle: object;
}

const CustomDateTimePicker = ({
  label,
  rightIcon,
  rightIconStyle,
  onDateChange,
  mode,
  containerStyle,
}: CustomDateTimePickerProps) => {
  const [dob, setDob] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date: Date) => {
    let formattedDate;
    if (mode === 'time') {
      formattedDate = format(date, 'h:mm a');
    } else if (mode === 'date') {
      formattedDate = format(date, 'dd/MM/yyyy');
    } else {
      formattedDate = format(date, 'dd/MM/yyyy h:mm a');
    }
    setDob(formattedDate);
    onDateChange(date);
    hideDatePicker();
  };

  return (
    <>
      <TouchableOpacity onPress={showDatePicker} style={containerStyle}>
        <TextInput
          style={styles.phoneInput}
          placeholder={label}
          value={dob}
          onPress={showDatePicker}
          placeholderTextColor={colors.placeHolderText}
          editable={false}
        />
        {rightIcon && (
          <Image
            source={rightIcon}
            style={[styles.rightIcon, rightIconStyle]}
          />
        )}
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default CustomDateTimePicker;
