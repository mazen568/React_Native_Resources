import { RootStackParamList } from "./type";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CategoriesScreen from "../screens/CategoriesScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import {Ionicons} from '@expo/vector-icons';
import { Text } from "react-native-gesture-handler";

export default function BottomTabNavigator() {
    const BottomTab = createBottomTabNavigator<RootStackParamList>();

    return <BottomTab.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f25" },
        tabBarStyle:{
            backgroundColor:"#351401"
        },
        tabBarActiveTintColor:"#e4baa1",
        tabBarInactiveTintColor: "#3f2f25",
        animation:"shift"
        
    }}
    >
        <BottomTab.Screen 
            name="Categories" 
            component={CategoriesScreen} 
            options={{
            tabBarIcon:({color,size,focused})=><Ionicons name={focused?"home":"home-outline"} color={color} size={size}/>,
            tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 14, fontWeight: "bold" }}>Home</Text>
              )
        }}/>
        <BottomTab.Screen name="Favorites" component={FavouritesScreen} 
         options={{
            tabBarIcon:({color,size,focused})=><Ionicons name="star" size={size} color={color} style={{ opacity: focused ? 1 : 0.5 }}
/>,
            tabBarLabel:({color})=><Text style={{ color, fontSize: 14, fontWeight: "bold" }}>Favorites</Text>
         }}
        />
    </BottomTab.Navigator>
}