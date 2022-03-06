import { StyleSheet, Font } from "@react-pdf/renderer"
import global from "./global"
import RobotoCon from "../../RobotoCon.ttf"

Font.register({
  family: "RobotoCon",
  src: RobotoCon,
})
export default theme =>
  StyleSheet.create({
    ...global,
    container: {
      fontSize: 9,
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: "100%",
    },

    image: {
      width: "100%",
      height: "auto",
      margin: "10 auto",
      ...(theme.img === "circle" && { borderRadius: "50%" }),
      ...(theme.img === "square" && { borderRadius: "2%" }),
    },

    imgageContainer: {
      maxWidth: "30%",
      margin: "auto 20",
    },

    personal: {
      margin: "0 auto",
      marginRight: 10,
      width: "85%",
    },

    name: {
      fontFamily: "RobotoCon",
      color: theme.secondary,
      fontSize: 28,
      letterSpacing: 4,
      lineHeight: 1.4,
    },

    title: {
      color: theme.secondary,
      fontFamily: "RobotoCon",
      display: "flex",
      fontSize: 10,
      letterSpacing: 2.5,
    },
  })
