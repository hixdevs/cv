import React from "react"
import "../../styles/control/ControlPanel.css"
import FormColors from "./form/Colors.js"
import Download from "./Download"
import FormData from "./form/Data"

const ControlPanel = ({ data, onChange, theme }) => {
  return (
    <>
      <div className="container">
        <div className="colors">
          <FormColors onChange={onChange} theme={theme} />
          <FormData />
        </div>
        <Download data={data} theme={theme} />
      </div>
    </>
  )
}

export default ControlPanel
