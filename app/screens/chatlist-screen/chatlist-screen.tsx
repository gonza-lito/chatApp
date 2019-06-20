import * as React from "react"
import { observer, inject } from "mobx-react"
import { ViewStyle, View, SafeAreaView, TextStyle, FlatList } from "react-native"

import { Text } from "../../components/text"
import { Screen } from "../../components/screen"

import { Button } from "../../components/button"

import { color, spacing } from "../../theme"

import { Wallpaper } from "../../components/wallpaper"
import { translate } from "../../i18n/"
import { Header } from "../../components/header"
import { TextField } from "../../components/text-field"
import { UserStore } from "../../models/user-store"
import { NavigationScreenProps } from "react-navigation"
import { ChatListItem } from "../../components/chatListItem"
import { ChatStore } from "../../models/chat-store"
import { Chat } from "../../models/chat"

export interface ChatListScreenProps extends NavigationScreenProps<{}> {
  chatStore: ChatStore
  userStore: UserStore
}

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

const CONTENT: TextStyle = {
  ...TEXT,
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#5D2555",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

const INPUT_STYLE = {
  color: color.palette.black,
}
@inject("chatStore")
@inject("userStore")
@observer
export class ChatListScreen extends React.Component<ChatListScreenProps, {}> {
  createRoomAndJoin = () => {
    console.log("hello", this.state)
    if (this.state.chatName && this.state.chatName !== "") {
      this.props.chatStore.createAndSetCurrent(this.state.chatName)
      this.props.navigation.navigate("roomScreen")
    }

  }
  joinRoom(room: any) {
    return () => {}
  }
  state = {
    chatName: "",
  }
  render() {
    return (
      <View testID="chatListScreen" style={FULL}>
        <Wallpaper />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header headerTx="chatListScreen.header" style={HEADER} titleStyle={HEADER_TITLE} />
          <Text style={CONTENT}>{translate("chatListScreen.chatList")}</Text>
          <FlatList
            data={this.props.chatStore.rooms.slice()}
            renderItem={({ item }: { item: Chat }) => (
              <ChatListItem room={item} onTap={this.joinRoom(item)} />
            )}
            onRefresh={this.props.chatStore.loadRooms}
            refreshing={this.props.chatStore.isLoading}
            keyExtractor={item => item.id.toString()}
            //  extraData={{ extra: this.props.toDoStore.todos }}
          />
        </Screen>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <TextField
              inputStyle={INPUT_STYLE}
              onChangeText={value =>
                this.setState({
                  chatName: value,
                })
              }
              value={this.state.chatName}
              label="Name"
              placeholder="omg your name"
            />
            <Button
              testID="create-button"
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              tx="chatListScreen.createButton"
              onPress={this.createRoomAndJoin}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}
