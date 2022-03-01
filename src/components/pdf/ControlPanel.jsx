import React from "react"
import styles from "../../styles/pdf/ControlPanel"
import ColorInput from "../inputs/Color"
import Download from "./Download"

const ControlPanel = ({ data }) => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.box}>
          <ColorInput />
          <Download data={data} />
        </div>
      </div>
    </>
  )
}

export default ControlPanel
