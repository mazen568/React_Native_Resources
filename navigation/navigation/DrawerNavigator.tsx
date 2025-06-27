import { createDrawerNavigator } from '@react-navigation/drawer'
import { RootDrawerParamList } from './type'
import CategoriesScreen from '../screens/CategoriesScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

export default function DrawerNavigator() {
      const Drawer = createDrawerNavigator<RootDrawerParamList>();
    
    return <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      sceneStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle:{ backgroundColor: "#3f2f25" },
      drawerActiveTintColor:"white",
      drawerInactiveTintColor:"#351401"
    }}>
      {/* <Drawer.Screen name="CategoriesDrawer" component={CategoriesScreen}/> */}
      <Drawer.Screen name="FavoritesDrawer" component={FavouritesScreen}/>
    </Drawer.Navigator>
  }