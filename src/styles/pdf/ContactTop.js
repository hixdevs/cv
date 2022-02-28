import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },

  contact: {
    display: "flex",
    width: "50%",
    lineHeight: 1.5,
  },

  email: {
    color: "white",
    textDecoration: "none",
    lineHeight: 1.3,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  heading: {
    letterSpacing: 1.5,
    fontSize: 11,
    textTransform: "uppercase",
    margin: "15 0 10",
    color: "#d4b88a",
  },
  address: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end",
    flexWrap: "wrap",
    paddingTop: 10,
    lineHeight: 1.5,
  },
})
