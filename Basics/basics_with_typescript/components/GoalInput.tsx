import { FC, Dispatch, SetStateAction, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Goal from "../Models/goal";
type Props = {
    handleGoalsList: Dispatch<SetStateAction<Goal[]>>
}

const GoalInput: FC<Props> = ({ handleGoalsList }) => {

    const [enteredGoal, setEnteredGoal] = useState<string>("");
    const addGoalHandler = () => {
        const newGoal = new Goal(enteredGoal);
        handleGoalsList((prevGoalsList) => [...prevGoalsList, newGoal]);
        setEnteredGoal("");
    };
   
    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={enteredGoal}
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHandler}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        marginBottom: 24,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius:6,
        width: "60%",
        padding: 8,
        marginRight: 8,
    },
})
export default GoalInput;