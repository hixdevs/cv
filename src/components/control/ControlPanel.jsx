import React from "react"
import "../../styles/control/ControlPanel.css"
import FormColors from "./form/Colors.js"
import Download from "../pdf/Download"

const ControlPanel = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="colors">
          <FormColors />
        </div>
        <Download data={data} />
      </div>
    </>
  )
}

export default ControlPanel