import React from "react"
import { Form } from "react-bootstrap"
import Select from "react-select"
import { layouts } from "../../../lib/layouts"

const FormLayouts = ({ selectedLayout, setSelectedLayout, onSelect }) => {
  //   console.log("selectedLayout:", selectedLayout)

  return (
    <Select value={selectedLayout} onChange={onSelect} options={layouts} />
    // <Form.Select aria-label="Choose layout" className="mt-3">
    //   <option>Choose layout</option>
    //   <option value="1">One To One</option>
    //   <option value="2">One To Two</option>
    //   <option value="3">Two To One</option>
    // </Form.Select>
  )
}

export default FormLayouts
