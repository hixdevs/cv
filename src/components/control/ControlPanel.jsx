import React from "react"
import "../../styles/control/ControlPanel.css"
import FormColors from "./form/Colors.js"
import Download from "./Download"
import Submit from "./SubmitBtn"
import FormData from "./form/Data"

const ControlPanel = ({ data, onChange, onChangeContent, theme, content }) => {
  return (
    <>
      <div className="container">
        <div className="colors">
          <FormColors onChange={onChange} theme={theme} />
          <FormData content={content} onChange={onChangeContent} />
        </div>
        <Submit />
        <Download data={data} theme={theme} />
      </div>
    </>
  )
}

export default ControlPanel
