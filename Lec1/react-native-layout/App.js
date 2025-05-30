import { StyleSheet, View, Text } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightblue" ,top:75 ,left:75}}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 2 shrink</Box>
      <Box style={{ backgroundColor: "brown" }}>Box 3</Box>
      <Box style={{ backgroundColor: "lightgreen" ,position:"absolute" ,top:100,left:100 }}>Box 4</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 5</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 6</Box>
      <Box style={{ backgroundColor: "green" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    marginTop: 64,
    borderColor: "brown",
    borderWidth: 6,
  },
});
