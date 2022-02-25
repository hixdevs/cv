import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  container: {
    display: "flex",
    margin: "0 auto",
    width: "90%",
    height: "auto",
  },
  heading: {
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 5,
    color: "#d6bc90",
  },
})
