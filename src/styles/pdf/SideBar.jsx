import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import Prompt from "../../Prompt.ttf"
import { theme } from "./themes"

Font.register({
  family: "Prompt",
  src: Prompt,
})

export default StyleSheet.create({
  ...global,

  container: {
    fontFamily: "Prompt",
    fontSize: 9,
    paddingBottom: 150,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-end",
    display: "flex",
    backgroundColor: theme.primary,
    color: theme.textSide,
    width: "33%",
  },
})
