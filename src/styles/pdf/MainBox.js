import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,

  container: {
    fontSize: 10,
    display: "flex",
    backgroundColor: "#f5f0eb",
    color: "#333333",
    width: "65%",
  },

  techRel: {
    padding: "5 10",
    flexDirection: "row",
    margin: "0 auto",
    width: "90%",
    // justifyContent: "space-around",
  },
})
