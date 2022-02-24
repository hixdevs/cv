import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    display: "flex",
    backgroundColor: "#423939",
    color: "white",
    width: "35%",
  },

  layout: {
    display: "flex",
    width: "95%",
    margin: "0 auto",
  },
})
