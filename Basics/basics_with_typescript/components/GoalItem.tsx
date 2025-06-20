import { Dispatch, SetStateAction, FC } from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import Goal from "../Models/Goal";
type GoalItemProps = {
  goalText: string,
  handleGoalsList: Dispatch<SetStateAction<Goal[]>>,
  goalId: string
}
const GoalItem: FC<GoalItemProps> = ({ goalText, handleGoalsList, goalId }) => {
  const deleteGoalHandler = () => {
    handleGoalsList((prevGoalsList) => prevGoalsList.filter(goal => goal.id !== goalId))
  }
  return (
    <View style={styles.goalItem}>
      <Pressable 
        onPress={deleteGoalHandler} 
        android_ripple={{ color: "#dddddd" }}
        style={({pressed})=>pressed && {opacity:0.5,backgroundColor:"red",borderRadius:6}}
      >
        <Text style={styles.goalText}>{goalText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalText: {
    color: "white",
    padding: 8,
  }
  , goalItem: {
    margin: 10,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
})


export default GoalItem;