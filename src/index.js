import React from "react"
import ReactDOM from "react-dom"
import { BlobProvider } from "@react-pdf/renderer"
import PSPDFKit from "./components/pdf/PSPDFKit"
import BasicPDF from "./components/pdf/Basic"

import "./styles/page.css"

ReactDOM.render(
  <BlobProvider document={BasicPDF}>
    {({ blob, url, loading, error }) => {
      if (blob) {
        return <PSPDFKit blob={blob} />
      }

      if (error) {
        return error
      }

      return <div>The PDF is rendering...</div>
    }}
  </BlobProvider>,
  document.getElementById("root"),
)
