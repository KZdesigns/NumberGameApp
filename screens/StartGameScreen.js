import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/GameInstructionText";

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
    <ScrollView style={styles.Screen}>
      <KeyboardAvoidingView style={styles.Screen} behavior="position">
        <View style={styles.RootContainer}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText style={styles.InputText}>
              Enter a number between 1 and 100.
            </InstructionText>
            <TextInput
              style={styles.NumberInput}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={enteredNumberHandler}
            />
            <View style={styles.InputButtonContainer}>
              <View style={styles.ButtonContainer}>
                <PrimaryButton onPress={resetNumberHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.ButtonContainer}>
                <PrimaryButton onPress={confirmationInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
  RootContainer: {
    flex: 1,
    marginTop: 100,
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
