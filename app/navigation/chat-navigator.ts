import { createStackNavigator } from "react-navigation"
import { LoginScreen } from "../screens/login-screen"


export const ChatNavigator = createStackNavigator({
  login: { screen: LoginScreen },
  
})