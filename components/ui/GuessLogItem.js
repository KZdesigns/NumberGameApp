import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem(props) {
  return (
    <View style={styles.LogTextContainer}>
      <Text style={styles.LogText}>
        Your opponent's last guess was {props.guess}!
      </Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  LogTextContainer: {
    borderWidth: 3,
    borderRadius: 50,
    padding: 12,
    margin: 10,
    borderColor: Colors.primary,
    backgroundColor: Colors.secondary,
  },
  LogText: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: Colors.primary,
    textAlign: "center",
  },
});
