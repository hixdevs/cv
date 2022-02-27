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
      width: "25%",
      margin: "auto 20",
    },

    personal: {
      maxWidth: "63%",
    },

    name: {
      fontFamily: "RobotoCon",
      color: theme.heading,
      fontSize: 28,
      letterSpacing: 4,
      lineHeight: 1.4,
      textTransform: "uppercase",
    },

    title: {
      fontFamily: "RobotoCon",
      display: "flex",
      textTransform: "uppercase",
      fontSize: 10,
      letterSpacing: 2.5,
    },
  })
