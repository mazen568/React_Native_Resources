import { StyleSheet, View, Pressable, Text } from "react-native";
import { Dispatch, FC, SetStateAction } from "react";
import Goal from "../Models/Goal";
type Props = {
    onPress: () => void
    title: string
    color?: string
}
const Button: FC<Props> = ({ onPress = () => { }, title, color }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && { opacity: 0.9 }}>
            <View
                style={[styles.button, color ? { backgroundColor: color } : { backgroundColor: "#5e0acc" }]}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: "white",
        textAlign: "center",

    }
})

export default Button;
