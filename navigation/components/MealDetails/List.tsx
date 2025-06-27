import { StyleSheet, Text } from 'react-native'
import React from 'react'
type ListProps={
    data:string[]
}
export default function List({data}:ListProps) {
    return (
        <>
            {data.map(dataPoint => <Text key={dataPoint} style={styles.mapItem}>{dataPoint}</Text>)}
        </>
    )
}

const styles = StyleSheet.create({
    mapItem: {
        backgroundColor: "#e2b497",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: 300,
        textAlign: "center"
    },
})