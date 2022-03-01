import { StyleSheet } from "@react-pdf/renderer"
import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    width: "30%",
    position: "absolute",
    right: "70%",
  },

  box: {
    display: "flex",
    padding: 10,
    border: "1px solid lightgreen",
    height: "auto",
    justifyContent: "center",
  },
})
