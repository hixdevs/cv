import React from "react"
import "../../styles/control/ControlPanel.css"
import FormColors from "./form/Colors.js"
import Download from "./Download"
import FormData from "./form/Data"
import FormLayouts from "./form/Layouts"

const ControlPanel = ({
  data,
  onChangeColor,
  onSubmit,
  theme,
  content,
  submitDisabled,
  onChangeContent,
  onSelect,
  selectedLayout,
  setSelectedLayout,
  LayoutComponent,
}) => {
  return (
    <>
      <div className="container">
        <div className="colors">
          <FormColors onChangeColor={onChangeColor} theme={theme} />
        </div>

        <FormLayouts
          selectedLayout={selectedLayout}
          setSelectedLayout={setSelectedLayout}
          onSelect={onSelect}
        />
        <FormData
          content={content}
          onSubmit={onSubmit}
          submitDisabled={submitDisabled}
          onChangeContent={onChangeContent}
        />
        <Download data={data} theme={theme} LayoutComponent={LayoutComponent} />
      </div>
    </>
  )
}

export default ControlPanel
