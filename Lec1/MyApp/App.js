import React from "react";
import { Text, View, Image, ImageBackground, ScrollView } from "react-native";
const img = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1 }}>
      <ScrollView style={{padding: 60}}>
        <Image source={img} style={{ width: 300, height: 300 }} />

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          numquam distinctio aut minima? Consequuntur aut eos saepe enim velit
          doloremque ad necessitatibus, molestias labore explicabo impedit non,
          facere dignissimos quam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis numquam distinctio aut minima?
          Consequuntur aut eos saepe enim velit doloremque ad necessitatibus,
          molestias labore explicabo impedit non, facere dignissimos quam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam
          distinctio aut minima? Consequuntur aut eos saepe enim velit
          doloremque ad Blanditiis numquam distinctio aut minima? Consequuntur
          aut eos saepe enim velit doloremque ad Blanditiis numquam distinctio
          aut minima? Consequuntur aut eos saepe enim velit doloremque ad
          Blanditiis numquam distinctio aut minima? Consequuntur aut eos saepe
          enim velit doloremque ad Blanditiis numquam distinctio aut minima?
          Consequuntur aut eos saepe enim velit doloremque ad Blanditiis numquam
          distinctio aut minima? Consequuntur aut eos saepe enim velit
          doloremque ad Blanditiis numquam distinctio aut minima? Consequuntur
          aut eos saepe enim velit doloremque ad Blanditiis numquam distinctio
          aut minima? Consequuntur aut eos saepe enim velit doloremque ad
          Blanditiis numquam distinctio aut minima? Consequuntur aut eos saepe
          enim velit doloremque ad Blanditiis numquam distinctio aut minima?
          Consequuntur aut eos saepe enim velit doloremque ad Blanditiis numquam
          distinctio aut minima? Consequuntur aut eos saepe enim velit
          doloremque ad Blanditiis numquam distinctio aut minima? Consequuntur
          aut eos saepe enim velit doloremque ad Blanditiis numquam distinctio
          aut minima? Consequuntur aut eos saepe enim velit doloremque ad
          Blanditiis numquam distinctio aut minima? Consequuntur aut eos saepe
          enim velit doloremque ad
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/300" }}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
    </View>
  );
}
