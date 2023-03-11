//import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameIsOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameIsOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <View style={styles.RootBackground} onLayout={onLayoutRootView}>
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
    </View>
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
