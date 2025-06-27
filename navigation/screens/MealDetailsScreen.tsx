import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/type'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetails/Subtitle'
import List from '../components/MealDetails/List'
import IconButton from '../components/IconButton'
import { useState } from 'react'
type NativeProps = NativeStackScreenProps<RootStackParamList, "MealsDetails">

const MealDetailsScreen = ({ navigation, route }: NativeProps) => {
  const meal = route.params.meal
  const details = {
    duration: meal.duration,
    complexity: meal.complexity,
    affordability: meal.affordability
  }
   const [clicked, setClicked] = useState(false)

  function pressHandler(){
    setClicked(prev=>!prev)
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:()=>{
        return <IconButton clicked={clicked} onPress={pressHandler}/>
      }
    })
  }, [navigation, meal.title,clicked])
  return (
    <ScrollView >
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.mealTitle}>{meal.title}</Text>
      <MealDetails details={details} textColor={styles.detailsText} />
      <View style={styles.mealDetailsContainer}>
        <View style={styles.mapContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
        </View>
        <View style={styles.mapContainer}>
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  mealDetailsContainer: {

  },
  mealTitle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10
  },
  detailsText: {
    color: "#cccc"
  },
  mapContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: 350
  },


})