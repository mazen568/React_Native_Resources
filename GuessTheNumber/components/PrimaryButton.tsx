import { View,Text, StyleSheet} from "react-native";
type PrimaryButtonProps={
    children:React.ReactNode;
}
function PrimaryButton({children}:PrimaryButtonProps) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    textColor:{
        color:"white"
    }
})
export default PrimaryButton;