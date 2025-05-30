import React from "react";
import { Text, View, Image, ImageBackground, ScrollView,Button ,Pressable} from "react-native";
const img = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1 }}>
      <ScrollView style={{ padding: 60 }}>
        <Button
         onPress={()=>console.log("Button pressed")}
          title="Press"
          color="midnightblue"
        />


     <Pressable onPress={()=>console.log("Image pressed")}>
     <Image source={img} style={{ width: 300, height: 300 }} />
     </Pressable>

       <Pressable onPress={()=>console.log("Text pressed")}>
       <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          numquam distinctio aut minima? Consequuntur aut eos saepe enim velit
          doloremque ad necessitatibus, molestias labore explicabo impedit non,
          facere dignissimos quam. Lorem ipsum dolor sit amet consectetur
        </Text>
       </Pressable>

        <Image
          source={{ uri: "https://picsum.photos/300" }}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
    </View>
  );
}
