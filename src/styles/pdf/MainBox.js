import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import RoboCond from "../../RoboCond.ttf"
// import Raleway from "https://fonts.googleapis.com/css2?family=Inter&family=Raleway:wght@500&family=Source+Sans+Pro&display=swap"

Font.register({
  family: "RoboCond",
  src: RoboCond,
})

export default StyleSheet.create({
  ...global,

  container: {
    fontSize: 9,
    fontFamily: "RoboCond",
    display: "flex",
    backgroundColor: "#f5f3f0",
    color: "#333333",
    width: "65%",
  },

  techRel: {
    padding: "2 10",
    flexDirection: "row",
    margin: "0 auto",
    width: "90%",
    // justifyContent: "space-around",
  },
})
