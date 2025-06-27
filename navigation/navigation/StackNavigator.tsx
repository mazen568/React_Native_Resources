import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './type';
import DrawerNavigator from './DrawerNavigator';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import BottomTabNavigator from './BottomNavigator';
export default function StackNavigator() {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#3f2f25" },
        headerBackTitle: "Back",
    }}>

        {/* <Stack.Screen
            name="Categories"
            component={DrawerNavigator}
            options={{
                title: "All Categories",
                headerShown: false

            }}
        /> */}
        <Stack.Screen
            name="HomeTabs"
            component={BottomTabNavigator}
            options={{
                title: "All Categories",
                headerShown: false

            }}
        />

        <Stack.Screen
            name="Meals"
            component={MealsOverviewScreen}
        // options={({route,navigation})=>({
        //   title:route.params.categoryTitle
        // })}
        />
        <Stack.Screen
            name="MealsDetails"
            component={MealDetailsScreen}
            options={{
                title: "Meal"
            }}
        />
    </Stack.Navigator>

}