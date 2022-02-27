import React, { Component } from "react"
// import styles from "src/styles/pdf/Outer"
import { View } from "@react-pdf/renderer"
import ControlPanel from "./ControlPanel.jsx"

export default class PSPDFKit extends Component {
  containerRef = React.createRef()

  componentDidMount() {
    const url = URL.createObjectURL(this.props.blob)
    window.PSPDFKit.load({
      document: url,
      container: this.containerRef.current,
    })
  }

  componentWillUnmount() {
    window.PSPDFKit.unload(this.containerRef.current)
  }

  render() {
    return (
      <div>
        <ControlPanel />
        <div
          ref={this.containerRef}
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            left: "50%",
          }}
        />
      </div>
    )
  }
}
