import React from "react"
import ReactDOM from "react-dom"
import { BlobProvider } from "@react-pdf/renderer"
import PSPDFKit from "./components/pdf/PSPDFKit"
import ColsOneToTwo from "./components/pdf/ColsOneToTwo"
import ColsTwoToOne from "./components/pdf/ColsTwoToOne"
import ColsOneToOne from "./components/pdf/ColsOneToOne"
import data from "./data/data.js"
import ControlPanel from "../src/components/pdf/ControlPanel"
import { PdfThemeContext, theme } from "./hooks/usePdfTheme"

ReactDOM.render(
  <div>
    {/* <ControlPanel /> */}
    <PdfThemeContext.Provider value={theme}>
      <BlobProvider document={<ColsOneToOne data={data} />}>
        {({ blob, url, loading, error }) => {
          if (blob) {
            return <PSPDFKit blob={blob} />
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
