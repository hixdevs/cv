import React from "react"
import "../../styles/control/ControlPanel.css"
import FormColors from "./form/Colors.js"
import Download from "./Download"

const ControlPanel = ({ data, onChange, theme }) => {
  return (
    <>
      <div className="container">
        <div className="colors">
          <FormColors onChange={onChange} theme={theme} />
        </div>
        <Download data={data} theme={theme} />
      </div>
    </>
  )
}

export default ControlPanel
