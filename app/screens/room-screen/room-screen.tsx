import * as React from "react"
import { observer, inject } from "mobx-react"
import { ViewStyle, TextStyle, View, SafeAreaView } from "react-native"

import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Wallpaper } from "../../components/wallpaper"
import { translate } from "../../i18n"
import { TextField } from "../../components/text-field"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { ChatStore } from "../../models/chat-store"
import { UserStore } from "../../models/user-store"
import { Message } from "../../components/message"
import { map } from "ramda"
import { User } from "../../models/user";
export interface RoomScreenProps extends NavigationScreenProps<{}> {
  chatStore: ChatStore
  userStore: UserStore
}

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  justifyContent: "flex-end",
  alignItems: "flex-end",
  paddingHorizontal: spacing[4],
  marginBottom: spacing[5],
}

const MESSAGES_CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent:"flex-end",
  backgroundColor: color.transparent,
  alignItems: "flex-end",
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
export class RoomScreen extends React.Component<RoomScreenProps, {}> {
  state = {
    messageText: "",
  }

  sendMessage = () => {
    if (this.state.messageText === "") return
    this.props.chatStore.sendMessageToCurrentRoom(
      this.state.messageText,
      this.props.userStore.currentUser,
    )
    this.setState({ messageText: "" })
  }

  render() {
    return (
      <View testID="chatRoomView" style={FULL}>
        <Wallpaper />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header
            headerText={translate("roomScreen.header") + this.props.chatStore.currentRoom.name}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <View style={MESSAGES_CONTAINER}>
            {map( msg => (
              <Message
                key ={msg.id}
                userName={(msg.author as User).nickname}
                messageText={msg.text}
                date={msg.timestamp as Date}
              />
            ),this.props.chatStore.currentRoom.messages)}
          </View>
        </Screen>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <TextField
              inputStyle={INPUT_STYLE}
              onChangeText={value =>
                this.setState({
                  messageText: value,
                })
              }
              value={this.state.messageText}
              label="Name"
              placeholder="message"
            />
            <Button
              testID="send-message-button"
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              tx="roomScreen.sendMessage"
              onPress={this.sendMessage}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}
