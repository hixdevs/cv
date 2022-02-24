import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default StyleSheet.create({
  ...global,
  container: {
    display: "flex",
    fontSize: 13,
    width: "90%",
    padding: "2 0",
    margin: "0 auto",
    height: "auto",
    backgroundColor: "white",
    border: "1px solid gray",
  },
  email: {
    color: "black",
    textDecoration: "none",
    lineHeight: 1.3,
  },

  address: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    lineHeight: 1.3,
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
  },
})
