import { View,Text, StyleSheet } from "react-native"
import Colors from "../../util/colors"
type NumberContainerProps={
    children:React.ReactNode
}
function NumberContainer({children}:NumberContainerProps){
   return <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
   </View>
}
export default NumberContainer
const styles=StyleSheet.create({

    container:{
       padding:24,
       borderWidth:4,
       borderColor:Colors.accent500,
       borderRadius:8,
       justifyContent:"center",
       alignItems:"center",
       margin:24
    },
    numberText:{
        color:Colors.accent500,
        fontSize:36,
        // fontWeight:"bold"
        fontFamily:"open-sans-bold"
    }
})