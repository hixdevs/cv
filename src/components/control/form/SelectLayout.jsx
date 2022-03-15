import React from "react"
import Select from "react-select"
import { selectLayouts } from "../../../lib/layouts"

const FormSelectLayout = ({ selectedLayout, onSelect }) => {
  return (
    <Select
      value={selectedLayout}
      onChange={onSelect}
      options={selectLayouts}
    />
  )
}

export default FormSelectLayout
