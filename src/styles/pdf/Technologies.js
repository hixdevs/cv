import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,
    container: {
      display: "flex",
      margin: "0 auto",
      paddingTop: 10,
      width: "90%",
      height: "auto",
    },

    heading: {
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      marginBottom: 7,
      color: theme.heading,
    },
    technologies: {
      lineHeight: 1,
      // flexDirection: "column",
      // flexWrap: "wrap",
      // maxHeight: 60,
    },
  })
