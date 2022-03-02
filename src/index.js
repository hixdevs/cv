import React from "react"
import ReactDOM from "react-dom"
import { PDFViewer } from "@react-pdf/renderer"
import { Container, Row, Col } from "react-bootstrap"
// import ColsOneToTwo from "./components/pdf/ColsOneToTwo"
// import ColsTwoToOne from "./components/pdf/ColsTwoToOne"
import ColsOneToOne from "./components/pdf/ColsOneToOne"
import data from "./data/data.js"
import ControlPanel from "./components/control/ControlPanel"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { PdfThemeContext } from "./hooks/usePdfTheme"

const App = () => {
  const [theme, setTheme] = useState({
    primary: "#aeae",
    teranry: "#fafafa",
    secondary: "#c4ad93",
    textLight: "#ffffff",
    textDark: "#222222",
    link: "#54b2ff",
  })

  const onChange = event => {
    setTheme(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <div>
      <Container fluid="xxl">
        <Row>
          <Col>
            <ControlPanel data={data} onChange={onChange} />
          </Col>
          <Col>
            <PDFViewer
              // Styling <iframe />
              // https://stackoverflow.com/a/30345808/6439240
              style={{ width: "21cm", height: "29.7cm" }}
              showToolbar={false}
            >
              <PdfThemeContext.Provider value={theme}>
                <ColsOneToOne data={data} />
              </PdfThemeContext.Provider>
            </PDFViewer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById("root"),
)
