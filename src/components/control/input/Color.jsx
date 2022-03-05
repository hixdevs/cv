import React from "react"
import { Form, FormGroup } from "react-bootstrap"

const InputColor = ({ name, label, onChange, value }) => {
  return (
    <FormGroup className="mb-2">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type="color"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
      />
    </FormGroup>
  )
}

export default InputColor
