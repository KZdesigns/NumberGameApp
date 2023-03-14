import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/GameInstructionText";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/colors";
import GuessLogItem from "../components/ui/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, onChangeRound }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
    ``;
  }, []);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    onChangeRound((prevState) => {
      return prevState + 1;
    });
    setGuessRounds((prevState) => [newRndNumber, ...prevState]);
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View style={styles.InstructionTextContainer}>
          <InstructionText>Higher or lower?</InstructionText>
          <View style={styles.InputButtonContainer}>
            <View style={styles.ButtonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons name="md-remove" size={24} color={Colors.primary} />
              </PrimaryButton>
            </View>
            <View style={styles.ButtonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Ionicons name="add" size={24} color={Colors.primary} />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.LogContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem round={index} guess={item}></GuessLogItem>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  );

  if (width > height) {
    content = (
      <>
        <View style={styles.ButtonContainerWide}>
          <View style={styles.ButtonContainerWide}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={Colors.primary} />
            </PrimaryButton>
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <NumberContainer>{currentGuess}</NumberContainer>
          </View>

          <View style={styles.ButtonContainerWide}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color={Colors.primary} />
            </PrimaryButton>
          </View>
        </View>
        <View style={styles.LogContainerWide}>
          <FlatList
            data={guessRounds}
            renderItem={({ item, index }) => (
              <GuessLogItem round={index} guess={item}></GuessLogItem>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  InstructionTextContainer: {
    alignItems: "center",
  },
  InputButtonContainer: {
    flexDirection: "row",
    width: "100%",
  },
  ButtonContainer: {
    flex: 1,
    marginTop: 10,
  },
  ButtonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  LogContainer: {
    flex: 1,
    margin: 30,
    width: "100%",
  },
  LogContainerWide: {
    flex: 1,
    margin: 10,
    width: "80%",
  },
  LogTextContainer: {
    borderWidth: 3,
    borderRadius: 50,
    padding: 15,
    margin: 10,
    borderColor: Colors.primary,
    backgroundColor: Colors.secondary,
  },
  LogText: {
    fontFamily: "open-sans",
    fontSize: 16,
    color: Colors.primary,
    textAlign: "center",
  },
});
