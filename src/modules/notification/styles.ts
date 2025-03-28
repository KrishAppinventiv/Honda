import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { normalize, vh, vw } from "../../styles/dimensions";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: vw(16),
    },
    header: {
        marginBottom: vh(20),
        paddingVertical: vh(11)
    },
    imageWrapper: {
        width: vw(40),
        height: vh(40),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F7FF',
        overflow: 'hidden',
    },
    contentEmptyView: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: vh(10)
    },
    notificationBell: {
        width: vw(143),
        height: vw(143)
    },
    text1: {
        fontSize: normalize(20),
        fontWeight: 700,
        color: colors.lightBlack,
        textAlign: 'center'
    },
    text2: {
        fontSize: normalize(16),
        fontWeight: 400,
        color: '#7C8585',
        textAlign: 'center'
    },
    notificationItem: {
        backgroundColor: '#FFF6F7',
        padding: 12,
        marginBottom: vh(16),
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E41D2D33',
        columnGap: vw(10),
    },
    bellContainer: {
        width: vw(38),
        height: vw(38),
        borderRadius: 26.39,
        borderColor: '#F2F3F3',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        overflow: 'hidden',
    },
    bell: {
        width: vw(25.33),
        height: vw(25.33)
    },
    notificationHeader: {
        fontSize: normalize(16),
        fontWeight: 600,
        color: colors.lightBlack,
    },
    notificationDescription: {
        fontSize: normalize(12),
        color: '#8CA2B4',
        fontWeight: 400
    },
    notificationDate: {
        fontSize: normalize(12),
        color: '#7C8585',
        fontWeight: 400
    }
})

export default styles;