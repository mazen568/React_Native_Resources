import {
  StyleSheet,
  View,
  FlatList,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Goal from "./Models/Goal";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Buttons from "./components/Buttons"
export default function App() {
  const [goalsList, setGoalsList] = useState<Goal[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  function handleModal() {
    setOpenModal((prevState) => !prevState);
  }
  return (
    <> 
      <StatusBar style="light"/>
      <View style={styles.container}>
        <GoalInput
          showModal={openModal}
          handleGoalsList={setGoalsList}
          handleShowModal={handleModal}
        />
        <Buttons onPress={handleModal} title="Add New Goal" />
        <View style={styles.goalsContainer}>
          {goalsList.length > 0 ? <FlatList
            data={goalsList}
            renderItem={(itemData) =>
              <GoalItem
                goalText={itemData.item.value}
                handleGoalsList={setGoalsList}
                goalId={itemData.item.id}
              />}
            keyExtractor={(item) => item.id}
          /> : <Text style={{ textAlign: "center", marginTop: 16, color: "white" }}>No Goals added yet!</Text>}
        </View>
      </View>
      </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,

  },
  goalsContainer: {
    flex: 5,
  },
});
