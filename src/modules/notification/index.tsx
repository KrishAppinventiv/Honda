import { View, Text, TouchableOpacity, Image, FlatList, ImageSourcePropType, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomStatus from '../../components/CustomStatus';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import moment from 'moment';
import CustomCalendar from '../../components/CustomCalendar';
import styles from './styles';
import { Images } from '../../assets';
import CustomHeader from '../../components/customHeader';
import { notificationsData } from '../../staticData';

type RootStackParamList = {
    Notification: undefined;
    AnotherScreen: undefined;
};

type NotificationScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Notification'>;
    route: RouteProp<RootStackParamList, 'Notification'>;
};

const Notification = ({ navigation } : NotificationScreenProps) => {
    const insets = useSafeAreaInsets();
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

    const showCalendar = () => setCalendarVisible(true);
    const hideCalendar = () => setCalendarVisible(false);

    const handleConfirm = (date: string) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        setSelectedDate(formattedDate);
        hideCalendar();
    };

    const notifications = notificationsData[selectedDate] || [];
    const formattedDate = moment(selectedDate).format('MMMM DD, YYYY');

    const backPress = () => {
        navigation.goBack()
    }

    return (
        <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
            <CustomStatus />
            <CustomHeader
                textHeading='Notifications'
                onleftPress={backPress}
                leftIcon={Images.backarrow}
                leftButtonStyle={styles.imageWrapper}
                headerStyle={styles.header}
                rightIcon={Images.calanderIcon}
                onRightPress={showCalendar}
                rightButtonStyle={styles.imageWrapper}
            />
            {notifications.length > 0 ? (
                <View style={{ paddingBottom: 35 }}>
                    <FlatList
                        data={notifications}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.notificationItem}>
                                <View style={styles.bellContainer}>
                                    <Image source={item.image} style={styles.bell} resizeMode='contain' />
                                </View>
                                <View style={{ flex: 1, rowGap: 6 }}>
                                    <Text style={styles.notificationHeader}>{item.header}</Text>
                                    <Text style={styles.notificationDescription}>{item.description}</Text>
                                    <Text style={styles.notificationDate}>{formattedDate}</Text>
                                </View>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            ) : (
                <View style={styles.contentEmptyView}>
                    <Image source={Images.notificationHome} style={styles.notificationBell} />
                    <Text style={styles.text1}>You're up to date!</Text>
                    <View>
                        <Text style={styles.text2}>There are no new notifications at this</Text>
                        <Text style={styles.text2}>time. Check again soon, and keep up</Text>
                        <Text style={styles.text2}>the great work!</Text>
                    </View>

                </View>
            )}
            <CustomCalendar
                visible={isCalendarVisible}
                onClose={hideCalendar}
                onConfirm={handleConfirm}
                selectedDate={selectedDate}
            />
        </View>
    )
}

export default Notification;