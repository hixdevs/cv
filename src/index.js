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
import { PdfThemeContext } from "./hooks/usePdfTheme"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"

import Component from "./components/Component"
import { createContext, useContext } from "react"

// export const PdfThemeContext = createContext()

const App = () => {
  const [theme, setTheme] = useState({
    primary: "#42413e",
    teranry: "#fafafa",
    secondary: "#c4ad93",
    textLight: "#ffffff",
    textDark: "#222222",
    link: "#54b2ff",
  })

  // const onChange = event => {
  //   setTheme(prevState => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }))
  // }
  console.log("TENtheme:", theme)

  return (
    <div>
      <BlobProvider
        document={
          <PdfThemeContext.Provider value={theme}>
            <Component />
            <ColsOneToOne data={data} />
          </PdfThemeContext.Provider>
        }
      >
        {({ blob, url, loading, error }) => {
          if (blob) {
            return (
              <Container fluid="xxl">
                <Row>
                  <Col>
                    <ControlPanel data={data} onChange={() => {}} />
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
    </div>
  )
}

export default App

ReactDOM.render(
  <App />,
  // <div>
  //   <PdfThemeContext.Provider value={theme}>
  //     <BlobProvider document={<ColsOneToOne data={data} />}>
  //       {({ blob, url, loading, error }) => {
  //         if (blob) {
  //           return (
  //             <Container fluid="xxl">
  //               <Row>
  //                 <Col>
  //                   <ControlPanel data={data} />
  //                 </Col>
  //                 <Col>
  //                   <PSPDFKit blob={blob} />
  //                 </Col>
  //               </Row>
  //             </Container>
  //           )
  //         }
  //         if (error) {
  //           return error
  //         }

  //         return <div>The PDF is rendering...</div>
  //       }}
  //     </BlobProvider>
  //   </PdfThemeContext.Provider>
  // </div>,
  document.getElementById("root"),
)
