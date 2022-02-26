import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    margin: "0 auto",
    padingTop: 5,
    width: "90%",
    height: "auto",
  },

  company: {
    textDecoration: "none",
    color: "#54b2ff",
    marginBottom: 8,
    marginTop: 8,
    textTransform: "uppercase",
  },

  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  years: {
    textTransform: "uppercase",
    // fontSize: 8,
  },
  heading: {
    letterSpacing: 1.5,
    fontSize: 11,
    textTransform: "uppercase",
    color: "#d4b88a",
    marginTop: 5,
  },
})
