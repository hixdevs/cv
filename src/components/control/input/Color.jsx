import React, { useState } from "react"
import { Form, FormGroup } from "react-bootstrap"

const InputColor = ({ name, defaultValue, display, onChange, color }) => {
  // const [color, setColor] = useState(defaultValue)
  // const [theme, setTheme] = useState({
  //   primary: "#42413e",
  //   teranry: "#fafafa",
  //   secondary: "#c4ad93",
  //   textLight: "#ffffff",
  //   textDark: "#222222",
  //   link: "#54b2ff",
  // })

  // console.log("theme:", theme)
  // console.log("color:", color)

  // const onChange = event => {
  //   setColor(event.target.value)
  // }

  return (
    <FormGroup className="mb-2">
      <Form.Label htmlFor={name}>{display}</Form.Label>
      <Form.Control
        type="color"
        id={name}
        title={name}
        value={color}
        onChange={onChange}
      />
    </FormGroup>
  )
}

export default InputColor
