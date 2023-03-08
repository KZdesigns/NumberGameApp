import { View, Text, StyleSheet } from "react-native";

function PrimaryButton(props) {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  Button: {
    color: "blue",
  },
});
