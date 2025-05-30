import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritance
          <Text style={styles.boldText}> hello this is mazen </Text>
        </Text>
      </View>
      <View style={[styles.lightBlueBg, styles.box]}>
        <Text> StyleSheet api</Text>
      </View>
      <View style={[styles.lightGreenBg, styles.box, styles.boxShadow]}>
        <Text> StyleSheet api</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    width: 250,
    height: 250,
    // padding:24,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    borderWidth: 4,
    borderColor: "gray",
    borderStyle: "solid",
    borderRadius: 15,
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },

  boxShadow: {
    shadowColor: "red",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    elevation: 10,
  },
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
   boldText:{
    fontWeight:"bold",
   }
});
