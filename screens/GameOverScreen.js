import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen(props) {
  return (
    <View style={styles.RootContainer}>
      <Title>GAME IS OVER!</Title>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.SummaryText}>
        Your phone needed{" "}
        <Text style={styles.HighlightedText}>{props.roundNumber}</Text> rounds
        to guess the number{" "}
        <Text style={styles.HighlightedText}>{props.userNumnber}</Text>.
      </Text>
      <PrimaryButton onPress={props.onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ImageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: "hidden",
    marginTop: 12,
    marginBottom: 36,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  SummaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
    marginHorizontal: 24,
  },
  HighlightedText: {
    fontFamily: "open-sans-bold",
    color: Colors.secondary,
  },
});
