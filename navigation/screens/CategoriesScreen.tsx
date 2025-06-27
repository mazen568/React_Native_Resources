import { View,FlatList, StyleSheet, } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryItem from '../components/CategoryItem'
import { RootStackParamList } from '../navigation/type'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type NativeProps= NativeStackScreenProps<RootStackParamList,"Categories">

const CategoriesScreen = ({navigation}:NativeProps) => {
  function pressHandler(id:string,title:string){
    navigation.navigate("Meals",{
      categoryId:id,
      categoryTitle:title
    })
  }
  return (
    <View style={styles.rootContainer}>
      <FlatList data={CATEGORIES} 
      renderItem={({item})=><CategoryItem onPress={()=>pressHandler(item.id,item.title)}  id={item.id} color={item.color}>{item.title}</CategoryItem>}
      numColumns={2}
      keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default CategoriesScreen
const styles=StyleSheet.create({
    rootContainer:{   
          alignItems:"center"
    },

})