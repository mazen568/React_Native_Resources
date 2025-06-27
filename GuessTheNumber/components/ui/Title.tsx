import { StyleSheet, Text } from "react-native";
import Colors from "../../util/colors"
type TitleProps = {
    children: React.ReactNode
}
function Title({ children }: TitleProps) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}
export default Title;
const styles = StyleSheet.create({
    title: {
        fontFamily:"open-sans-bold",
        fontSize: 24,
        textAlign: "center",
        color: "white",
        borderWidth: 2,
        borderColor: "white",
        padding: 18,

    }
})