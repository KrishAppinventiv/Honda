import { View, Text, Image } from 'react-native'
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style'
import CustomStatus from '../../../../components/CustomStatus';
import { Switch } from 'react-native-switch';
import CustomButton from '../../../../components/CustomButton';
import Colors from '../../../../utils/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Images } from '../../../../assets';
import CustomHeader from '../../../../components/customHeader';

type RootStackParamList = {
    Notifications: undefined;
}

type NotificationScreenProps = NativeStackScreenProps<RootStackParamList, 'Notifications'>;

const Notifications = ({ navigation }:NotificationScreenProps) => {
    const insets = useSafeAreaInsets();
    const [isEnabled, setIsEnabled] = useState(false);
    const backPress = () => {
        navigation.goBack()
    }
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <CustomStatus />
            <CustomHeader
            headerStyle={styles.header}
            leftIcon={Images.backarrow}
            textHeading="Notifications"
            leftButtonStyle={styles.backButton}
            onleftPress={navigation.goBack}
            leftIconStyle={styles.backButton}
            />
            <View style={styles.mainContainer}>
                <View style={styles.mainContainer1}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Push Notifications</Text>
                        <Text style={styles.text2}>Toggle On/Off Push Notifications</Text>
                    </View>
                    <Switch
                        value={isEnabled}
                        onValueChange={(val) => setIsEnabled(val)}
                        disabled={false}
                        renderActiveText={false}
                        renderInActiveText={false}
                        backgroundActive={'#20B233'}
                        backgroundInactive={'#D4DAEA'}
                        circleInActiveColor={Colors.white}
                        circleActiveColor={Colors.white}
                        renderInsideCircle={() => (
                            isEnabled ? <Image source={Images.tickIcon} style={styles.icon}/> : <Image source={Images.crossIcon} style={styles.icon}/>
                        )}
                        circleBorderWidth={4}
                        circleBorderInactiveColor={'#D4DAEA'}
                        circleBorderActiveColor={'#20B233'}
                        switchWidthMultiplier={2}
                    />
                </View>
                <View>
                    <CustomButton
                        buttonText ={'UPDATE'}
                        onPress={() => { }}
                        isButtonDisabled={!isEnabled}
                        style={styles.buttonContainer}
                        textStyle={styles.text}
                        disabledButtonStyle={styles.buttonDisabled}
                        disabledButtonTextStyle={styles.textDisabled}
                    />
                </View>
            </View>
        </View>
    )
}

export default Notifications