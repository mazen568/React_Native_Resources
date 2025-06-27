import { StyleSheet, Text, Pressable, View, Image, Platform } from 'react-native'
import Meal from '../models/meal'
import MealDetails from './MealDetails'

type MealItemProps = {
    meal: Meal
    onPress: () => void
}
const MealItem = ({ meal, onPress }: MealItemProps) => {
    const details = {
        duration: meal.duration,
        complexity: meal.complexity,
        affordability: meal.affordability
    }
    return (
        <View style={styles.itemContainer}>
            <Pressable
                android_ripple={{ color: "#ccc", foreground: true }}
                style={({ pressed }) => pressed && Platform.OS === "ios" && styles.buttonPressed}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <View >
                        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
                        <Text style={styles.text}>{meal.title}</Text>
                    </View>
                    <MealDetails details={details}/>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    itemContainer: {
        borderColor: "#ccc",
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        margin: 16,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    image: {
        width: "100%",
        height: 200
    },
    text: {
        textAlign: "center",
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 16
    },
    
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        color: "#ccc",
        opacity: 0.35
    }

})