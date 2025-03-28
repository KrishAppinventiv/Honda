import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from './style';

LocaleConfig.locales['custom'] = {
    monthNames: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    today: "Today"
};
LocaleConfig.defaultLocale = 'custom';

interface DatePickerProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: (date: string) => void;
    selectedDate?: string;
}

const CalendarModal: React.FC<DatePickerProps> = ({ visible, onClose, onConfirm, selectedDate }) => {
    const [currentDate, setCurrentDate] = useState(selectedDate || '');
    const [currentMonth, setCurrentMonth] = useState(new Date());

    useEffect(() => {
        if (selectedDate) {
            setCurrentDate(selectedDate);
            setCurrentMonth(new Date(selectedDate));
        }
    }, [selectedDate]);

    const handleDayPress = (day: { dateString: string }) => {
        setCurrentDate(day.dateString);
    };

    const handleMonthChange = (month: { year: number; month: number }) => {
        const newMonth = new Date(month.year, month.month - 1);
        setCurrentMonth(newMonth);
    };

    return (
        <Modal visible={visible} transparent animationType="fade">
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.dateText}>
                                {currentDate
                                    ? new Date(currentDate).toLocaleDateString('en-US', {
                                        weekday: 'short',
                                        month: 'short',
                                        day: 'numeric'
                                    })
                                    : 'Select a Date'}
                            </Text>

                            <Calendar
                                current={currentMonth.toISOString().split('T')[0]}
                                onDayPress={handleDayPress}
                                onMonthChange={(month) => setCurrentMonth(new Date(month.dateString))}
                                markedDates={currentDate ? { [currentDate]: { selected: true, selectedColor: 'red' } } : {}}
                                theme={{
                                    todayTextColor: 'red',
                                    selectedDayBackgroundColor: 'red',
                                    arrowColor: 'black',
                                    textDayFontSize: 16,
                                    textMonthFontSize: 16,
                                    textDayHeaderFontSize: 14,
                                }}
                                renderHeader={(date) => {
                                    const formattedMonth = currentMonth.toLocaleString('en-US', {
                                        month: 'long',
                                        year: 'numeric',
                                    });
                                    return (
                                        <View style={styles.header}>
                                            <Text style={styles.monthText}>{formattedMonth}</Text>
                                            <View style={styles.arrow}>
                                                <TouchableOpacity onPress={() => handleMonthChange({
                                                    year: currentMonth.getFullYear(),
                                                    month: currentMonth.getMonth()
                                                })} style={{ marginHorizontal: 10 }}>
                                                    <Text style={styles.navText}>‹</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => handleMonthChange({
                                                    year: currentMonth.getFullYear(),
                                                    month: currentMonth.getMonth() + 2
                                                })}>
                                                    <Text style={styles.navText}>›</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    );
                                }}
                                hideArrows={true}
                                hideExtraDays={true}
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => onConfirm(currentDate)} style={styles.okButton}>
                                    <Text style={styles.buttonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default CalendarModal;