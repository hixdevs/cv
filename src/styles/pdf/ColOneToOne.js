import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,
    page: {
      display: "flex",
      padding: 5,
    },

    panel: {
      width: "2%",
      backgroundColor: theme.ternary,
      opacity: 0.5,
    },
    main: {
      flexDirection: "row",
      marigin: "0 auto",
      width: "100%",
      height: "80%",
      alignContent: "flex-end",
    },
  })
