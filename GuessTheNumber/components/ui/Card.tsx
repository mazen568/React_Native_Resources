import { StyleSheet, View} from "react-native";
import Colors from "../../util/colors";
type CardProps={
    children:React.ReactNode
}
function Card({children}:CardProps) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}
export default Card;
const styles=StyleSheet.create({
    inputContainer: {
        backgroundColor: Colors.primary800,
        width:340,
        padding: 16,
        marginTop: 36,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        alignItems: "center",
        justifyContent:"center"
      },
})


