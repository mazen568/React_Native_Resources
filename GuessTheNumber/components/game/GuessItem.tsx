import { StyleSheet, Text, View } from "react-native"
import Colors from "../../util/colors"
type GuessItemProps = {
    children: React.ReactNode
    round: number
}
function GuessItem({ children, round }: GuessItemProps) {
    return (
        <View style={styles.itemContainer}>
            <Text>Opponent's Guess: {children}</Text>
            <Text>Round #{round}</Text>    
        </View>
    )
}
export default GuessItem
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection:"row",
        borderColor: Colors.primary800,
        borderWidth: 1,
        padding: 12,
        borderRadius:32,
        justifyContent:"space-between",
        marginVertical:10,
        backgroundColor:Colors.accent500,
        width:"100%"
    }
})