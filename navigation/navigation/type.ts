import Meal from "../models/meal"
export type RootStackParamList={
    Categories:undefined
    Meals:{categoryId:string,categoryTitle:string}
    MealsDetails:{meal:Meal}
    Favorites:undefined
    HomeTabs:undefined
}
export type RootDrawerParamList={
    CategoriesDrawer:undefined
    FavoritesDrawer:undefined
}
export type RootTabsParamList={
    CategoriesTab:undefined
    FavoritesTab:undefined
}