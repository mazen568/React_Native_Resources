import { View, Text, StyleSheet, Pressable, StyleProp, ViewStyle } from "react-native";
import Colors from "../../util/colors"
type PrimaryButtonProps = {
    children: React.ReactNode;
    onPress?:()=>void,
    style?:StyleProp<ViewStyle>
}
function PrimaryButton({ children,onPress,style }: PrimaryButtonProps) {
    return (
        <View style={styles.outerButtonContainer}>
            <Pressable
                style={({pressed})=>pressed?[styles.innerButtonContainer,style,styles.buttonPressed]:[styles.innerButtonContainer,style]}
                android_ripple={{ color: Colors.primary600 }}
                onPress={onPress}
            >
                <Text style={styles.textColor}>{children}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    outerButtonContainer:{
        margin: 6,
        borderRadius: 29,
        overflow: "hidden",
        elevation: 2,
    },
    textColor: {
        color: "white",
        textAlign: "center",
    },
    innerButtonContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        width:90,
    },
    buttonPressed: {
        opacity: 0.9,
        backgroundColor: "darkred",
    }
})
export default PrimaryButton;