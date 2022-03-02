import React from "react"
import { Form } from "react-bootstrap"
import InputColor from "../input/Color"
import { colors } from "../../../lib/colors"
import { useState } from "react"

const FormColors = () => {
  const [color, setColor] = useState(colors.map(color => color.default))
  const [theme, setTheme] = useState({
    // primary: "#42413e",
    // teranry: "#fafafa",
    // secondary: "#c4ad93",
    // textLight: "#ffffff",
    // textDark: "#222222",
    // link: "#54b2ff",
  })

  // console.log("theme:", theme)
  console.log("color:", color)

  const onChange = event => {
    setColor(event.target.value)
    setTheme(colors.map(color => (theme[color.name] = event.target.value)))

    console.log("theme", theme)
    // setTheme(theme => ({ ...theme, "primary": {event.target.value} }))
    // console.log(
    // colors.map(color => setTheme((theme[color.name] = event.target.value))),
    // )
  }

  return (
    <Form>
      {colors.map((color, idx) => (
        <InputColor
          key={idx}
          name={color.name}
          defaultValue={color.default}
          display={color.display}
          onChange={onChange}
          value={color}
        />
      ))}
    </Form>
  )
}

export default FormColors
