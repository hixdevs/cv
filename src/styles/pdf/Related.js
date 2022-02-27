import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"
import { theme } from "./themes"

export default StyleSheet.create({
  ...global,

  container: {
    margin: "0 auto",
    paddingTop: 10,
    display: "flex",
    width: "90%",
    height: "auto",
  },

  source: {
    textDecoration: "none",
    color: theme.link,
    lineHeight: 1.5,
  },
  heading: {
    letterSpacing: 1.5,
    fontSize: 11,
    textTransform: "uppercase",
    marginBottom: 5,
    color: "#d4b88a",
  },
})
