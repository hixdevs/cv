import React, { useState } from "react"
import { PDFViewer } from "@react-pdf/renderer"
import { Container, Row, Col } from "react-bootstrap"
import LessDense from "../components/pdf/LessDense"
import ColsOneToTwo from "../components/pdf/ColsOneToTwo"
import ColsTwoToOne from "../components/pdf/ColsTwoToOne"
import ColsOneToOne from "../components/pdf/ColsOneToOne"
import data from "../data/dataop"
// import data from "../data/data"
import ControlPanel from "../components/control/ControlPanel"
import { PdfThemeContext } from "../hooks/usePdfTheme"
import { useTheme, useContent, useSelectedLayout } from "../lib/store"
import { themeDefault } from "../lib/colors.js"

const App = () => {
  const [content, setContent] = useContent(JSON.stringify(data, undefined, 2))
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [theme, setTheme] = useTheme({ themeDefault })
  const [selectedLayout, setSelectedLayout] = useSelectedLayout("ColsOneToOne")

  const onChangeColor = event => {
    setTheme(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmit = event => {
    event.preventDefault()
    setContent(event.target.elements.content.value)
    setSubmitDisabled(true)
  }

  const onChangeContent = () => {
    setSubmitDisabled(false)
  }

  const onSelect = event => {
    setSelectedLayout(event.value)
  }

  const layoutOptions = {
    ColsOneToOne: ColsOneToOne,
    ColsOneToTwo: ColsOneToTwo,
    ColsTwoToOne: ColsTwoToOne,
    LessDense: LessDense,
  }

  const LayoutComponent = layoutOptions[selectedLayout]

  return (
    <div>
      <Container fluid="xxl">
        <Row>
          <Col>
            <ControlPanel
              data={JSON.parse(content)}
              onChangeColor={onChangeColor}
              theme={theme}
              content={content}
              onSubmit={onSubmit}
              submitDisabled={submitDisabled}
              onChangeContent={onChangeContent}
              onSelect={onSelect}
              selectedLayout={selectedLayout}
              setSelectedLayout={setSelectedLayout}
              LayoutComponent={LayoutComponent}
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
                <LayoutComponent data={JSON.parse(content)} />
              </PdfThemeContext.Provider>
            </PDFViewer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
