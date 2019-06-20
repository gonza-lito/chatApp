import { createStackNavigator } from "react-navigation"


import { ChatNavigator } from "./chat-navigator";

export const RootNavigator = createStackNavigator(
  { 
    chatStack: { screen: ChatNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
