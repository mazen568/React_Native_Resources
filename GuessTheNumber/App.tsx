import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <StartGameScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    // paddingTop: 50,
    // paddingHorizontal: 16,
    // backgroundColor: '#f0f0f0',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});
