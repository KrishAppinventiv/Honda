import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { vw, normalize, vh } from "../../styles";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.modalBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: vw(320),
  },
  dateText: {
    color: Colors.dateTextColor,
    fontWeight: 400,
    fontSize: normalize(26),
    textAlign: 'left',
    paddingLeft: vw(24),
    paddingTop: vh(16),
    paddingRight: vw(12),
    paddingBottom: vh(12)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vh(10),
    borderTopWidth: 1,
    borderColor: '#CAC4D0',
    width: '100%'
  },
  monthText: {
    fontSize: normalize(16),
    fontWeight: 500,
    color: Colors.monthTextColor,
  },
  navText: {
    fontSize: normalize(24),
  },
  arrow: {
    flexDirection: 'row',
    columnGap: vw(20),
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: vh(18)
    // marginTop: 10,
  },
  cancelButton: {
    paddingHorizontal: vw(12),
    paddingTop: vh(8)
  },
  buttonText: {
    color: Colors.primary,
    fontSize: normalize(15),
    fontWeight: 500,
  },
  okButton: {
    paddingHorizontal: vw(12),
    paddingTop: vh(8)
  },
});

export default styles;