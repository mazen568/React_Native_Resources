import { StyleSheet, Text, View, Pressable } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
type IconButtonProps={
    onPress:()=>void
    clicked:boolean
}
export default function IconButton({onPress,clicked}:IconButtonProps) {
    return (
        <Pressable 
           style={({pressed})=>(pressed && styles.buttonPressed)} 
          onPress={onPress}
          >
                <Ionicons name="star" size={24} color={clicked?"#3f2f25":"white"}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonPressed:{
      opacity:0.7
    }
})