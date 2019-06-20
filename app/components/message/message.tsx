import * as React from "react"
import { View, ViewStyle, TextStyle, StyleSheet } from "react-native"
import { Text } from "../text"
import { color } from "../../theme"
export interface MessageProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  /**
   * user name 
   */
  userName: string
  /**
    * text of the message
    */
  messageText: string

  /**
   * date of the message
   */
  date: Date

}

const DATE_STYLE: TextStyle = {
  flex: 1,
}

const USER_NAME_STYLE: TextStyle = {
  flex:1
}

const VIEW_STYLE: ViewStyle = {
  flexDirection: "column",
  height: 80,
  backgroundColor: color.palette.lightGrey,
}

const TEXT_STYLE: ViewStyle = {
  flex:2,
  flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "center",
  alignContent: "center",
  backgroundColor: color.palette.lighterGrey
}
/**
 * Stateless functional component for your needs
 *
 * Message on a chat room
 */
export function Message(props: MessageProps) {
  // grab the props
  const { tx, text, style, userName, messageText, date, ...rest } = props
  

  return <View style={{ ...VIEW_STYLE, ...style }} {...rest}>
      <Text style={USER_NAME_STYLE} text={userName} />
      <Text text={messageText} style={TEXT_STYLE} />
      <Text style={DATE_STYLE} text={date.toISOString()} />
    </View>
}
