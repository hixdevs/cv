import React from "react"
import { Form } from "react-bootstrap"
import InputColor from "../input/Color"
import { inputs } from "../../../lib/colors"
import { useState } from "react"

const FormColors = () => {
  const [color, setColor] = useState({
    primary: "#42413e",
    teranry: "#fafafa",
    secondary: "#c4ad93",
    textLight: "#ffffff",
    textDark: "#222222",
    link: "#54b2ff",
  })

  const onChange = event => {
    console.log("event:", event.target)

    setColor(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
    console.log("color", color)
  }

  return (
    <Form>
      {inputs.map((input, idx) => (
        <InputColor
          key={idx}
          name={input.name}
          defaultValue={input.default}
          label={input.display}
          value={color}
          onChange={onChange}
        />
      ))}
    </Form>
  )
}

export default FormColors
