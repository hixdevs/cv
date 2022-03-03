import React from "react"
import { Form } from "react-bootstrap"
import InputColor from "../input/Color"
import { inputs } from "../../../lib/inputs"

const FormColors = ({ onChange }) => {
  return (
    <Form>
      {inputs.map((input, idx) => (
        <InputColor
          key={idx}
          name={input.name}
          defaultValue={input.default}
          label={input.label}
          onChange={onChange}
        />
      ))}
    </Form>
  )
}

export default FormColors
