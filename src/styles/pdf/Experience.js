import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    fontSize: 10,
    display: "flex",
    margin: "0 auto",
    padding: "5 10",
    width: "90%",
    height: "auto",
    lineHeight: 1.1,
  },

  company: {
    textDecoration: "none",
    color: "#3489e3",
    marginBottom: 7,
    marginTop: 7,
  },

  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  years: {
    textTransform: "uppercase",
  },
  heading: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#d6bc90",
  },
})
