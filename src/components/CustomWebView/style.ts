import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { normalize } from "../../styles/dimensions";

const styles = StyleSheet.create({
    text1: {
        fontSize: normalize(18),
        fontWeight: 600,
        color: colors.black,
        textAlign: 'center'
    },
    centeredContainer: {
        flex: 1,
    },
})

export default styles;