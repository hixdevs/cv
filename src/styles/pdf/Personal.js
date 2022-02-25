import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  container: {
    fontSize: 13,
    textAlign: "center",
    flexDirection: "column",
    margin: "20 auto",
    width: "90%",
    height: "auto",
  },

  image: {
    maxWidth: "100%",
    height: "auto",
    margin: "0 auto",
  },

  name: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "90%",
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 1.2,

    padding: "10 0",
    textTransform: "uppercase",
  },

  title: {
    fontSize: 18,
    marginBottom: 8,
  },
})
