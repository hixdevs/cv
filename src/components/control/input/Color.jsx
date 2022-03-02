import React, { useState } from "react"
import { Form, FormGroup } from "react-bootstrap"

const InputColor = ({ name, defaultValue, label, color, onChange }) => {
  // const [color, setColor] = useState(defaultValue)

  // const onChange = event => {
  //   setColor(event.target.value)
  //   console.log("color:", color)
  // }
  return (
    <FormGroup className="mb-2">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type="color"
        id={name}
        name={name}
        title={name}
        defaultValue={defaultValue}
        // value={color}
        onChange={onChange}
        label={label}
      />
    </FormGroup>
  )
}

export default InputColor
