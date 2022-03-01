import React, { Component } from "react"

export default class PSPDFKit extends Component {
  containerRef = React.createRef()

  componentDidMount() {
    const url = URL.createObjectURL(this.props.blob)

    window.PSPDFKit.load({
      document: url,
      container: this.containerRef.current,
      // styleSheets: ["../../styles/pdf/PSPDFKit.css"],
    })
  }

  componentWillUnmount() {
    window.PSPDFKit.unload(this.containerRef.current)
  }

  render() {
    return (
      <div
        ref={this.containerRef}
        style={{
          width: "70%",
          height: "100%",
          position: "absolute",
          left: "30%",
        }}
      />
    )
  }
}
