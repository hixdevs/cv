import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    fontSize: 10,
    display: "flex",
    margin: "10 auto",
    padding: "5 10",
    width: "90%",
    height: "auto",
    lineHeight: 1.1,
  },

  company: {
    textDecoration: "none",
    color: "#3489e3",
    marginBottom: 8,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  job: {
    marginBottom: 8,
  },
  years: {
    textTransform: "uppercase",
  },

  list: {
    fontSize: 5,
  },
})
