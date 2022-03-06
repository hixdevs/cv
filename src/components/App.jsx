import React from "react"
import { PDFViewer } from "@react-pdf/renderer"
import { Container, Row, Col } from "react-bootstrap"
import LessDense from "../components/pdf/LessDense"
// import ColsOneToTwo from "../components/pdf/ColsOneToTwo"
// import ColsTwoToOne from "../components/pdf/ColsTwoToOne"
// import ColsOneToOne from "../components/pdf/ColsOneToOne"
import data from "../data/dataop"
// import data from "../data/data"
import ControlPanel from "../components/control/ControlPanel"
import { useState } from "react"
import { PdfThemeContext } from "../hooks/usePdfTheme"
import { useTheme } from "../lib/store"

const App = () => {
  const [theme, setTheme] = useTheme({
    primary: "#5C7062",
    ternary: "#fffcef",
    secondary: "#D1D1D1",
    textLight: "#ffffff",
    textDark: "#9E9E9E",
    link: "#54b2ff",
    // img: "square",
  })

  const onChangeColor = event => {
    setTheme(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }
  const [content, setContent] = useState(JSON.stringify(data, undefined, 2))

  const onSubmit = event => {
    event.preventDefault()
    setContent(event.target.elements[0].value)
    console.log(event.target.elements[0].value)
  }
  // const onChangeContent = event => {
  //   setContent(event.target.value)
  // }

  return (
    <div>
      <Container fluid="xxl">
        <Row>
          <Col>
            <ControlPanel
              data={JSON.parse(content)}
              onChange={onChangeColor}
              theme={theme}
              content={content}
              onSubmit={onSubmit}
            />
          </Col>
          <Col>
            <PDFViewer
              // Styling <iframe />
              // https://stackoverflow.com/a/30345808/6439240
              style={{ width: "21cm", height: "29.7cm" }}
              showToolbar={false}
            >
              <PdfThemeContext.Provider value={theme}>
                <LessDense data={JSON.parse(content)} />
              </PdfThemeContext.Provider>
            </PDFViewer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
