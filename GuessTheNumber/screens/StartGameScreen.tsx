import { View,TextInput ,StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton"
function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
              style={styles.numberInput} 
              maxLength={2} 
              keyboardType="number-pad"/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}
const styles = StyleSheet.create({
     inputContainer:{
        backgroundColor: "#72063c",
        padding: 16,
        marginTop:100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        alignItems: "center",
     },
     numberInput:{
        color: "#ddb52f",
        fontSize: 32,
        height:54,
        borderBottomColor: "#ddb52f",
        borderBottomWidth:2,
        width:50,
        textAlign: "center",
        marginVertical: 8,
        fontWeight: "bold",
       
     }
})
export default StartGameScreen;