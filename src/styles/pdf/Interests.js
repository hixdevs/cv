import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    padding: "0 10",
    margin: "20 auto",
    width: "90%",
    height: "auto",
  },

  heading: {
    letterSpacing: 1.5,
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 20,
    color: "#d4b88a",
  },

  interests: {
    lineHeight: 1.8,
    textTransform: "uppercase",
  },
})
