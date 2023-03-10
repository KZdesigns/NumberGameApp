import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen enteredNumber={userNumber} />;
  }

  return (
    <LinearGradient
      style={styles.RootBackground}
      colors={[Colors.primary, Colors.secondary]}
      locations={[0.9, 0.2]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.RootBackground}
        imageStyle={styles.RootBackgroundImage}
      >
        {/* <SafeAreaView styles={styles.RootBackground}>{screen}</SafeAreaView> */}
        <SafeAreaView style={styles.RootBackground}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  RootBackground: {
    flex: 1,
  },
  RootBackgroundImage: {
    opacity: 0.15,
  },
});
