import usePdfTheme from "../hooks/usePdfTheme"
import React from "react"

const Component = () => {
  const theme = usePdfTheme()
  console.log("Component", theme)

  //   const styles = createStyles(theme)
  return <></>
}

export default Component
