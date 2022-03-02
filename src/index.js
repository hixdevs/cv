import React from "react"
import ReactDOM from "react-dom"
import { BlobProvider } from "@react-pdf/renderer"
import { Container, Row, Col } from "react-bootstrap"
import PSPDFKit from "./components/pdf/PSPDFKit"
// import ColsOneToTwo from "./components/pdf/ColsOneToTwo"
// import ColsTwoToOne from "./components/pdf/ColsTwoToOne"
import ColsOneToOne from "./components/pdf/ColsOneToOne"
import data from "./data/data.js"
import ControlPanel from "./components/control/ControlPanel"
import { PdfThemeContext, theme } from "./hooks/usePdfTheme"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <div>
    <PdfThemeContext.Provider value={theme}>
      <BlobProvider document={<ColsOneToOne data={data} />}>
        {({ blob, url, loading, error }) => {
          if (blob) {
            return (
              <Container fluid="xxl">
                <Row>
                  <Col>
                    <ControlPanel data={data} />
                  </Col>
                  <Col>
                    <PSPDFKit blob={blob} />
                  </Col>
                </Row>
              </Container>
            )
          }
          if (error) {
            return error
          }

          return <div>The PDF is rendering...</div>
        }}
      </BlobProvider>
    </PdfThemeContext.Provider>
  </div>,
  document.getElementById("root"),
)
