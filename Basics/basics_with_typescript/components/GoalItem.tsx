import { Dispatch,SetStateAction,FC } from "react";
import { Text,Pressable, View,StyleSheet } from "react-native";
import Goal from "../Models/goal";
type GoalItemProps = {
  goalText: string,
  handleGoalsList:Dispatch<SetStateAction<Goal[]>>,
  goalId:string
}
const GoalItem: FC<GoalItemProps> = ({ goalText,handleGoalsList,goalId }) => {
  const deleteGoalHandler=()=> {
       handleGoalsList((prevGoalsList)=>prevGoalsList.filter(goal=>goal.id!==goalId)) 
  }
  return (
  <Pressable onPress={deleteGoalHandler}>
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goalText}</Text>
    </View>
  </Pressable>
  );
}

const styles= StyleSheet.create({
  goalText: {
    color: "white"
  }
  , goalItem: {
    margin: 10,
    backgroundColor: "#5e0acc",
    padding: 8,
    borderRadius: 6,
  },
})


export default GoalItem;