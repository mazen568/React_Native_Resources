import { View, TextInput, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from "react";
import Colors from "../util/colors"
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
type StartGameScreenProps = {
  onPickNumber?: (pickedNumber: number) => void
}
function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState<string>("")

  function numberInputHandler(enteredValue: string) {
    setEnteredNumber(enteredValue);
  }
  function numberConfirmHandler() {
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]);
      return;
    }
    onPickNumber?.(chosenNumber)
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  return (
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
      <Card >
        <InstructionText >Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={numberConfirmHandler}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>

  )
}
const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems:"center"
  },
  
  
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    color: Colors.accent500,
    fontSize: 32,
    height: 54,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    width: 50,
    textAlign: "center",
    marginVertical: 8,
    fontWeight: "bold",

  }
})
export default StartGameScreen;