import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title(props) {
  return <Text style={styles.Title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary,
    // borderWidth: 2,
    // borderColor: Colors.primary,
    padding: 12,
    width: "100%",
  },
});
