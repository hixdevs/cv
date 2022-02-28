import { StyleSheet } from "@react-pdf/renderer"

import global from "./global"

export default theme =>
  StyleSheet.create({
    ...global,
    page: {
      display: "flex",
    },

    panel: {
      backgroundColor: theme.secondary,
      height: "1%",
      opacity: 0.5,
    },
    main: {
      fontSize: 9,
      flexDirection: "row",
      marigin: "0 auto",
      width: "100%",
      height: "79%",
      alignContent: "flex-end",
    },
  })
