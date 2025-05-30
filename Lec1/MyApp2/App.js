import { View ,Alert,Button} from "react-native";
import Greet from "./components/Greet";

export default function App() {
 
  return (
      <View style={{backgroundColor:"plum" ,padding:60,flex:1}}>
        <Greet name="CM punk"/>
        <Greet name="Randy Orton"/>
      </View>
  );
}
