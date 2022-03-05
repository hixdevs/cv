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

const App = () => {
  const [theme, setTheme] = useState({
    // primary: "#42413E",
    // ternary: "#fafafa",
    // secondary: "#c4ad93",
    // textLight: "#ffffff",
    // textDark: "#222222",
    // link: "#54b2ff",
    primary: "#5C7062",
    ternary: "#fffcef",
    secondary: "#D1D1D1",
    textLight: "#ffffff",
    textDark: "#9E9E9E",
    link: "#54b2ff",
    // img: "square",
  })

  const onChange = event => {
    setTheme(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))

    console.log("theme:", theme)
  }
  return (
    <div>
      <Container fluid="xxl">
        <Row>
          <Col>
            <ControlPanel data={data} onChange={onChange} theme={theme} />
          </Col>
          <Col>
            <PDFViewer
              // Styling <iframe />
              // https://stackoverflow.com/a/30345808/6439240
              style={{ width: "21cm", height: "29.7cm" }}
              showToolbar={false}
            >
              <PdfThemeContext.Provider value={theme}>
                <LessDense data={data} />
              </PdfThemeContext.Provider>
            </PDFViewer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
