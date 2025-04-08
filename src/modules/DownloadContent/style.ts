import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { normalize, vh, vw } from "../../styles/dimensions";
import { FONTS } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: vw(16)
    },
    imageWrapper: {
        width: vw(40),
        height: vw(40),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F7FF',
        overflow: 'hidden',
    },
    header: {
        marginBottom: vh(12),
    },
    backButton: {
        width:vw(40),
        height:vw(40),
        resizeMode:'contain'
       },
    firstContainer: {
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 12,
        borderColor: '#D4DAEA',
        borderWidth: 1,
        marginBottom: vh(16),
        elevation: 0,
        shadowColor: '',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
    },
    image: { width: vw(99), height: vw(24) },
    image1: {
        width: vw(43),
        height: vw(30),
    },
    flatListInside: { flexDirection: 'row', alignItems: 'center', columnGap: 12 },
    containerInside: {
        paddingVertical: 8,
        paddingHorizontal: 0,
        elevation: 0,
        shadowColor: '',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        marginBottom: 0
    },
    imageContainer: {
        width: vw(44),
        height: vw(44),
        backgroundColor: '#F3F6FA',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageInside: {
        width: vw(40),
        height: vw(40)
    },
    titleInside: {
        fontSize: normalize(14),
        fontFamily:FONTS.ROBOTO_REGULAR,
        fontWeight:'500',
        color: colors.lightBlack
    }
})

export default styles;