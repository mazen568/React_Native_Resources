import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import Goal from "./Models/goal";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [goalsList, setGoalsList] = useState<Goal[]>([]);

  return (
    <View style={styles.container}>
      <GoalInput handleGoalsList={setGoalsList} />
      <View style={styles.goalsContainer}>
        <FlatList 
        data={goalsList} 
        renderItem={(itemData)=>
        <GoalItem 
          goalText={itemData.item.value}
          handleGoalsList={setGoalsList}
          goalId={itemData.item.id} 
        />}
        keyExtractor={(item)=>item.id}
        />
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
  goalsContainer: {
    flex: 5,
  },
});
