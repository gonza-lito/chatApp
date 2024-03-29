import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../text"
import {Chat} from '../../models/chat'
export interface ChatListItemProps {
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
  room: Chat
  onTap():  void
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function ChatListItem(props: ChatListItemProps) {
  // grab the props
  const { tx, text, style, ...rest } = props
  const textStyle = { }

  return (
    <View style={style} {...rest}>
      <Text tx={tx} text={text} style={textStyle} />
    </View>
  )
}
