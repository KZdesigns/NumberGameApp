import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card(props) {
  return <View style={styles.InputContainer}>{props.children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  InputContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 34,
    marginHorizontal: 24,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
