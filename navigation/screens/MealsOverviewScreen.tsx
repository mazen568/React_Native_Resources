import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/type'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useLayoutEffect,useEffect } from 'react'
import Meal from '../models/meal'
type NativeProps=NativeStackScreenProps<RootStackParamList,"Meals">
export default function MealsOverviewScreen({route,navigation}:NativeProps) {
  const categoryId=route.params.categoryId
  const categoryTitle=route.params.categoryTitle
  const displayedMeals=MEALS.filter((meal)=>(meal.categoryIds.includes(categoryId)))

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:categoryTitle
    })
  },[categoryTitle,navigation])

  function pressHandler(meal:Meal){
     navigation.navigate("MealsDetails",
      {
        meal:meal
      }
     )
  }
 
  return (
    <View style={styles.mealsContainer}>
      <View>
        <FlatList 
          data={displayedMeals} 
          renderItem={({item})=> <MealItem onPress={()=>pressHandler(item)} meal={item}/>}
          keyExtractor={(item)=>item.id}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mealsContainer:{
    flex:1,
    padding:19
  }
})