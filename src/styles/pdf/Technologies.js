import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  container: {
    display: "flex",
    margin: "0 auto",
    paddingTop: 10,
    // padding: "5 10",
    width: "90%",
    height: "auto",
  },

  heading: {
    letterSpacing: 1.5,
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 7,
    color: "#d4b88a",
  },
  technologies: {
    flexDirection: "column",
    flexWrap: "wrap",
    maxHeight: 60,
  },
})
