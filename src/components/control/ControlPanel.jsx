import React from "react"
import "../../styles/control/ControlPanel.css"
import FormColors from "./form/Colors.js"
import Download from "./Download"
import FormData from "./form/Data"

const ControlPanel = ({ data, onChangeColor, onSubmit, theme, content }) => {
  return (
    <>
      <div className="container">
        <div className="colors">
          <FormColors onChangeColor={onChangeColor} theme={theme} />
        </div>
        <FormData content={content} onSubmit={onSubmit} />
        <Download data={data} theme={theme} />
      </div>
    </>
  )
}

export default ControlPanel
