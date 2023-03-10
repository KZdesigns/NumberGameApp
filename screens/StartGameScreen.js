import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function enteredNumberHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetNumberHandler() {
    setEnteredNumber("");
  }

  function confirmationInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "The entered value must be a number between 1-99 inclusive.",
        [
          {
            text: "Okay",
            onPress: resetNumberHandler,
            style: "destructive",
          },
        ]
      );
      return;
    }
    props.onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.NumberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={enteredNumberHandler}
      />
      <View style={styles.InputButtonContainer}>
        <View style={styles.ButtonContainer}>
          <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.ButtonContainer}>
          <PrimaryButton onPress={confirmationInputHandler}>
            Confirm
          </PrimaryButton>
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
    backgroundColor: Colors.primary,
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
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    color: Colors.secondary,
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
