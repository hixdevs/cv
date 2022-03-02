import React from "react"
import { Form } from "react-bootstrap"
import InputColor from "../input/Color"
import { colors } from "../../../lib/colors"
import { useState } from "react"

const FormColors = ({ onChange }) => {
  // const [theme, setTheme] = useState({
  //   primary: "#42413e",
  //   teranry: "#fafafa",
  //   secondary: "#c4ad93",
  //   textLight: "#ffffff",
  //   textDark: "#222222",
  //   link: "#54b2ff",
  // })

  // const onChange = event => {
  //   setTheme(prevState => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }))
  //   console.log("theme:", theme)
  // }

  return (
    <Form>
      {colors.map((color, idx) => (
        <InputColor
          key={idx}
          name={color.name}
          defaultValue={color.default}
          label={color.display}
          onChange={onChange}
        />
      ))}
    </Form>
  )
}

export default FormColors
