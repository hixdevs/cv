import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import RobotoCon from "../../RobotoCon.ttf"

Font.register({
  family: "RobotoCon",
  src: RobotoCon,
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
    fontFamily: "RobotoCon",
    color: "#edd09d",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "90%",
    fontSize: 28,
    letterSpacing: 4,
    lineHeight: 1.4,
    padding: "10 0",
    textTransform: "uppercase",
  },

  title: {
    textTransform: "uppercase",
    fontSize: 10,
    marginBottom: 5,
    letterSpacing: 2.5,
  },
})
