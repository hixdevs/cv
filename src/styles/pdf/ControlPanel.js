import { StyleSheet } from "@react-pdf/renderer"
import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    width: "49%",
    height: "100%",
    position: "absolute",
    right: "50%",
    display: "flex",
    border: "1px solid black",
  },

  box: {
    display: "flex",
    padding: 40,
    border: "1px solid black",
    width: "90%",
    height: "auto",
    margin: "0 auto",
  },
})
