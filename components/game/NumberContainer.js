import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer(props) {
  return (
    <View style={styles.Container}>
      <Text style={styles.NumberText}>{props.children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "cetner",
    borderWidth: 4,
    borderColor: Colors.primary,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    width: "80%",
  },
  NumberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
