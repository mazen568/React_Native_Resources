import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setGoals(prevGoals=>[...prevGoals,enteredGoal])    
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="add your goals"
          onChangeText={goalInputHandler}
        />
        <Button title="click" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.length>0?goals.map((goal,index)=>(<Text key={index}>{goal}</Text>)):<Text>no goals added yet</Text>}
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
