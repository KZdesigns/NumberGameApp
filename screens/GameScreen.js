import { Text, View, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={styles.GameScreenContainer}>
      <Text>Opponent's Guess</Text>
      <Text>GUESS</Text>
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
    paddingTop: 50,
    alignItems: "center",
  },
});
