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
      flexDirection: "column",
      padding: "0 15",
      margin: "10 auto",
      width: "100%",
      height: "auto",
    },

    image: {
      maxWidth: "100%",
      height: "auto",
      margin: "0 auto",
      ...(theme.img === "circle" && { borderRadius: "50%" }),
      ...(theme.img === "square" && { borderRadius: "2%" }),
    },

    name: {
      fontFamily: "RobotoCon",
      color: theme.secondary,
      flexDirection: "row",
      // flexWrap: "wrap",
      maxWidth: "100%",
      fontSize: 24,
      letterSpacing: 1.2,
      lineHeight: 1.4,
      padding: "10 0",
      textTransform: "uppercase",
    },

    title: {
      textTransform: "uppercase",
      fontSize: 10,
      marginBottom: 5,
      letterSpacing: 1,
    },
  })
