import { StyleSheet } from "react-native";
import Colors from "../../../../utils/colors";
import { vw, vh, normalize } from "../../../../styles";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(16),
        backgroundColor: Colors.white
    },
    header: {
        marginBottom: vw(20)
    },
    firstContainer: {
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
        borderColor: Colors.borderLight,
        borderWidth: 1,
        marginBottom: vh(24),
        elevation: 0,
        shadowColor: '',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
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
    text: {
        fontSize: normalize(16),
        fontWeight: 400,
        color: Colors.black
    },
    description: {
        fontSize: normalize(14),
        fontWeight: 400,
        color: Colors.lightGreyBlue,
    }
})

export default styles;