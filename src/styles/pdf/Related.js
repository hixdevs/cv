import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    width: "90%",
    height: "auto",
  },

  source: {
    textDecoration: "none",
    color: "#3489e3",
    lineHeight: 1.5,
  },
  heading: {
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 5,
    color: "#d6bc90",
  },
})
