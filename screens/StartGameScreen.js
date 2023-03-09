import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.NumberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.InputButtonContainer}>
        <View style={styles.ButtonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.ButtonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  InputContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  NumberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  InputButtonContainer: {
    flexDirection: "row",
    margin: 16,
  },
  ButtonContainer: {
    flex: 1,
  },
});
