import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    margin: "0 auto",
    paddingTop: 10,
    // padding: "0 10",
    display: "flex",
    width: "90%",
    height: "auto",
  },

  source: {
    textDecoration: "none",
    color: "#54b2ff",
    lineHeight: 1.5,
    // letterSpacing: 1.5,
  },
  heading: {
    letterSpacing: 1.5,
    fontSize: 11,
    textTransform: "uppercase",
    marginBottom: 5,
    color: "#d4b88a",
  },
})
