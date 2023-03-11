import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GameInstructionText(props) {
  return <Text style={styles.InputText}>{props.children}</Text>;
}

export default GameInstructionText;

const styles = StyleSheet.create({
  InputText: {
    fontFamily: "open-sans",
    color: Colors.secondary,
    fontSize: 18,
  },
});
