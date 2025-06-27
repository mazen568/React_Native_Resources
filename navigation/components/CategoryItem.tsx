import { StyleSheet, Text, View, Pressable, Platform } from 'react-native'
import React from 'react'
type CategoryItemProps = {
    children: React.ReactNode
    color: string
    id:string
    onPress:()=>void
}
export default function CategoryItem({ children, color,id,onPress}: CategoryItemProps) {
  
    return (
        <View style={[styles.categoryOuterContainer, { backgroundColor: color }]}>
            <Pressable 
              android_ripple={{color:"white"}}  
              style={({pressed})=>[styles.categoryInnerContainer
              ,pressed && (styles.pressed)]}
              onPress={onPress}
              >
                <Text style={styles.title}>{children}</Text>
            </Pressable>
        </View>

    )
}
const styles = StyleSheet.create({
    categoryOuterContainer: {
        width: 150,
        height: 150,
        margin: 16,
        borderRadius: 12,
        shadowColor:"black",
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        overflow:Platform.OS==="android"?"hidden":"visible"
    },
    categoryInnerContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 12,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18 
    },
    pressed:{
        backgroundColor:"white",
        opacity:0.3,
    }
})