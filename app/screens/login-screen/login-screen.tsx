import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, View, SafeAreaView, TextStyle, ImageStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"

import { Button } from "../../components/button"

import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Wallpaper } from "../../components/wallpaper"
import { translate } from "../../i18n/"
import { Header } from "../../components/header"
export interface LoginScreenProps extends NavigationScreenProps<{}> {}

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
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
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

// @inject("mobxstuff")
@observer
export class LoginScreen extends React.Component<LoginScreenProps, {}> {
  nextScreen = () => this.props.navigation.navigate("secondExample");
  
  render() {
    return (
      <View testID="loginScreen" style={FULL}>
        <Wallpaper />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Header headerTx="loginScreen.header" style={HEADER} titleStyle={HEADER_TITLE} />
          <Text style={CONTENT}>{translate("loginScreen.loginText")}</Text>
        </Screen>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <Button
              testID="next-screen-button"
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              tx="firstExampleScreen.continue"
              onPress={this.nextScreen}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}
