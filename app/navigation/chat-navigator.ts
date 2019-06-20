import { createStackNavigator } from "react-navigation"
import { LoginScreen } from "../screens/login-screen"
import { ChatListScreen } from "../screens/chatlist-screen";
import { RoomScreen } from "../screens/room-screen";


export const ChatNavigator = createStackNavigator({
         login: { screen: LoginScreen },
         chatScreen: { screen: ChatListScreen },
         roomScreen: { screen: RoomScreen },
       })