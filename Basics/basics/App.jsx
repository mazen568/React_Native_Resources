import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {

  return (
    <View style={styles.appContainer}>

      <View >
        <TextInput placeholder="Your course goal"/>
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>list of goals</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50
  }

});
