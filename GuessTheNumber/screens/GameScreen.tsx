import { View, StyleSheet, Alert,Text,FlatList} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useState, useEffect,useMemo } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons"
import GuessItem from "../components/game/GuessItem";
function generateRandomBetween(min: number, max: number, exclude: number): number {
   const rndNum = Math.floor(Math.random() * (max - min)) + min;

   if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
   } else {
      return rndNum;
   }
}

type UserNumberProps = {
   userNumber: number
   onGameOver: (roundsNumber:number) => void
}
let minBoundary = 1
let maxBoundary = 100
function GameScreen({ userNumber, onGameOver }: UserNumberProps) {
   const intialGuess: number = generateRandomBetween(1, 100, userNumber)
   const [currentGuess, setCurrentGuess] = useState<number>(intialGuess)
   const [guesses,setGuesses]=useState<number[]>([intialGuess])
   useEffect(() => {
      if (currentGuess === userNumber) {
         onGameOver(guesses.length);
      }
   }, [currentGuess,userNumber,onGameOver])

   useEffect(() => {
      minBoundary=1
      maxBoundary=100
   }, [])

   function nextGuessHandler(direction: string) {
      if (
         (direction === "greater" && userNumber < currentGuess) ||
         (direction === "lower" && userNumber > currentGuess)
      ) {
         Alert.alert("Don't lie!", "You know that this is wrong...", [
            { text: "Sorry!", style: "cancel" }
         ])
         return;
      }
      if (direction === "lower") {
         maxBoundary = currentGuess
      }
      else {
         minBoundary = currentGuess+1
      }
      const newNumber: number = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
      setCurrentGuess(newNumber)
      setGuesses(prevGuesses=>[newNumber,...prevGuesses])

   }



   return (
      <View style={styles.screen}>
         <Title>Opponent's Guess</Title>
         <NumberContainer>{currentGuess}</NumberContainer>
         <Card >
            <InstructionText style={{marginBottom:20}}>Higher or Lower</InstructionText>
            <View style={styles.buttonsContainer}>
               <PrimaryButton onPress={() => nextGuessHandler("lower")}> <Ionicons name="remove" size={24} color="white"/></PrimaryButton>
               <PrimaryButton onPress={() => nextGuessHandler("greater")}><Ionicons name="add-sharp" size={28} color="white"/></PrimaryButton>
            </View>
         </Card>  
         <View style={styles.listContainer}>
           <FlatList 
             data={guesses}
             renderItem={({item,index})=><GuessItem round={guesses.length-index }>{item}</GuessItem>}
             keyExtractor={(item)=>item.toString()}                    
             />
         </View>
      </View>
   )
}
export default GameScreen;
const styles = StyleSheet.create({
   screen: {
      padding: 24,
      marginTop: 20,
      flex: 1
   },
   buttonsContainer: {
      flexDirection: "row"
   },
   listContainer:{
      flex: 1,
      padding: 16
   },
  
})