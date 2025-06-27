import { StyleProp, StyleSheet, Text, View, TextStyle } from 'react-native'
import React from 'react'

type MealDetailsProps={
    details:{
        duration:number
        complexity:string
        affordability:string
    }
    textColor?:StyleProp<TextStyle>
}

export default function MealDetails({details,textColor}:MealDetailsProps) {
    return (
        <View style={styles.details} >
            <Text style={[styles.detailsText,textColor]}>{details.duration}m</Text>
            <Text style={[styles.detailsText,textColor]}>{details.complexity}</Text>
            <Text style={[styles.detailsText,textColor]}>{details.affordability}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 14,
        marginHorizontal: 18,

    },
    detailsText: {
        fontSize: 14,
        fontWeight: "500",
    },
})