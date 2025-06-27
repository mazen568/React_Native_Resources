import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './util/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [roundsNumber,setRoundsNumber]=useState<number>(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameOver(false)
  }
  function gameOverHandler(roundsNumber:number) {
    setGameOver(true)
    setRoundsNumber(roundsNumber)
  }

 
  function restartGameHandler(){
    setGameOver(false)
    setUserNumber(null)
    setRoundsNumber(0)
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {gameOver && userNumber ? <GameOverScreen onRestartGame={restartGameHandler} roundsNumber={roundsNumber} userNumber={userNumber}/> :
            userNumber ? <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
              : <StartGameScreen onPickNumber={pickedNumberHandler} />}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
