import React from "react"
import { Form } from "react-bootstrap"
import InputColor from "../input/Color"
import { inputs } from "../../../lib/inputs"

const FormColors = ({ onChange, theme }) => {
  return (
    <Form className="d-flex flex-row flex-wrap justify-content-center">
      {inputs.map((input, idx) => (
        <InputColor
          key={idx}
          name={input.name}
          label={input.label}
          onChange={onChange}
          value={theme[input.name]}
        />
      ))}
    </Form>
  )
}

export default FormColors
