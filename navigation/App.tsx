import { StyleSheet, StatusBar, Button } from 'react-native'
import RootNavigator from './navigation/RootNavigator'

const App = () => {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <RootNavigator/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})