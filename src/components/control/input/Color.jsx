import React from "react"
import { Form, FormGroup } from "react-bootstrap"

const InputColor = ({ name, defaultValue, label, onChange }) => {
  return (
    <FormGroup className="mb-2">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type="color"
        id={name}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        label={label}
      />
    </FormGroup>
  )
}

export default InputColor
