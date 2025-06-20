import { FC, Dispatch, SetStateAction, useState } from "react";
import { View, TextInput, Text, StyleSheet, Image, Modal } from "react-native";
import Goal from "../Models/Goal";
import Buttons from "./Buttons";
const goalImage = require("../assets/Images/goal.png");
type Props = {
    handleGoalsList: Dispatch<SetStateAction<Goal[]>>
    handleShowModal: () => void
    showModal: boolean
}

const GoalInput: FC<Props> = ({ handleGoalsList, showModal, handleShowModal }) => {

    const [enteredGoal, setEnteredGoal] = useState<string>("");
    const [inputIsEmpty, setInputIsEmpty] = useState<string>("")
    const addGoalHandler = () => {
        const newGoal = new Goal(enteredGoal);
        if (enteredGoal.trim().length === 0) {
            setInputIsEmpty("the input can not be empty");
            return;
        }
        handleGoalsList((prevGoalsList) => [...prevGoalsList, newGoal]);

        setEnteredGoal("");
    };

    const goalInputHandler = (enteredText: string) => {
        setInputIsEmpty("");
        setEnteredGoal(enteredText);
    };
    return (
        <Modal visible={showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={goalImage} style={styles.image} />
                <View style={styles.textInputContainer}>
                    <TextInput
                        value={enteredGoal}
                        style={inputIsEmpty ? styles.textInputError : styles.textInput}
                        placeholder="Your course goal!"
                        onChangeText={goalInputHandler}
                    />
                    {inputIsEmpty && <Text style={{ color: "red" }}>{inputIsEmpty}</Text>}
                </View>
                <View style={styles.buttonsContainer}>

                    <Buttons
                        onPress={handleShowModal}
                        title="Cancel"
                        color="#f31282"
                    /> 
                    <Buttons
                        onPress={addGoalHandler}
                        title="Add Goal" 
                    />
                </View>

            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b",
    },
    textInputContainer: {
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 6,
        backgroundColor: "#e4d0ff",
        padding: 8,
        color: "#120438"

    },
    textInputError: {
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 6,
        backgroundColor: "#e4d0ff",
        padding: 8,
        color: "#120438"

    },
    button: {
        backgroundColor: "#5e0acc",
        padding: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: "white",

    },
    buttonsContainer: {
        flexDirection: "row",
        gap: 16,
        marginTop: 16,
    },
    image: {
        width: 100,
        height: 100,
        margin: 16,
    }
})
export default GoalInput;