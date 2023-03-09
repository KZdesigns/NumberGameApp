import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      style={styles.RootBackground}
      colors={["#72063c", "#ddb52f"]}
      locations={[0.9, 0.2]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.RootBackground}
        imageStyle={styles.RootBackgroundImage}
      >
        <StartGameScreen />
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
