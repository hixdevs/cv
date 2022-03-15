import React from "react"
import { Form } from "react-bootstrap"
import { radioLayoutOptions } from "../../../lib/layouts"

const FormRadioLayouts = ({ onChange, layout }) => {
  return (
    <Form>
      <div key="radio" className="mb-3">
        {radioLayoutOptions.map(option => (
          <Form.Check
            className="d-flex justify-content-center"
            key={option.name}
            label={option.label}
            name="layout"
            type="radio"
            value={option.value}
            checked={layout === option.value}
            onChange={onChange}
          />
        ))}
      </div>
    </Form>
  )
}

export default FormRadioLayouts
