import { View, Text, StyleSheet } from "react-native";

export default function Box({style,children}) {
  return (
    <View style={[styles.box,style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "",
    padding: 20,
    width:100,
    height:100
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color:"white",
  },
});
