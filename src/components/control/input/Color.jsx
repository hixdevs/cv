import React from "react"
import { Form, FormGroup } from "react-bootstrap"

const InputColor = ({ name, label, onChangeColor, value }) => {
  return (
    <FormGroup className="mb-2 d-flex flex-column align-items-center">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type="color"
        id={name}
        name={name}
        value={value}
        onChange={onChangeColor}
        label={label}
      />
    </FormGroup>
  )
}

export default InputColor
