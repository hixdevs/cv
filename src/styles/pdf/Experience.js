import { StyleSheet } from "@react-pdf/renderer"
import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,

    container: {
      display: "flex",
      padding: "5 15",
      width: "100%",
      maxHeight: "100%",
    },

    companyLink: {
      fontSize: 11,
      textDecoration: "none",
      color: theme.link,
      // marginBottom: 8,
      marginTop: 6,
    },

    companyText: {
      fontSize: 11,
      textDecoration: "none",
      color: theme.primary,
      // marginBottom: 8,
      marginTop: 6,
    },

    header: {
      marginTop: 6,
      marginBottom: 6,
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      color: theme.secondary,
    },

    years: {},
    heading: {
      letterSpacing: 1.5,
      fontSize: 11,
      textTransform: "uppercase",
      color: theme.primary,
    },

    list: {
      marginBottom: 5,
    },
    title: {
      fontSize: 10,
      // marginTop: 1,
    },

    topParagraph: {
      marginBottom: 7,
    },
    bottomParagraph: {
      marginTop: 2,
      marginBottom: 5,
    },
  })
