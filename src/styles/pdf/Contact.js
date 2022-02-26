import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  container: {
    margin: "10 auto",
    padding: "0 10",
    display: "flex",
    width: "90%",
    height: "auto",
  },

  contact: {
    lineHeight: 1.8,
    letterSpacing: 0.6,
  },

  email: {
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase",
  },

  address: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    lineHeight: 1.3,
  },

  heading: {
    letterSpacing: 1.5,
    fontSize: 11,
    textTransform: "uppercase",
    marginBottom: 20,
    color: "#d4b88a",
  },
})
