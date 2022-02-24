import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  container: {
    fontSize: 13,
    display: "flex",
    flexDirection: "column",
    margin: "20 auto",
    width: "90%",
    height: "auto",
    backgroundColor: "#e6f2ff",
    border: "2px solid gray",
  },

  image: {
    maxWidth: "100%",
    height: "auto",
    margin: "0 auto",
    backgroundColor: "white",
  },

  name: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "100%",
    fontSize: 22,
    padding: "10 0",
    textTransform: "uppercase",
  },
})
