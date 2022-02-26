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
    fontSize: 9,
    paddingBottom: 150,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-end",
    fontFamily: "RobotoCon",
    display: "flex",
    backgroundColor: "#42413e",
    color: "white",
    width: "33%",
  },
})
