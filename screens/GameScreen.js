import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.GameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>High or Lower?</Text>
        <Text>+-</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  GameScreenContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
});
