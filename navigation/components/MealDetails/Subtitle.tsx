import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type SubtitleProps={
    children:React.ReactNode
}
export default function Subtitle({children}:SubtitleProps) {
    return (
        <View style={styles.mapTitleContainer}>
            <Text style={styles.mapTitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mapTitle: {
        color: "#e2b497",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 18,
        padding: 10
    },
    mapTitleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: "#e2b497",
        width: 300
    },
})