import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton(props) {
  return (
    <View style={styles.OutterButtonContainer}>
      <View style={styles.InnerButtonContainer}>
        <Pressable
          style={({ pressed }) => pressed && styles.ButtonPressed}
          onPress={props.onPress}
        >
          <Text style={styles.ButtonText}>{props.children}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  OutterButtonContainer: {
    borderRadius: 28,
    margin: 5,
    overflow: "hidden",
  },
  InnerButtonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  ButtonText: {
    color: "#72063c",
    textAlign: "center",
  },
  ButtonPressed: {
    opacity: "0.5",
  },
});
