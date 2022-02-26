import { StyleSheet, Font } from "@react-pdf/renderer"
import OpenSansSemiBold from "../../OpenSansSemiBold.ttf"
import global from "./global"

Font.register({
  family: "OpenSansSemiBold",
  src: OpenSansSemiBold,
})

export default StyleSheet.create({
  ...global,
  container: {
    flexDirection: "column",
    padding: "0 10",
    margin: "20 auto",
    width: "90%",
    height: "auto",
  },

  image: {
    maxWidth: "100%",
    height: "auto",
    margin: "0 auto",
    // backgroundColor: "white",
  },

  name: {
    color: "#edd09d",
    fontFamily: "OpenSansSemiBold",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "90%",
    fontSize: 26,
    letterSpacing: 1.5,
    lineHeight: 1.4,
    padding: "10 0",
    textTransform: "uppercase",
  },

  title: {
    textTransform: "uppercase",
    fontSize: 10,
    marginBottom: 10,
    letterSpacing: 2.5,
  },
})
