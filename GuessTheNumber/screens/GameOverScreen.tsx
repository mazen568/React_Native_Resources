import { StyleSheet, Image, View, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../util/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
type GameScreenProps={
    roundsNumber:number
    userNumber:number
    onRestartGame:()=>void
}
function GameOverScreen({roundsNumber,userNumber,onRestartGame}:GameScreenProps) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onRestartGame} style={{width:140}}>Start New Game</PrimaryButton>
        </View>
    )
}
export default GameOverScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderWidth: 4,
        borderRadius: 150,
        overflow: "hidden",
        margin: 36
    }, image: {
        width: "100%",
        height: "100%"
    },
    summaryText: {
        marginBottom:24,
        fontFamily: "open-sans",
        fontSize: 23,
        textAlign: "center"
    },
    highlight: {
     fontFamily:"open-sans-bold",
     color:Colors.primary500
    }
})