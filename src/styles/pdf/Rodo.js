import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  container: {
    textAlign: "center",
    alignSelf: "flex-end",
    margin: "auto auto 10",
    width: "90%",
    height: "auto",
    border: "1px solid gray",
    backgroundColor: "white",
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
  },
})
