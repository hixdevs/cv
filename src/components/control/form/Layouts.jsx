import React from "react"
import { Form } from "react-bootstrap"

const FormLayouts = () => {
  return (
    <Form.Select aria-label="Choose layout" className="mt-3">
      <option>Choose layout</option>
      <option value="1">One To One</option>
      <option value="2">One To Two</option>
      <option value="3">Two To One</option>
    </Form.Select>
  )
}

export default FormLayouts
